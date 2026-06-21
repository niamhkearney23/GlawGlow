import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

export default function SplitRow() {
  const { split, bookingUrl } = siteConfig;

  return (
    <section id="studio" className="bg-cream">
      <div className="grid items-stretch md:grid-cols-2">
        {/* Image half */}
        <Reveal className="min-h-[60vh] md:min-h-[80vh]">
          <SmartImage
            src={split.image}
            label={split.imageLabel}
            alt="Inside the studio"
            className="h-full w-full"
          />
        </Reveal>

        {/* Text half */}
        <Reveal
          delay={0.1}
          className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24"
        >
          <p className="section-label">{split.label}</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-cocoa md:text-5xl">
            {split.heading.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-espresso/80">
            {split.body}
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-outline-cocoa mt-8 w-fit text-sm uppercase"
          >
            {split.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
