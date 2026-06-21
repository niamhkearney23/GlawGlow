import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  const { testimonials } = siteConfig;

  return (
    <section id="reviews" className="bg-cream py-24 md:py-36">
      <div className="container">
        <Reveal className="text-center">
          <p className="section-label">{testimonials.label}</p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {testimonials.items.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 0.12}
              className="flex flex-col items-center px-4 text-center"
            >
              <p className="font-display text-xl italic leading-relaxed text-cocoa">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="section-label mt-6 text-bronze">{t.name}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
