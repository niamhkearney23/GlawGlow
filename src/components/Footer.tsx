import { Instagram, MapPin } from "lucide-react";
import { siteConfig } from "@/config/content";
import { BrandMark } from "./Brand";

export default function Footer() {
  const { footer } = siteConfig;
  return (
    <footer className="bg-cream py-14">
      <div className="container grid gap-10 border-t border-espresso/15 pt-12 md:grid-cols-3">
        <div>
          <BrandMark className="text-xl" />
          <p className="mt-3 max-w-xs font-sans text-sm text-espresso/60">Spray tanning, lash lifts and brow styling. Private studio, by appointment.</p>
        </div>
        <div className="space-y-3 font-sans text-sm">
          <p className="flex items-center gap-2 text-espresso/70"><MapPin size={15} strokeWidth={1.8} className="text-bronze" />{siteConfig.location}</p>
          <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-espresso hover:text-bronze"><Instagram size={15} strokeWidth={1.8} className="text-bronze" />{siteConfig.instagram}</a>
        </div>
        <div>
          <p className="label">Hours</p>
          <ul className="mt-3 space-y-1.5 font-sans text-sm text-espresso/70">
            {footer.hours.map((h, i) => <li key={i} className="flex justify-between gap-6"><span>{h.day}</span><span>{h.time}</span></li>)}
          </ul>
        </div>
      </div>
      <p className="container mt-10 font-sans text-xs text-espresso/40">© {siteConfig.name} · {siteConfig.location}</p>
    </footer>
  );
}
