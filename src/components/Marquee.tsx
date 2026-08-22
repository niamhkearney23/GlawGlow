import { siteConfig } from "@/config/content";

export default function Marquee() {
  const set = (
    <div className="flex shrink-0 items-center">
      {siteConfig.marquee.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 font-display text-3xl italic text-cocoa md:px-10 md:text-5xl">{w}</span>
          <span className="text-2xl text-bronze md:text-3xl">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden border-y border-nude/60 bg-blush py-5 md:py-6">
      <div className="marquee-track animate-marquee">{set}{set}</div>
    </div>
  );
}
