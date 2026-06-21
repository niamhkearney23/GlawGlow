import { siteConfig } from "@/config/content";

export default function Marquee() {
  // Build one sequence of "WORD ·" then duplicate it so the -50% loop is seamless.
  const sequence = siteConfig.marquee;
  const oneSet = (
    <div className="flex shrink-0 items-center">
      {sequence.map((word, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 font-display text-4xl text-cream md:px-10 md:text-6xl">
            {word}
          </span>
          <span className="text-bronze md:text-4xl">·</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden bg-cocoa py-6 md:py-8">
      <div className="marquee-track animate-marquee">
        {oneSet}
        {oneSet}
      </div>
    </div>
  );
}
