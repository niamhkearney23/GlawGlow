import { Check } from "lucide-react";
import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

export default function About() {
  const { about } = siteConfig;
  return (
    <section id="about" className="bg-sand">
      <div className="grid md:grid-cols-2">
        <Reveal className="min-h-[60vh] md:min-h-[85vh]">
          <SmartImage src={about.image} label="Elissa" alt="Elissa, Glam & Glow Studio" className="h-full w-full" />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-24 lg:px-20">
          <p className="label">{about.label}</p>
          <h2 className="mt-4 font-display text-5xl leading-tight text-espresso md:text-6xl">
            {about.heading.split("\n").map((l, i) => <span key={i} className="block">{l}</span>)}
          </h2>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-espresso/70">{about.body}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {about.points.map((p) => (
              <li key={p} className="flex items-center gap-3 font-sans text-sm text-espresso/80">
                <Check size={15} strokeWidth={2} className="text-bronze" /> {p}
              </li>
            ))}
          </ul>
          <a href="#book" className="btn-solid mt-10 w-fit">{about.cta}</a>
        </Reveal>
      </div>
    </section>
  );
}
