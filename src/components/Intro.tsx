"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/content";

/**
 * Cinematic brand intro that plays once when the site opens: a full-screen
 * cocoa curtain with the wordmark + script accent fading in, then the whole
 * panel lifts away to reveal the hero. Scroll is locked while it plays.
 */
export default function Intro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Honour reduced-motion: skip the hold, reveal almost immediately.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setDone(true), reduce ? 200 : 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {!done && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cocoa px-6 text-center"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.p
            className="section-label text-bronze"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {siteConfig.location}
          </motion.p>

          <motion.h1
            className="mt-4 font-display text-5xl text-cream md:text-7xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Glam &amp; Glow
          </motion.h1>

          <motion.p
            className="script-accent mt-1 text-4xl md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1 }}
          >
            let&apos;s glow, babe
          </motion.p>

          {/* thin bronze line that draws in beneath */}
          <motion.span
            className="mt-8 block h-px bg-bronze/70"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
