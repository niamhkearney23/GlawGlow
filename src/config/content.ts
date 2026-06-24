// ============================================================
// CONTENT CONFIGURATION
// Edit this one file to update everything on the site:
// copy, prices, hours, socials, the booking link, and which
// local images each section points to.
//
// IMAGES: drop your photos into  /public/images  using the
// exact file names referenced below (e.g. hero.jpg). Until a
// file exists, an intentional cocoa→bronze placeholder shows.
// ============================================================

// The ONE booking link the whole site uses (nav, hero, services, booking band).
export const BOOKING_URL = "https://instagram.com/glamnglow.studio";

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
      { label: "Studio", href: "#studio" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reviews", href: "#reviews" },
    ],
    cta: "Follow on IG",
  },

  hero: {
    eyebrow: "Melbourne Eastern Suburbs",
    headline: "Your warmest glow,\nby hand.",
    scriptAccent: "let's glow, babe",
    cta: "Book a Tan",
    image: "/images/hero.jpg",
    imageLabel: "", // blank — the headline sits on top, so the hero placeholder stays a clean gradient
  },

  // Large auto-scrolling band between hero and services.
  marquee: ["Look Good", "Feel Good", "Glam & Glow"],

  services: {
    label: "The Menu",
    heading: "Two ways to glow",
    tiers: [
      {
        id: "spray-tanning",
        label: "Spray Tanning",
        blurb:
          "Custom-blended, skin-matched spray tans applied by hand for a flawless, streak-free finish that fades like a dream.",
        price: "from $45",
        cta: "Book Now",
      },
      {
        id: "lash-brow",
        label: "Lash & Brow",
        blurb:
          "Lash lifts, brow laminations and precision tinting — subtle, lifted, and tailored to the shape of your face.",
        price: "from $60",
        cta: "Book Now",
      },
    ],
  },

  // Image + text "About your artist" row.
  split: {
    label: "Your Artist",
    heading: "Personalised,\nstart to finish",
    body:
      "Every appointment is one-on-one in an intimate, unhurried studio. Your shade, your shape, your glow — read off your skin tone and styled just for you. No conveyor belt, no rushing. Just you, looked after.",
    cta: "Meet your artist",
    image: "/images/split.jpg",
    imageLabel: "In the Studio",
  },

  gallery: {
    label: "The Glow Diary",
    heading: "Recent work",
    items: [
      { id: 1, image: "/images/gallery-1.jpg", caption: "Brow wax" },
      { id: 2, image: "/images/gallery-2.jpg", caption: "Brow shape, wax & tint" },
      { id: 3, image: "/images/gallery-3.jpg", caption: "Lash lift, tint & brow lamination" },
      { id: 4, image: "/images/gallery-4.jpg", caption: "Spray tan glow" },
      { id: 5, image: "/images/gallery-5.jpg", caption: "Sun-kissed spray tan" },
    ],
  },

  // Prep & aftercare guidance, distilled into scannable tips.
  care: {
    label: "Prep & Aftercare",
    heading: "Get the most\nfrom your glow",
    note: "Dry skin drinks up solution (deeper, faster-fading) — moisturise in the days before. Oily skin develops slower — cleanse well beforehand.",
    columns: [
      {
        title: "Before your tan",
        tips: [
          "Exfoliate the day before — elbows, knees & ankles",
          "Skip moisturiser, lotion & makeup on the day",
          "Arrive with clean, product-free skin",
          "Wear loose, dark clothing & thongs or sandals",
          "Hair tied back, no jewellery or perfume",
        ],
      },
      {
        title: "After your tan",
        tips: [
          "Stay dry — no water or sweat for 6–8 hours",
          "Wait 8–10 hours to shower; lukewarm, no scrubbing",
          "Loose dark clothing, no tight underwear",
          "Avoid harsh soaps, exfoliants & body washes",
          "Moisturise daily to keep the glow",
          "Skip chlorine, hot tubs & heavy sweating",
        ],
      },
    ],
  },

  testimonials: {
    label: "Kind Words",
    items: [
      {
        quote: "The most natural tan I've ever had. Not orange, not patchy — just glowy.",
        name: "Bella R.",
      },
      {
        quote: "Felt so looked after. The studio is gorgeous and Elissa is an artist.",
        name: "Sophie M.",
      },
      {
        quote: "My lashes have never looked better. I won't go anywhere else now.",
        name: "Tahlia K.",
      },
    ],
  },

  booking: {
    label: "Bookings",
    heading: "DM to Book",
    subtext: "Slide into our DMs to check availability and lock in your glow.",
    cta: "Message on Instagram",
  },

  footer: {
    tagline: "Look Good, Feel Good.",
    hours: [
      { day: "Tue – Fri", time: "10am – 6pm" },
      { day: "Saturday", time: "9am – 4pm" },
      { day: "Sun – Mon", time: "By appointment" },
    ],
  },
};
