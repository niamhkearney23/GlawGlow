import { Instagram } from "lucide-react";
import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

export default function Gallery() {
  const { gallery, instagramUrl } = siteConfig;
  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
      <div className="container">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label">{gallery.label}</p>
            <h2 className="mt-4 font-display text-5xl text-espresso md:text-6xl">{gallery.heading}</h2>
          </div>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-outline"><Instagram size={15} strokeWidth={1.8} /> {gallery.cta}</a>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {gallery.items.map((it, i) => (
            <Reveal key={it.id} delay={(i % 3) * 0.12} as="figure" variant="wipe">
              <div className="group relative aspect-[4/5] overflow-hidden">
                <SmartImage src={it.image} label={it.caption} alt={it.caption} className="h-full w-full" imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/70 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="label text-cream">{it.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
