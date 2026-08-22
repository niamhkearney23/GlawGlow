import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  const { testimonials } = siteConfig;
  return (
    <section id="reviews" className="bg-cream py-24 md:py-32">
      <div className="container">
        <Reveal className="text-center">
          <p className="section-label">{testimonials.label}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-nude/50 bg-blush/50 p-7">
                <p className="font-display text-xl italic leading-relaxed text-cocoa">&ldquo;{t.quote}&rdquo;</p>
                <p className="script-accent mt-5 text-2xl">— {t.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
