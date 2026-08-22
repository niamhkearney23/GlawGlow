import { Instagram } from "lucide-react";
import { siteConfig, BOOKING_EMBED_URL } from "@/config/content";
import Reveal from "./Reveal";

/** Paste a Calendly / Fresha link into BOOKING_EMBED_URL (content.ts) for a live calendar. */
export default function Booking() {
  const { booking, bookingUrl } = siteConfig;
  const hasEmbed = BOOKING_EMBED_URL.trim().length > 0;
  return (
    <section id="book" className="bg-sand py-24 md:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label">{booking.label}</p>
          <h2 className="mt-4 font-display text-5xl text-espresso md:text-6xl">{booking.heading}</h2>
          {!hasEmbed && <p className="mt-5 font-sans text-base leading-relaxed text-espresso/65">{booking.subtext}</p>}
        </Reveal>
        {hasEmbed ? (
          <Reveal delay={0.15} className="mx-auto mt-10 max-w-3xl overflow-hidden bg-cream shadow-card">
            <iframe title="Book an appointment" src={BOOKING_EMBED_URL} className="h-[720px] w-full border-0" loading="lazy" />
          </Reveal>
        ) : (
          <Reveal delay={0.15} className="mt-8 text-center">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-solid"><Instagram size={15} strokeWidth={1.8} /> {booking.cta}</a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
