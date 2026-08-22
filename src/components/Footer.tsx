import { Instagram, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/content";

export default function Footer() {
  const { footer } = siteConfig;
  return (
    <footer className="bg-cream py-14 text-cocoa">
      <div className="container grid gap-10 border-t border-nude/50 pt-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Glam <span className="script-accent text-3xl">&amp;</span> Glow</p>
          <p className="script-accent mt-1 text-2xl">{footer.tagline}</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="flex items-center gap-2 text-cocoa/75"><MapPin size={15} strokeWidth={1.8} className="text-bronze" />{siteConfig.location}</p>
          <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-bronze">
            <Instagram size={15} strokeWidth={1.8} className="text-bronze" />{siteConfig.instagram}
          </a>
        </div>
        <div className="text-sm">
          <p className="flex items-center gap-2 text-cocoa/75"><Clock size={15} strokeWidth={1.8} className="text-bronze" />Hours</p>
          <ul className="mt-2 space-y-1 text-cocoa/70">
            {footer.hours.map((h, i) => (
              <li key={i} className="flex justify-between gap-6"><span>{h.day}</span><span>{h.time}</span></li>
            ))}
          </ul>
        </div>
      </div>
      <p className="container mt-10 text-center text-xs text-cocoa/50">© {siteConfig.name} · {siteConfig.location}</p>
    </footer>
  );
}
