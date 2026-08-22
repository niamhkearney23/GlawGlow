"use client";

import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/config/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/85 shadow-soft backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2" aria-label={siteConfig.name}>
          <span className="font-display text-xl text-cocoa">Glam</span>
          <span className="script-accent text-3xl">&amp;</span>
          <span className="font-display text-xl text-cocoa">Glow</span>
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

        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-bronze px-5 py-2.5 text-sm"
        >
          <Instagram size={15} strokeWidth={1.8} />
          {siteConfig.nav.cta}
        </a>
      </nav>
    </header>
  );
}
