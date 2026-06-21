import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";

export default function Services() {
  const { services, bookingUrl } = siteConfig;

  return (
    <section id="services" className="bg-cocoa py-24 md:py-36">
      <div className="container">
        <Reveal className="text-center">
          <p className="section-label text-bronze">{services.label}</p>
          <h2 className="mt-4 font-display text-4xl text-cream md:text-5xl">
            {services.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-0">
          {services.tiers.map((tier, i) => (
            <Reveal
              key={tier.id}
              delay={i * 0.12}
              className={`flex flex-col items-center px-4 text-center md:px-12 ${
                i === 1 ? "md:border-l md:border-cream/20" : ""
              }`}
            >
              <p className="section-label text-cream/60">{tier.label}</p>
              <p className="mt-6 max-w-sm font-sans text-base leading-relaxed text-cream/85">
                {tier.blurb}
              </p>
              <p className="mt-8 font-display text-3xl text-bronze">{tier.price}</p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-outline-cream mt-8 text-sm uppercase"
              >
                {tier.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
