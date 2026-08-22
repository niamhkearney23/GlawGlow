import { Instagram, Heart } from "lucide-react";
import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

export default function Gallery() {
  const { gallery, instagram, instagramUrl } = siteConfig;
  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
      <div className="container">
        <Reveal className="flex flex-col items-center text-center">
          <p className="section-label inline-flex items-center gap-2">
            <Instagram size={14} strokeWidth={1.8} /> {gallery.label}
          </p>
          <h2 className="mt-3 font-display text-4xl text-cocoa md:text-6xl">{gallery.heading}</h2>
          <p className="mt-2 font-sans text-sm text-cocoa/60">{instagram}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {gallery.items.map((it, i) => (
            <Reveal key={it.id} delay={(i % 3) * 0.08} as="figure">
              <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft transition-shadow duration-500 hover:shadow-card">
                <SmartImage
                  src={it.image}
                  label={it.caption}
                  alt={it.caption}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-cocoa/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="font-sans text-sm text-cream">{it.caption}</p>
                  <Heart size={16} strokeWidth={1.8} className="text-cream" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="pill-outline">
            <Instagram size={15} strokeWidth={1.8} /> {gallery.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
