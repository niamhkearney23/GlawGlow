// ============================================
// CONTENT CONFIGURATION
// Edit this file to update all site content
// ============================================

export const siteConfig = {
  name: "Glam & Glow Studio",
  tagline: "Look Good, Feel Good.",
  founder: "Elissa Colafella",
  location: "Melbourne, Eastern Suburbs",
  instagram: "@glamnglow.studio",
  instagramUrl: "https://instagram.com/glamnglow.studio",
  bookingMethod: "instagram", // "instagram" | "fresha" | "square" — change here to swap booking links

  hero: {
    headline: "Look Good, Feel Good.",
    subheadline: "Luxury spray tanning and lash & brow services in Melbourne's eastern suburbs",
    ctaPrimary: "Book an Appointment",
    ctaSecondary: "View Services",
    backgroundImage: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=600&fit=crop", // PLACEHOLDER
  },

  services: [
    {
      id: "spray-tanning",
      title: "Spray Tanning",
      description: "Professional spray tanning with premium solutions. Express application (15-20 mins) with a custom shade matched to your skin tone.",
      features: ["Custom shade matching", "Express service", "Prep & aftercare guidance", "Long-lasting glow"],
      priceRange: "$45–$75",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=500&fit=crop", // PLACEHOLDER
    },
    {
      id: "lash-brow",
      title: "Lash & Brow",
      description: "Expert lash lifts, brow lamination, and precision tinting. Enhance your natural beauty with personalised styling.",
      features: ["Lash lifts & tints", "Brow lamination", "Precision shaping", "Long-lasting results"],
      priceRange: "$60–$120",
      image: "https://images.unsplash.com/photo-1570157335907-97b5ebb0d32d?w=500&h=500&fit=crop", // PLACEHOLDER
    },
  ],

  whyUs: [
    {
      icon: "✨",
      title: "Premium Experience",
      description: "Luxe-but-approachable. We create an intimate, welcoming studio space where you feel pampered.",
    },
    {
      icon: "👩‍💼",
      title: "Personalised by Elissa",
      description: "Expert care from someone who knows beauty. Every appointment is tailored to you.",
    },
    {
      icon: "📍",
      title: "Eastern Suburbs Convenience",
      description: "Easy-to-find location in Melbourne's most desirable area. Your glow-up, locally.",
    },
  ],

  gallery: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop", // PLACEHOLDER
      alt: "Before and after spray tan results",
      category: "Spray Tanning",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1570157335907-97b5ebb0d32d?w=400&h=400&fit=crop", // PLACEHOLDER
      alt: "Lash lift and tint results",
      category: "Lash & Brow",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop", // PLACEHOLDER
      alt: "Brow lamination results",
      category: "Lash & Brow",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1560066169-b763a5585b45?w=400&h=400&fit=crop", // PLACEHOLDER
      alt: "Client spray tan results",
      category: "Spray Tanning",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1553183969-83ee3ef14236?w=400&h=400&fit=crop", // PLACEHOLDER
      alt: "Lash and brow styling",
      category: "Lash & Brow",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1487412947a31-f19b2dce72b8?w=400&h=400&fit=crop", // PLACEHOLDER
      alt: "Spray tan glow results",
      category: "Spray Tanning",
    },
  ],

  booking: {
    headline: "Ready to Glow?",
    description: "Book your appointment now. Send us a DM to check availability and secure your slot.",
    buttonText: "DM to Book",
    buttonUrl: "https://instagram.com/glamnglow.studio",
  },

  footer: {
    hours: [
      { day: "Tuesday–Friday", time: "10am–6pm" },
      { day: "Saturday", time: "10am–4pm" },
      { day: "Sunday–Monday", time: "Closed" },
    ],
    address: "Melbourne, Eastern Suburbs",
    phone: "(03) 1234 5678", // PLACEHOLDER
    email: "hello@glamglowstudio.com.au", // PLACEHOLDER
  },
};
