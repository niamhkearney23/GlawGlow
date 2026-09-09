"use client";

import { useCallback, useEffect, useState } from "react";
import type { SiteContent } from "@/config/content";

const IMAGE_SLOTS = [
  { file: "hero.jpg", label: "Main photo (top of the page)" },
  { file: "split.jpg", label: "About photo" },
  { file: "gallery-1.jpg", label: "Gallery 1" },
  { file: "gallery-2.jpg", label: "Gallery 2" },
  { file: "gallery-3.jpg", label: "Gallery 3" },
  { file: "gallery-4.jpg", label: "Gallery 4" },
  { file: "gallery-5.jpg", label: "Gallery 5" },
  { file: "gallery-6.jpg", label: "Gallery 6" },
];

/** Decodes a photo, trying the widest-support route first. Safari can read HEIC
 *  via an <img> even though createImageBitmap may refuse it. */
async function decodeImage(file: File): Promise<{ width: number; height: number; draw: CanvasImageSource }> {
  try {
    const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
    return { width: bitmap.width, height: bitmap.height, draw: bitmap };
  } catch {
    /* fall through */
  }
  try {
    const bitmap = await createImageBitmap(file);
    return { width: bitmap.width, height: bitmap.height, draw: bitmap };
  } catch {
    /* fall through */
  }
  // Last resort: let the browser decode it as a normal image.
  return await new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ width: img.naturalWidth, height: img.naturalHeight, draw: img });
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      const heic = /\.(heic|heif)$/i.test(file.name) || /heic|heif/i.test(file.type);
      reject(
        new Error(
          heic
            ? "That's an iPhone HEIC photo, which this browser can't read. Open it in Photos and choose Export, or email the photo to yourself, then upload the JPG version."
            : "That photo format isn't supported. Please use a JPG or PNG."
        )
      );
    };
    img.src = url;
  });
}

