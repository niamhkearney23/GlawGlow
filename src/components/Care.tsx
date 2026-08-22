import { Check } from "lucide-react";
import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";

export default function Care() {
  const { care } = siteConfig;
  return (
    <section id="care" className="relative overflow-hidden bg-peach/40 py-24 md:py-32">
      <div className="blob right-0 top-10 h-72 w-72 bg-blush" />
      <div className="container relative">
        <Reveal className="text-center">
          <p className="section-label">{care.label}</p>
          <h2 className="mt-3 font-display text-4xl text-cocoa md:text-6xl">{care.heading}</h2>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
          {care.columns.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl bg-cream p-7 shadow-soft">
                <p className="font-display text-2xl italic text-bronze">{c.title}</p>
                <ul className="mt-5 space-y-3">
                  {c.tips.map((t, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blush">
                        <Check size={12} strokeWidth={2.2} className="text-bronze" />
                      </span>
                      <span className="font-sans text-sm leading-snug text-espresso/85">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
