import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE, tokenIsValid } from "@/lib/session";
import { githubConfigured, shaFor, writeFile } from "@/lib/github";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Only these names can be written, so the admin can't create arbitrary files. */
const ALLOWED = new Set([
  "hero.jpg",
  "split.jpg",
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg",
]);

const MAX_BYTES = 4_000_000;

export async function POST(request: Request) {
  if (!tokenIsValid(cookies().get(COOKIE)?.value)) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }
  if (!githubConfigured()) {
    return NextResponse.json({ error: "GitHub access isn't set up yet." }, { status: 500 });
  }

  const { filename, dataBase64 } = await request.json().catch(() => ({}));
  if (!ALLOWED.has(String(filename))) {
    return NextResponse.json({ error: "That image slot isn't recognised." }, { status: 400 });
  }
  if (typeof dataBase64 !== "string" || !dataBase64) {
    return NextResponse.json({ error: "No image data received." }, { status: 400 });
  }
  if (Buffer.byteLength(dataBase64, "base64") > MAX_BYTES) {
    return NextResponse.json({ error: "That photo is too large." }, { status: 413 });
  }

  const path = `public/images/${filename}`;
  try {
    await writeFile({
      path,
      contentBase64: dataBase64,
      message: `Update ${filename} from admin page`,
      sha: await shaFor(path),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
