// ============================================================
// All editable site content lives in src/data/content.json.
// Elissa edits it from the admin page at /admin, which writes that
// file back to GitHub and triggers a redeploy. You can also edit
// the JSON directly on GitHub if you prefer.
// ============================================================

import data from "@/data/content.json";

export type ServiceItem = { name: string; desc: string; time: string; price: string };
export type ServiceGroup = { title: string; items: ServiceItem[] };
export type GalleryItem = { id: number; image: string; caption: string };
export type Testimonial = { quote: string; name: string };
export type NavLink = { label: string; href: string };
export type Hours = { day: string; time: string };
/** Which part of a wide photo stays in view when it is cropped. */
export type ImagePosition = "left" | "center" | "right";
export type CareColumn = { title: string; tips: string[] };

export type SiteContent = {
  name: string;
  shortName: string;
  location: string;
  instagram: string;
  instagramUrl: string;
  bookingUrl: string;
  bookingEmbedUrl: string;
  nav: { links: NavLink[]; cta: string };
  hero: { eyebrow: string; headline: string; sub: string; cta: string; ctaSecondary: string; image: string; imagePosition?: ImagePosition };
  ticker: string[];
  services: { label: string; heading: string; intro: string; groups: ServiceGroup[] };
  about: { label: string; heading: string; body: string; points: string[]; cta: string; image: string };
  gallery: { label: string; heading: string; items: GalleryItem[]; cta: string };
  care: { label: string; heading: string; columns: CareColumn[]; note: string };
  testimonials: { label: string; items: Testimonial[] };
  booking: { label: string; heading: string; subtext: string; cta: string };
  footer: { hours: Hours[] };
};

export const siteConfig = data as SiteContent;
export const BOOKING_URL = siteConfig.bookingUrl;
export const BOOKING_EMBED_URL = siteConfig.bookingEmbedUrl;
