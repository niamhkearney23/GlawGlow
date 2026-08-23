"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/content";
import { BrandMark, INTRO_DONE_EVENT } from "./Brand";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [open, setOpen] = useState(false);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-espresso/10 bg-cream/95 backdrop-blur-md transition-shadow duration-500 ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
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
              <a
                href={l.href}
                className="font-sans text-[13px] font-medium uppercase text-espresso/70 transition-colors hover:text-espresso"
                style={{ letterSpacing: "0.14em" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#book" className="btn-solid px-5 py-2.5 text-xs">{siteConfig.nav.cta}</a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="-mr-2 p-2 text-espresso lg:hidden"
          >
            {open ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="overflow-hidden border-t border-espresso/10 bg-cream lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="container flex flex-col py-2">
              {siteConfig.nav.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-espresso/5 py-4 font-sans text-sm font-medium uppercase text-espresso/80"
                    style={{ letterSpacing: "0.14em" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
