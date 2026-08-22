"use client";

export const INTRO_DONE_EVENT = "gg:intro-done";

/** Wordmark — same markup in the intro and navbar so it can morph between them. */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-medium uppercase text-espresso whitespace-nowrap ${className}`} style={{ letterSpacing: "0.18em" }}>
      Glam <span className="text-bronze">&amp;</span> Glow
    </span>
  );
}
