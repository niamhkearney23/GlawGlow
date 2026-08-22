"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/config/content";
import SmartImage from "./SmartImage";

const tilts = ["-8deg", "4deg", "-3deg"];
const offsets = ["left-0 top-10", "left-24 top-0", "left-12 top-40"];

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-28 md:pt-32">
      {/* glow blobs */}
      <div className="blob -left-24 top-10 h-96 w-96 bg-blush" />
      <div className="blob -right-20 top-40 h-[28rem] w-[28rem] bg-peach/70" />

      <div className="container relative grid items-center gap-14 pb-24 md:grid-cols-2 md:pb-32">
        {/* text */}
        <div className="relative z-10 text-center md:text-left">
          <motion.p
            className="section-label inline-flex items-center gap-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Sparkles size={14} strokeWidth={1.8} />
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            className="mt-5 font-display text-5xl leading-[1.02] text-cocoa sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            {hero.headline.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h1>

          <motion.p
            className="script-accent mt-2 text-4xl md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {hero.scriptAccent}
          </motion.p>

          <motion.p
            className="mx-auto mt-6 max-w-md font-sans text-base leading-relaxed text-espresso/75 md:mx-0"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {hero.sub}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="pill-bronze">
              {hero.cta}
            </a>
            <a href="#gallery" className="pill-outline">
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* tilted photo stack */}
        <div className="relative mx-auto h-[26rem] w-full max-w-sm sm:h-[30rem] md:h-[34rem]">
          {hero.stack.map((p, i) => (
            <motion.figure
              key={i}
              className={`polaroid absolute w-56 sm:w-64 md:w-72 ${offsets[i]}`}
              style={{ rotate: tilts[i], zIndex: i }}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: tilts[i] }}
              transition={{ duration: 0.9, delay: 0.3 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04, zIndex: 10, rotate: "0deg" }}
            >
              <SmartImage src={p.image} label={p.label} alt={p.label} className="aspect-[4/5] w-full" />
              <figcaption className="px-1 pb-1 pt-2 font-script text-2xl text-bronze">{p.label}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
