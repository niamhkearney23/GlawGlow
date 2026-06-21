import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

export default function Gallery() {
  const { gallery } = siteConfig;

  return (
    <section id="gallery" className="bg-cocoa py-24 md:py-36">
      <div className="container">
        <Reveal className="text-center">
          <p className="section-label text-bronze">{gallery.label}</p>
          <h2 className="mt-4 font-display text-4xl text-cream md:text-5xl">
            {gallery.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.1} as="figure">
              <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-luxury transition-shadow duration-500 hover:shadow-warm">
                <SmartImage
                  src={item.image}
                  label={item.caption}
                  alt={item.caption}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                {/* Caption fades in OVER the image on hover */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-cocoa/80 via-cocoa/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="p-5 font-display text-lg text-cream">{item.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
