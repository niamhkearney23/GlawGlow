"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandMark, INTRO_DONE_EVENT } from "./Brand";

/** Wordmark rises into centre, a line draws beneath, then it glides into the header. */
export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      window.dispatchEvent(new Event(INTRO_DONE_EVENT));
    }, reduce ? 100 : 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {show && (
        <motion.div
          key="curtain"
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-cream"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="overflow-hidden px-4 py-2">
            <motion.div
              layoutId="gg-brand"
              className="text-3xl sm:text-4xl md:text-5xl"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <BrandMark />
            </motion.div>
          </div>
          <motion.span
            className="mt-5 block h-px bg-bronze"
            initial={{ width: 0 }}
            animate={{ width: 140 }}
            transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
          />
          <motion.p
            className="label mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            Spray Tanning · Lashes · Brows
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
