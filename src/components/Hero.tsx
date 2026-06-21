"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/content";
import SmartImage from "./SmartImage";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      {/* Full-bleed image with slow Ken Burns zoom */}
      <SmartImage
        src={hero.image}
        label={hero.imageLabel}
        alt="Glam & Glow Studio"
        className="absolute inset-0 h-full w-full"
        imgClassName="animate-kenburns"
      />

      {/* Cocoa bottom-up gradient scrim for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-cocoa via-cocoa/40 to-cocoa/20" />

      {/* Content */}
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.p
          className="section-label text-cream/80"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-cream md:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          {hero.headline.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="script-accent mt-3 text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {hero.scriptAccent}
        </motion.p>

        <motion.a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-bronze mt-9 text-base"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {hero.cta}
        </motion.a>
      </div>
    </section>
  );
}
