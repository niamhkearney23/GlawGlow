"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/config/content";
import { BrandMark, INTRO_DONE_EVENT } from "./Brand";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // The wordmark appears here only once the intro hands it over (so it can
    // morph down from centre-screen). Fallback timer in case the intro is skipped.
    const done = () => setShowBrand(true);
    window.addEventListener(INTRO_DONE_EVENT, done);
    const fallback = setTimeout(done, 3500);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener(INTRO_DONE_EVENT, done);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/85 shadow-soft backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <a href="#top" className="flex h-9 items-center" aria-label={siteConfig.name}>
          {showBrand && (
            <motion.div
              layoutId="gg-brand"
              className="text-2xl"
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            >
              <BrandMark />
            </motion.div>
          )}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-sans text-sm text-cocoa/80 transition-colors hover:text-bronze">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#book" className="pill-bronze px-5 py-2.5 text-sm">
          <Instagram size={15} strokeWidth={1.8} />
          {siteConfig.nav.cta}
        </a>
      </nav>
    </header>
  );
}
