import { Instagram } from "lucide-react";
import { siteConfig } from "@/config/content";
import Reveal from "./Reveal";

export default function BookingCTA() {
  const { booking, bookingUrl } = siteConfig;

  return (
    <section id="booking" className="bg-cocoa py-24 md:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label text-bronze">{booking.label}</p>
          <h2 className="mt-4 font-display text-5xl text-cream md:text-6xl">
            {booking.heading}
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-cream/80">
            {booking.subtext}
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-bronze mx-auto mt-9 text-base"
          >
            <Instagram size={18} strokeWidth={1.5} />
            {booking.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
