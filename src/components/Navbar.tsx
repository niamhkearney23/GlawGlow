"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/content";
import { BrandMark, INTRO_DONE_EVENT } from "./Brand";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-cream/90 shadow-soft backdrop-blur-md" : "bg-transparent"}`}>
      <nav className="container flex items-center justify-between py-5">
        <a href="#top" className="flex h-7 items-center" aria-label={siteConfig.name}>
          {showBrand && (
            <motion.div layoutId="gg-brand" className="text-lg md:text-xl" transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}>
              <BrandMark />
            </motion.div>
          )}
        </a>
        <ul className="hidden items-center gap-9 lg:flex">
          {siteConfig.nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-sans text-[13px] font-medium uppercase text-espresso/70 transition-colors hover:text-espresso" style={{ letterSpacing: "0.14em" }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#book" className="btn-solid px-5 py-2.5 text-xs">{siteConfig.nav.cta}</a>
      </nav>
    </header>
  );
}
