import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";

export default function Care() {
  const { care } = siteConfig;
  return (
    <section id="care" className="bg-espresso py-24 text-cream md:py-32">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="label">{care.label}</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">{care.heading}</h2>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          {care.columns.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <h3 className="border-t border-cream/20 pt-5 font-display text-3xl">{c.title}</h3>
              <ol className="mt-6 space-y-4">
                {c.tips.map((t, j) => (
                  <li key={j} className="flex gap-4 font-sans text-sm leading-relaxed text-cream/80">
                    <span className="label shrink-0 pt-0.5 text-bronze">0{j + 1}</span>{t}
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-14 max-w-2xl border-l-2 border-bronze pl-5">
          <p className="font-sans text-sm leading-relaxed text-cream/70">{care.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