/** Shrinks the photo and corrects sideways ones before upload. */
async function prepareImage(file: File): Promise<string> {
  const { width, height, draw } = await decodeImage(file);
  if (!width || !height) throw new Error("That photo appears to be empty.");
  const maxSide = 1600;
  const scale = Math.min(1, maxSide / Math.max(width, height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(height * scale);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not process that photo.");
  // JPEG has no transparency, so see-through parts of a PNG would come out
  // black. Lay down white first.
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(draw, 0, 0, canvas.width, canvas.height);
  const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
  const base64 = dataUrl.split(",")[1];
  if (!base64) throw new Error("Could not read that photo.");
  return base64;
}

export default function AdminPage() {
  const [signedIn, setSignedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [content, setContent] = useState<SiteContent | null>(null);
  const [sha, setSha] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [slotState, setSlotState] = useState<Record<string, string>>({});
  const [stamp, setStamp] = useState(Date.now());

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/content", { cache: "no-store" });
    if (res.status === 401) { setSignedIn(false); return; }
    const data = await res.json();
    if (!res.ok) { setError(data.error || "Could not load the site content."); return; }
    setContent(data.content);
    setSha(data.sha);
    setSignedIn(true);
    setError("");
  }, []);

  useEffect(() => { load(); }, [load]);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    setBusy(false);
    if (!res.ok) { setError(data.error || "Could not sign in."); return; }
    setPassword("");
    load();
  }

  async function save() {
    if (!content) return;
    setBusy(true); setError(""); setStatus("Saving...");
    const res = await fetch("/api/admin/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, sha }),
    });
    const data = await res.json();
    setBusy(false);
    if (!res.ok) { setStatus(""); setError(data.error || "Could not save."); return; }
    setStatus("Saved. Your website will update in about a minute.");
    load();
  }

  async function uploadPhoto(slot: string, file: File) {
    setBusy(true);
    setError("");
    setStatus("");
    setSlotState((p) => ({ ...p, [slot]: "Working..." }));
    try {
      const dataBase64 = await prepareImage(file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: slot, dataBase64 }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 401) throw new Error("You've been signed out. Sign in again and retry.");
      if (!res.ok) throw new Error(data.error || `Upload failed (${res.status}).`);
      setSlotState((p) => ({ ...p, [slot]: "Uploaded" }));
      setStatus("Photo uploaded. Your website will update in about a minute.");
      setStamp(Date.now());
    } catch (err) {
      const message = (err as Error).message;
      setSlotState((p) => ({ ...p, [slot]: "Failed" }));
      setError(message);
    } finally {
      setBusy(false);
    }
  }

  function update(fn: (draft: SiteContent) => void) {
    if (!content) return;
    const next = JSON.parse(JSON.stringify(content)) as SiteContent;
    fn(next);
    setContent(next);
  }

  // ---------- sign in ----------
  if (!signedIn) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-cream px-6">
        <form onSubmit={signIn} className="w-full max-w-sm">
          <h1 className="font-display text-4xl text-espresso">Glam &amp; Glow</h1>
          <p className="mt-2 font-sans text-sm text-espresso/60">Sign in to edit your website.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            className="mt-6 w-full border border-espresso/20 bg-white px-4 py-3 font-sans text-base outline-none focus:border-bronze"
          />
          <button type="submit" disabled={busy} className="btn-solid mt-4 w-full disabled:opacity-50">
            {busy ? "Checking..." : "Sign in"}
          </button>
          {error && <p className="mt-4 font-sans text-sm text-red-700">{error}</p>}
        </form>
      </main>
    );
  }

  if (!content) {
    return <main className="flex min-h-screen items-center justify-center bg-cream font-sans text-sm">Loading...</main>;
  }

  const field = "w-full border border-espresso/20 bg-white px-3 py-2 font-sans text-sm outline-none focus:border-bronze";
  const heading = "font-display text-3xl text-espresso";
  const card = "border border-espresso/15 bg-white p-5 md:p-6";

  return (
    <main className="min-h-screen bg-cream pb-40">
      {/* top bar */}
      <header className="sticky top-0 z-10 border-b border-espresso/10 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <p className="font-display text-xl text-espresso">Edit my website</p>
          <div className="flex items-center gap-3">
            <a href="/" target="_blank" rel="noopener noreferrer" className="font-sans text-xs uppercase tracking-widest text-espresso/60 hover:text-espresso">View site</a>
            <button
              onClick={async () => { await fetch("/api/admin/logout", { method: "POST" }); setSignedIn(false); }}
              className="font-sans text-xs uppercase tracking-widest text-espresso/60 hover:text-espresso"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl space-y-10 px-5 pt-8">
        {/* PRICES */}
        <section className={card}>
          <h2 className={heading}>Prices</h2>
          <p className="mt-1 font-sans text-sm text-espresso/60">Change a price, a name, or how long it takes.</p>
          {content.services.groups.map((group, gi) => (
            <div key={gi} className="mt-6">
              <input
                value={group.title}
                onChange={(e) => update((d) => { d.services.groups[gi].title = e.target.value; })}
                className={`${field} font-semibold`}
              />
              {group.items.map((item, ii) => (
                <div key={ii} className="mt-3 grid grid-cols-1 gap-2 border-l-2 border-bronze/40 pl-3 sm:grid-cols-[1fr_90px_90px]">
                  <input
                    value={item.name}
                    onChange={(e) => update((d) => { d.services.groups[gi].items[ii].name = e.target.value; })}
                    className={field}
                    placeholder="Service name"
                  />
                  <input
                    value={item.time}
                    onChange={(e) => update((d) => { d.services.groups[gi].items[ii].time = e.target.value; })}
                    className={field}
                    placeholder="30 min"
                  />
                  <input
                    value={item.price}
                    onChange={(e) => update((d) => { d.services.groups[gi].items[ii].price = e.target.value; })}
                    className={field}
                    placeholder="$45"
                  />
                  <textarea
                    value={item.desc}
                    onChange={(e) => update((d) => { d.services.groups[gi].items[ii].desc = e.target.value; })}
                    className={`${field} sm:col-span-3`}
                    rows={2}
                    placeholder="Short description (optional)"
                  />
                  <button
                    onClick={() => update((d) => { d.services.groups[gi].items.splice(ii, 1); })}
                    className="justify-self-start font-sans text-xs uppercase tracking-widest text-red-700 sm:col-span-3"
                  >
                    Remove this service
                  </button>
                </div>
              ))}
              <button
                onClick={() => update((d) => { d.services.groups[gi].items.push({ name: "", desc: "", time: "", price: "" }); })}
                className="btn-outline mt-4 px-4 py-2 text-xs"
              >
                Add a service
              </button>
            </div>
          ))}
        </section>

        {/* HOURS */}
        <section className={card}>
          <h2 className={heading}>Opening hours</h2>
          {content.footer.hours.map((h, i) => (
            <div key={i} className="mt-3 grid grid-cols-2 gap-2">
              <input value={h.day} onChange={(e) => update((d) => { d.footer.hours[i].day = e.target.value; })} className={field} />
              <input value={h.time} onChange={(e) => update((d) => { d.footer.hours[i].time = e.target.value; })} className={field} />
            </div>
          ))}
        </section>

        {/* PHOTOS */}
        <section className={card}>
          <h2 className={heading}>Photos</h2>
          <p className="mt-1 font-sans text-sm text-espresso/60">
            Pick a photo from your phone. Sideways photos are straightened and large ones shrunk automatically. The wording under each gallery photo is what shows when someone hovers over it, so change it to match the photo. Wording changes need Save changes; photos upload straight away.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {IMAGE_SLOTS.map((slot) => {
              const state = slotState[slot.file];
              // Gallery photos carry a caption; the hero and about photos don't.
              const gi = content.gallery.items.findIndex((it) => it.image === `/images/${slot.file}`);
              return (
                <div
                  key={slot.file}
                  className={`border p-3 ${state === "Failed" ? "border-red-400" : "border-espresso/20"}`}
                >
                  {/* Only this part opens the file chooser, so the caption box below stays clickable. */}
                  <label className="flex cursor-pointer items-center gap-3 hover:opacity-80">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/${slot.file}?v=${stamp}`}
                      alt=""
                      className="h-16 w-16 shrink-0 bg-sand object-cover"
                    />
                    <span className="min-w-0">
                      <span className="block font-sans text-sm font-semibold text-espresso">{slot.label}</span>
                      <span
                        className={`mt-0.5 block font-sans text-xs ${
                          state === "Failed"
                            ? "text-red-700"
                            : state === "Uploaded"
                              ? "text-green-700"
                              : "text-espresso/50"
                        }`}
                      >
                        {state || "Tap to choose a photo"}
                      </span>
                    </span>
                    <input
                      type="file"
                      accept="image/*,.jpg,.jpeg,.png,.webp,.heic,.heif"
                      className="hidden"
                      disabled={busy}
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) uploadPhoto(slot.file, f);
                        e.target.value = "";
                      }}
                    />
                  </label>

                  {gi >= 0 && (
                    <div className="mt-3">
                      <span className="block font-sans text-xs text-espresso/60">
                        Wording shown on this photo
                      </span>
                      <input
                        value={content.gallery.items[gi].caption}
                        onChange={(e) =>
                          update((d) => {
                            d.gallery.items[gi].caption = e.target.value;
                          })
                        }
                        placeholder="e.g. Spray tan"
                        className={`${field} mt-1`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* REVIEWS */}
        <section className={card}>
          <h2 className={heading}>Reviews</h2>
          <p className="mt-1 font-sans text-sm text-espresso/60">
            Only add real reviews from your clients. With none added, this section is hidden from the website.
          </p>
          {content.testimonials.items.map((t, i) => (
            <div key={i} className="mt-4 border-l-2 border-bronze/40 pl-3">
              <textarea
                value={t.quote}
                onChange={(e) => update((d) => { d.testimonials.items[i].quote = e.target.value; })}
                className={field}
                rows={2}
                placeholder="What the client said"
              />
              <input
                value={t.name}
                onChange={(e) => update((d) => { d.testimonials.items[i].name = e.target.value; })}
                className={`${field} mt-2`}
                placeholder="First name"
              />
              <button
                onClick={() => update((d) => { d.testimonials.items.splice(i, 1); })}
                className="mt-2 font-sans text-xs uppercase tracking-widest text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => update((d) => { d.testimonials.items.push({ quote: "", name: "" }); })}
            className="btn-outline mt-4 px-4 py-2 text-xs"
          >
            Add a review
          </button>
        </section>

        {/* ABOUT + WORDS */}
        <section className={card}>
          <h2 className={heading}>Words on the page</h2>
          <label className="mt-4 block font-sans text-xs uppercase tracking-widest text-espresso/50">Headline</label>
          <textarea value={content.hero.headline} onChange={(e) => update((d) => { d.hero.headline = e.target.value; })} className={field} rows={2} />
          <label className="mt-4 block font-sans text-xs uppercase tracking-widest text-espresso/50">Intro under the headline</label>
          <textarea value={content.hero.sub} onChange={(e) => update((d) => { d.hero.sub = e.target.value; })} className={field} rows={3} />
          <label className="mt-4 block font-sans text-xs uppercase tracking-widest text-espresso/50">About me</label>
          <textarea value={content.about.body} onChange={(e) => update((d) => { d.about.body = e.target.value; })} className={field} rows={5} />
        </section>

        {/* BOOKING */}
        <section className={card}>
          <h2 className={heading}>Booking</h2>
          <label className="mt-4 block font-sans text-xs uppercase tracking-widest text-espresso/50">Where the Book buttons send people</label>
          <input value={content.bookingUrl} onChange={(e) => update((d) => { d.bookingUrl = e.target.value; })} className={field} />
          <label className="mt-4 block font-sans text-xs uppercase tracking-widest text-espresso/50">
            Online booking calendar (Fresha or Calendly link, leave empty if you don&apos;t use one)
          </label>
          <input value={content.bookingEmbedUrl} onChange={(e) => update((d) => { d.bookingEmbedUrl = e.target.value; })} className={field} />
        </section>
      </div>

      {/* save bar */}
      <div className="fixed inset-x-0 bottom-0 border-t border-espresso/10 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <p className="max-w-lg font-sans text-sm text-espresso/70">
            {error ? (
              <span className="font-semibold text-red-700">{error}</span>
            ) : (
              status || "Changes aren't live until you save."
            )}
          </p>
          <button onClick={save} disabled={busy} className="btn-solid disabled:opacity-50">
            {busy ? "Working..." : "Save changes"}
          </button>
        </div>
      </div>
    </main>
  );
}
