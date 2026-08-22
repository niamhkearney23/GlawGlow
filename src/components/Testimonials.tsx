import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  const { testimonials } = siteConfig;
  return (
    <section id="reviews" className="bg-cream py-24 md:py-32">
      <div className="container">
        <Reveal><p className="label">{testimonials.label}</p></Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-12">
          {testimonials.items.map((t, i) => (
            <Reveal key={i} delay={i * 0.1} className="border-t border-espresso/15 pt-6">
              <p className="font-display text-2xl italic leading-snug text-espresso">&ldquo;{t.quote}&rdquo;</p>
              <p className="label mt-5 text-espresso/50">{t.name}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
