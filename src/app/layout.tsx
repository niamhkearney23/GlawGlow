import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/content";
import "./globals.css";

const SITE_URL = "https://glaw-glow.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Glam & Glow Studio | Spray Tans, Lashes & Brows — Blackburn, Melbourne",
  description:
    "Professional spray tanning, lash lifts and brow styling by a qualified beauty therapist. Private home studio in Blackburn, Melbourne. Book by appointment.",
  keywords: [
    "spray tan Blackburn",
    "spray tanning Melbourne",
    "lash lift Blackburn",
    "brow lamination Melbourne",
    "beauty therapist Blackburn",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: siteConfig.name,
    title: "Glam & Glow Studio | Spray Tans, Lashes & Brows",
    description:
      "Professional spray tanning, lash lifts and brow styling in a private studio in Blackburn, Melbourne.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glam & Glow Studio",
    description: "Spray tanning, lashes and brows — Blackburn, Melbourne.",
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF6F1",
};

/** Local-business structured data so Google can show hours, services and location. */
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.name,
    description:
      "Spray tanning, lash lifts, brow styling and waxing by a qualified beauty therapist in a private home studio.",
    url: SITE_URL,
    image: `${SITE_URL}/images/hero.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Blackburn",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    areaServed: "Melbourne, Victoria",
    sameAs: [siteConfig.instagramUrl],
    priceRange: "$$",
    currenciesAccepted: "AUD",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "16:00" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: siteConfig.services.groups.flatMap((g) =>
        g.items.map((it) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: it.name, description: it.desc },
          price: it.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "AUD",
        }))
      ),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2218%22 fill=%22%232B211B%22/><text x=%2250%22 y=%2268%22 font-family=%22Georgia,serif%22 font-size=%2246%22 fill=%22%23FAF6F1%22 text-anchor=%22middle%22>GG</text></svg>"
        />
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
