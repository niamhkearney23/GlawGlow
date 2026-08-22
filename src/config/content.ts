// ============================================================
// CONTENT — edit this one file to change everything on the site.
// Photos live in /public/images (see the README in that folder).
// ============================================================

export const BOOKING_URL = "https://instagram.com/glamnglow.studio";

// Online booking calendar. Create a free Calendly (calendly.com) or Fresha
// (fresha.com) account, copy your booking page link, paste it here and a live
// booking calendar appears on the site. Leave empty to use "Message to book".
export const BOOKING_EMBED_URL = "";

export const siteConfig = {
  name: "Glam & Glow Studio",
  shortName: "Glam & Glow",
  location: "Melbourne, Eastern Suburbs",
  instagram: "@glamnglow.studio",
  instagramUrl: "https://instagram.com/glamnglow.studio",
  bookingUrl: BOOKING_URL,

  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Gallery", href: "#gallery" },
      { label: "Aftercare", href: "#care" },
      { label: "Reviews", href: "#reviews" },
    ],
    cta: "Book",
  },

  hero: {
    eyebrow: "Spray Tanning · Lashes · Brows",
    headline: "Bronzed. Lifted.\nPolished.",
    sub: "Professional spray tanning, lash lifts and brow styling in a private studio in Melbourne's eastern suburbs.",
    cta: "Book an appointment",
    ctaSecondary: "View services",
    image: "/images/hero.jpg",
  },

  ticker: ["Spray Tanning", "Lash Lift & Tint", "Brow Shaping", "Brow Lamination", "Melbourne Eastern Suburbs"],

  services: {
    label: "Services",
    heading: "The menu",
    intro: "Every appointment is one-on-one and tailored to you. Prices are a guide — message for a quote on combinations.",
    groups: [
      {
        title: "Spray Tanning",
        items: [
          { name: "Full body spray tan", desc: "Custom-matched solution, hand-applied for an even, natural finish.", time: "20 min", price: "$45" },
          { name: "Express tan", desc: "Rapid-develop formula — rinse in 1–3 hours.", time: "20 min", price: "$55" },
          { name: "Bridal / event package", desc: "Trial tan plus event tan, timed to the day.", time: "2 visits", price: "$95" },
        ],
      },
      {
        title: "Lashes & Brows",
        items: [
          { name: "Lash lift & tint", desc: "Lifts and darkens your natural lashes for 6–8 weeks.", time: "45 min", price: "$75" },
          { name: "Brow shape & tint", desc: "Wax or tweeze shaping with a colour-matched tint.", time: "30 min", price: "$40" },
          { name: "Brow lamination", desc: "Sets brows fuller and lifted, includes shape and tint.", time: "45 min", price: "$70" },
        ],
      },
    ],
  },

  about: {
    label: "About",
    heading: "A private studio,\nrun by your artist",
    body:
      "Glam & Glow is owned and run by Elissa, a qualified tanning and lash technician. Appointments are one client at a time in a calm, private studio — no waiting rooms, no rushing. Every tan is colour-matched to your skin tone and every brow is shaped to your face.",
    points: ["Qualified & insured", "Premium, vegan solutions", "Private one-on-one studio", "Easy parking, Eastern Suburbs"],
    cta: "Book an appointment",
    image: "/images/split.jpg",
  },

  gallery: {
    label: "Gallery",
    heading: "Recent work",
    items: [
      { id: 1, image: "/images/gallery-1.jpg", caption: "Lash lift & tint" },
      { id: 2, image: "/images/gallery-2.jpg", caption: "Full body spray tan" },
      { id: 3, image: "/images/gallery-3.jpg", caption: "Brow lamination" },
      { id: 4, image: "/images/gallery-4.jpg", caption: "Event tan" },
      { id: 5, image: "/images/gallery-5.jpg", caption: "Brow shape & tint" },
      { id: 6, image: "/images/gallery-6.jpg", caption: "Express tan" },
    ],
    cta: "See more on Instagram",
  },

  care: {
    label: "Preparation & Aftercare",
    heading: "Getting the best result",
    columns: [
      {
        title: "Before your tan",
        tips: [
          "Exfoliate the day before, focusing on elbows, knees and ankles",
          "Arrive with clean skin — no moisturiser, deodorant or makeup",
          "Wear loose, dark clothing and open footwear",
          "Remove jewellery and avoid perfume",
        ],
      },
      {
        title: "After your tan",
        tips: [
          "Avoid water and sweating for 6–8 hours while it develops",
          "First rinse in lukewarm water — no soap or scrubbing",
          "Moisturise daily to extend the life of your tan",
          "Avoid chlorine, spas and exfoliants",
        ],
      },
    ],
    note: "Dry skin absorbs more solution and can fade faster — moisturise well in the days beforehand. Oily skin develops more slowly — cleanse thoroughly before your appointment.",
  },

  testimonials: {
    label: "Reviews",
    items: [
      { quote: "The most natural tan I've ever had. Even, streak-free, and it faded beautifully.", name: "Bella R." },
      { quote: "Elissa is meticulous. My brows have never been shaped this well.", name: "Sophie M." },
      { quote: "Calm, private, professional. I won't go anywhere else for my lashes now.", name: "Tahlia K." },
    ],
  },

  booking: {
    label: "Bookings",
    heading: "Book an appointment",
    subtext: "Message us on Instagram with your preferred service and times and we'll confirm your appointment.",
    cta: "Message to book",
  },

  footer: {
    hours: [
      { day: "Tuesday – Friday", time: "10:00am – 6:00pm" },
      { day: "Saturday", time: "9:00am – 4:00pm" },
      { day: "Sunday – Monday", time: "By appointment" },
    ],
  },
};
