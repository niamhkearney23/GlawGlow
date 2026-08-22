import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

export default function SplitRow() {
  const { split, bookingUrl } = siteConfig;
  return (
    <section id="studio" className="relative overflow-hidden bg-blush py-24 md:py-32">
      <div className="blob -left-24 bottom-0 h-80 w-80 bg-peach" />
      <div className="container relative grid items-center gap-12 md:grid-cols-2">
        <Reveal className="order-2 md:order-1">
          <p className="section-label">{split.label}</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-cocoa md:text-6xl">
            {split.heading.split("\n").map((l, i) => <span key={i} className="block">{l}</span>)}
          </h2>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-espresso/75">{split.body}</p>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="pill-bronze mt-8">
            {split.cta}
          </a>
        </Reveal>
        <Reveal delay={0.15} className="order-1 md:order-2">
          <div className="polaroid mx-auto w-full max-w-sm rotate-2 animate-float">
            <SmartImage src={split.image} label={split.imageLabel} alt={split.label} className="aspect-[4/5] w-full" />
            <p className="px-1 pb-1 pt-2 font-script text-3xl text-bronze">{split.imageLabel}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
