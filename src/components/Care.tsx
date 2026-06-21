import { Check } from "lucide-react";
import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";

export default function Care() {
  const { care } = siteConfig;

  return (
    <section id="care" className="bg-latte py-24 md:py-36">
      <div className="container">
        <Reveal className="text-center">
          <p className="section-label text-cocoa">{care.label}</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-espresso md:text-5xl">
            {care.heading.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-12 md:grid-cols-2 md:gap-16">
          {care.columns.map((col, i) => (
            <Reveal key={col.title} delay={i * 0.12}>
              <p className="section-label text-cocoa">{col.title}</p>
              <ul className="mt-6 space-y-4">
                {col.tips.map((tip, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check
                      size={18}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-bronze"
                    />
                    <span className="font-sans text-base leading-snug text-espresso/85">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-14 max-w-2xl text-center">
          <p className="font-sans text-sm leading-relaxed text-espresso/70">
            {care.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
