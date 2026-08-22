import { CalendarHeart, Instagram } from "lucide-react";
import { siteConfig, BOOKING_EMBED_URL } from "@/config/content";
import Reveal from "./Reveal";

/**
 * Booking system. Paste a Calendly (or Fresha / Square) link into
 * BOOKING_EMBED_URL in content.ts and a live booking calendar appears here.
 * Until then it shows the "DM to book" fallback.
 */
export default function Booking() {
  const { booking, bookingUrl } = siteConfig;
  const hasEmbed = BOOKING_EMBED_URL.trim().length > 0;

  return (
    <section id="book" className="relative overflow-hidden bg-cocoa py-24 md:py-32">
      <div className="blob left-1/4 top-0 h-96 w-96 bg-bronze/40" />
      <div className="blob right-1/4 bottom-0 h-80 w-80 bg-peach/20" />

      <div className="container relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="section-label text-gold inline-flex items-center gap-2">
            <CalendarHeart size={14} strokeWidth={1.8} /> {booking.label}
          </p>
          <h2 className="mt-3 font-display text-5xl text-cream md:text-7xl">
            {hasEmbed ? "Book your glow" : booking.heading}
          </h2>
          <p className="script-accent mt-2 text-4xl text-gold">let&apos;s glow, babe</p>
          {!hasEmbed && <p className="mt-5 font-sans text-base text-cream/80">{booking.subtext}</p>}
        </Reveal>

        {hasEmbed ? (
          <Reveal delay={0.15} className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl bg-cream shadow-card">
            <iframe
              title="Book an appointment"
              src={BOOKING_EMBED_URL}
              className="h-[720px] w-full border-0"
              loading="lazy"
            />
          </Reveal>
        ) : (
          <Reveal delay={0.15} className="mt-8 text-center">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="pill-cream">
              <Instagram size={17} strokeWidth={1.8} /> {booking.cta}
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
