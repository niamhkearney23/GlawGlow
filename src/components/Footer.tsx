import { Instagram, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/content";

export default function Footer() {
  const { footer } = siteConfig;

  return (
    <footer className="bg-espresso py-16 text-cream md:py-20">
      <div className="container">
        <div className="grid gap-12 border-b border-cream/10 pb-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl">{siteConfig.name}</p>
            <p className="script-accent mt-2 text-2xl text-bronze">{footer.tagline}</p>
          </div>

          {/* Location + IG */}
          <div className="space-y-4">
            <p className="flex items-center gap-2 text-cream/80">
              <MapPin size={16} strokeWidth={1.5} className="text-bronze" />
              {siteConfig.location}
            </p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-xl text-cream transition-colors hover:text-bronze"
            >
              <Instagram size={18} strokeWidth={1.5} className="text-bronze" />
              {siteConfig.instagram}
            </a>
          </div>

          {/* Hours */}
          <div>
            <p className="flex items-center gap-2 text-cream/80">
              <Clock size={16} strokeWidth={1.5} className="text-bronze" />
              Hours
            </p>
            <ul className="mt-3 space-y-1 text-sm text-cream/70">
              {footer.hours.map((h, i) => (
                <li key={i} className="flex justify-between gap-6">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-xs tracking-wide text-cream/50">
          © {siteConfig.name} · {siteConfig.location}
        </p>
      </div>
    </footer>
  );
}
