"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/content";
import SmartImage from "./SmartImage";

const up = (d: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function Hero() {
  const { hero } = siteConfig;
  return (
    <section id="top" className="grid min-h-screen md:grid-cols-2">
      {/* text panel */}
      <div className="order-2 flex flex-col justify-center bg-cream px-6 pb-20 pt-12 md:order-1 md:px-12 md:pt-32 lg:px-20">
        <motion.p className="label" {...up(0.1)}>{hero.eyebrow}</motion.p>
        <motion.h1 className="mt-6 font-display text-5xl leading-[1.02] text-espresso sm:text-6xl lg:text-7xl" {...up(0.25)}>
          {hero.headline.split("\n").map((l, i) => <span key={i} className="block">{l}</span>)}
        </motion.h1>
        <motion.p className="mt-7 max-w-md font-sans text-base leading-relaxed text-espresso/70" {...up(0.4)}>{hero.sub}</motion.p>
        <motion.div className="mt-10 flex flex-wrap gap-4" {...up(0.55)}>
          <a href="#book" className="btn-solid">{hero.cta}</a>
          <a href="#services" className="btn-outline">{hero.ctaSecondary}</a>
        </motion.div>
      </div>
      {/* photo */}
      <motion.div
        className="order-1 mt-16 h-[55vh] md:order-2 md:mt-0 md:h-auto md:pt-[73px]"
        initial={{ clipPath: "inset(0 0 100% 0)", scale: 1.06 }}
        animate={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <SmartImage src={hero.image} label="Hero" alt={siteConfig.name} className="h-full w-full" />
      </motion.div>
    </section>
  );
}
