import { Clock } from "lucide-react";
import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";

export default function Services() {
  const { services, bookingUrl } = siteConfig;
  return (
    <section id="services" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="blob -right-32 top-0 h-96 w-96 bg-peach/60" />
      <div className="container relative">
        <Reveal className="text-center">
          <p className="section-label">{services.label}</p>
          <h2 className="mt-3 font-display text-4xl text-cocoa md:text-6xl">{services.heading}</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.items.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.1}>
              <div className="group flex h-full flex-col rounded-3xl border border-nude/50 bg-cream/80 p-7 shadow-soft backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                <div className="flex items-center justify-between">
                  <span className="section-label">0{i + 1}</span>
                  <span className="inline-flex items-center gap-1 font-sans text-xs text-cocoa/60">
                    <Clock size={13} strokeWidth={1.8} /> {s.time}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-3xl text-cocoa">{s.title}</h3>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-espresso/75">{s.blurb}</p>
                <div className="mt-7 flex items-center justify-between">
                  <span className="font-display text-2xl italic text-bronze">{s.price}</span>
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="pill-outline px-5 py-2 text-xs uppercase">
                    Book
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
