"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandMark, INTRO_DONE_EVENT } from "./Brand";

/**
 * Opening sequence:
 *  1. blush curtain, the big "Glam & Glow" rises up from below and settles centre
 *  2. "let's glow, babe" fades in under it
 *  3. the wordmark glides down + shrinks into its spot in the header (shared layoutId),
 *     the curtain melts away, and the page is revealed.
 */
export default function Intro() {
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setPhase("out");
      window.dispatchEvent(new Event(INTRO_DONE_EVENT));
    }, reduce ? 100 : 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {phase === "in" && (
        <motion.div
          key="curtain"
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center overflow-hidden bg-blush"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.15 }}
        >
          {/* drifting glow blobs */}
          <motion.div
            className="blob left-[10%] top-[15%] h-80 w-80 bg-peach"
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="blob right-[5%] bottom-[10%] h-96 w-96 bg-nude/70"
            animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* the wordmark — shares layoutId "gg-brand" with the navbar */}
          <div className="relative overflow-hidden px-4 py-2">
            <motion.div
              layoutId="gg-brand"
              className="text-6xl sm:text-7xl md:text-8xl"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <BrandMark />
            </motion.div>
          </div>

          <motion.p
            className="script-accent relative mt-1 text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            let&apos;s glow, babe
          </motion.p>

          <motion.span
            className="relative mt-8 block h-px bg-bronze/70"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
