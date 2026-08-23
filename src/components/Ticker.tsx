import { siteConfig } from "@/config/content";

export default function Ticker() {
  const set = (
    <div className="flex shrink-0 items-center">
      {siteConfig.ticker.map((w, i) => (
        <span key={i} className="label flex items-center text-cream/80">
          <span className="px-8">{w}</span><span className="text-bronze">&middot;</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden bg-espresso py-4">
      <div className="ticker-track animate-ticker">{set}{set}</div>
    </div>
  );
}
