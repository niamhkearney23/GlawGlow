import { Instagram } from "lucide-react";
import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";

export default function BookingCTA() {
  const { booking, bookingUrl } = siteConfig;
  return (
    <section id="booking" className="relative overflow-hidden bg-cocoa py-24 text-center md:py-32">
      <div className="blob left-1/4 top-0 h-96 w-96 bg-bronze/40" />
      <div className="blob right-1/4 bottom-0 h-80 w-80 bg-peach/20" />
      <div className="container relative">
        <Reveal className="mx-auto max-w-xl">
          <p className="section-label text-gold">{booking.label}</p>
          <h2 className="mt-3 font-display text-5xl text-cream md:text-7xl">{booking.heading}</h2>
          <p className="script-accent mt-2 text-4xl text-gold">let&apos;s glow, babe</p>
          <p className="mt-5 font-sans text-base text-cream/80">{booking.subtext}</p>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="pill-cream mt-8">
            <Instagram size={17} strokeWidth={1.8} /> {booking.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
