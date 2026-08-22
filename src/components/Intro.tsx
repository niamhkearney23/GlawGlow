"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setDone(true), reduce ? 150 : 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {!done && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-blush text-center"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="blob left-1/3 top-1/3 h-72 w-72 bg-peach" />
          <motion.p
            className="relative font-display text-5xl text-cocoa md:text-7xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Glam <span className="script-accent text-6xl md:text-8xl">&amp;</span> Glow
          </motion.p>
          <motion.p
            className="script-accent relative mt-2 text-4xl md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            let&apos;s glow, babe
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
