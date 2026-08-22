"use client";

export const INTRO_DONE_EVENT = "gg:intro-done";

/** The "Glam & Glow" wordmark — identical markup in the intro and the navbar
 *  so Framer Motion can morph one into the other. */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-[0.15em] whitespace-nowrap ${className}`}>
      <span className="font-display text-cocoa">Glam</span>
      <span className="script-accent" style={{ fontSize: "1.5em" }}>&amp;</span>
      <span className="font-display text-cocoa">Glow</span>
    </span>
  );
}
