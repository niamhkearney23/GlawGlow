// ============================================================
// CONTENT — edit this one file to change everything on the site.
// Photos live in /public/images (see the README in that folder).
// ============================================================

export const BOOKING_URL = "https://instagram.com/glamnglow.studio";

// Online booking calendar. Create a free Calendly (calendly.com) or Fresha
// (fresha.com) account, copy your booking page link, paste it here and a live
// booking calendar appears on the site. Leave empty to use "DM to book".
export const BOOKING_EMBED_URL = "";

export const siteConfig = {
  name: "Glam & Glow Studio",
  location: "Melbourne Eastern Suburbs",
  instagram: "@glamnglow.studio",
  instagramUrl: "https://instagram.com/glamnglow.studio",
  bookingUrl: BOOKING_URL,
  logo: "/images/logo.png",

  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "The Glow", href: "#gallery" },
      { label: "Prep", href: "#care" },
      { label: "Love", href: "#reviews" },
    ],
    cta: "Book now",
  },

  hero: {
    eyebrow: "Spray tans · Lashes · Brows",
    headline: "Glow like you\nmean it.",
    scriptAccent: "let's glow, babe",
    sub: "Custom spray tans, lifted lashes and perfect brows — in a cosy little studio in Melbourne's east.",
    cta: "Book a tan",
    ctaSecondary: "See the glow",
    // three photos in the tilted stack
    stack: [
      { image: "/images/hero.jpg", label: "Glow" },
      { image: "/images/gallery-3.jpg", label: "Lashes" },
      { image: "/images/gallery-1.jpg", label: "Brows" },
    ],
  },

  marquee: ["Look good", "Feel good", "Glam & Glow", "Book now"],

  services: {
    label: "The Menu",
    heading: "Pick your glow",
    items: [
      {
        id: "tan",
        title: "Spray Tan",
        blurb: "Hand-applied, colour-matched to you. Zero orange, zero streaks — just that fresh-off-holiday glow.",
        price: "from $45",
        time: "20 min",
      },
      {
        id: "lash",
        title: "Lash Lift & Tint",
        blurb: "Your own lashes, lifted and darkened. Wake up looking like you've done your makeup.",
        price: "from $60",
        time: "45 min",
      },
      {
        id: "brow",
        title: "Brows",
        blurb: "Wax, shape, tint or lamination — fluffy, lifted, and shaped to your face.",
        price: "from $25",
        time: "30 min",
      },
    ],
  },

  split: {
    label: "Hi, I'm Elissa",
    heading: "Your glow,\ndone properly",
    body:
      "Glam & Glow is my little studio — one client at a time, no rushing, no conveyor belt. I match every tan to your skin tone and style every brow to your face. You'll leave glowing and feeling like yourself, just more.",
    cta: "Come say hi",
    image: "/images/split.jpg",
    imageLabel: "Elissa",
  },

  gallery: {
    label: "On the 'gram",
    heading: "Fresh glows",
    items: [
      { id: 1, image: "/images/gallery-1.jpg", caption: "Brow lamination" },
      { id: 2, image: "/images/gallery-2.jpg", caption: "Spray tan glow" },
      { id: 3, image: "/images/gallery-3.jpg", caption: "Lash lift & tint" },
      { id: 4, image: "/images/gallery-4.jpg", caption: "Sun-kissed tan" },
      { id: 5, image: "/images/gallery-5.jpg", caption: "Effortless" },
      { id: 6, image: "/images/split.jpg", caption: "Studio days" },
    ],
    cta: "Follow for more",
  },

  care: {
    label: "Prep & Aftercare",
    heading: "Make it last",
    columns: [
      {
        title: "Before",
        tips: [
          "Exfoliate the day before",
          "No moisturiser or makeup on the day",
          "Loose dark clothes + thongs",
          "Hair up, no jewellery or perfume",
        ],
      },
      {
        title: "After",
        tips: [
          "Stay dry 6–8 hours",
          "First shower lukewarm, no scrubbing",
          "Moisturise every day",
          "Skip pools, hot tubs & sweaty workouts",
        ],
      },
    ],
  },

  testimonials: {
    label: "Client love",
    items: [
      { quote: "Most natural tan I've ever had. Not orange, not patchy — just glowy.", name: "Bella" },
      { quote: "The studio is so cute and Elissa is an actual artist with brows.", name: "Sophie" },
      { quote: "My lashes have never looked this good. Obsessed.", name: "Tahlia" },
    ],
  },

  booking: {
    label: "Ready?",
    heading: "DM to book",
    subtext: "Slide into the DMs and let's lock in your glow.",
    cta: "Message on Instagram",
  },

  footer: {
    tagline: "Look good, feel good.",
    hours: [
      { day: "Tue – Fri", time: "10am – 6pm" },
      { day: "Saturday", time: "9am – 4pm" },
      { day: "Sun – Mon", time: "By appointment" },
    ],
  },
};
