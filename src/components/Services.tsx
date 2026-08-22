import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";

export default function Services() {
  const { services } = siteConfig;
  return (
    <section id="services" className="bg-cream py-24 md:py-32">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="label">{services.label}</p>
          <h2 className="mt-4 font-display text-5xl text-espresso md:text-6xl">{services.heading}</h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-espresso/65">{services.intro}</p>
        </Reveal>
        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
          {services.groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.1}>
              <h3 className="border-b border-espresso/20 pb-4 font-display text-3xl text-espresso">{g.title}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it.name} className="flex items-start justify-between gap-6 border-b border-espresso/10 py-6">
                    <div>
                      <p className="font-sans text-base font-semibold text-espresso">{it.name}</p>
                      <p className="mt-1 max-w-sm font-sans text-sm leading-relaxed text-espresso/60">{it.desc}</p>
                      <p className="label mt-2 text-espresso/40">{it.time}</p>
                    </div>
                    <p className="shrink-0 font-display text-2xl text-bronze">{it.price}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-12">
          <a href="#book" className="btn-bronze">Book an appointment</a>
        </Reveal>
      </div>
    </section>
  );
}
