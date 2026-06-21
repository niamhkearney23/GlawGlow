"use client";

import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/config/content";
import SmartImage from "./SmartImage";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-cocoa shadow-luxury" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        {/* Logo badge — top-left */}
        <a href="#top" className="flex items-center gap-3" aria-label={siteConfig.name}>
          <SmartImage
            src={siteConfig.logo}
            label="GG"
            alt={siteConfig.name}
            className="h-11 w-11 rounded-full border border-cream/30"
          />
          <span className="hidden font-display text-lg text-cream sm:block">
            Glam &amp; Glow
          </span>
        </a>

        {/* Center nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-sm tracking-wide text-cream/90 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Follow on IG pill — far right */}
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pill border border-cream/50 px-4 py-2 text-sm text-cream hover:bg-cream hover:text-cocoa"
        >
          <Instagram size={16} strokeWidth={1.5} />
          <span className="hidden sm:inline">{siteConfig.nav.cta}</span>
        </a>
      </nav>
    </header>
  );
}
