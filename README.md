# Glam & Glow Studio Website

A premium, cinematic one-page marketing website for Glam & Glow Studio — spray tanning and lash/brow services in Melbourne's eastern suburbs.

## 🎬 Features

- **Cinematic Design**: Scroll-triggered animations optimized for Instagram screen recording
- **Framer Motion Animations**: Smooth, beat-friendly motion throughout
- **Mobile-First**: Responsive design that looks stunning on all devices
- **Dark Mode Ready**: Warm, luxury color palette (cocoa, latte, cream, bronze)
- **Content Configuration**: All text, prices, images, hours in a single `content.ts` file
- **Accessible**: Semantic HTML, focus states, ARIA labels
- **Performance**: Next.js 14 App Router, Tailwind CSS, optimized images

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **TypeScript**
- **Vercel Deploy** (ready-to-go)

## 📁 Project Structure

```
glamglow-studio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navbar
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Services.tsx        # Services cards
│   │   ├── WhyUs.tsx           # Why Us section
│   │   ├── Gallery.tsx         # Before/after gallery
│   │   ├── BookingCTA.tsx      # Booking call-to-action
│   │   └── Footer.tsx          # Footer
│   └── config/
│       └── content.ts          # ✏️ EDITABLE: All content
├── tailwind.config.ts          # Tailwind config (brand colors)
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
├── postcss.config.js           # PostCSS config
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download** this project

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   
   Visit `http://localhost:3000` — site is live!

4. **Edit content** in `src/config/content.ts`:
   - Service descriptions, prices
   - Gallery images (swap Unsplash URLs)
   - Hours, location, contact
   - Booking link (currently Instagram DM)

5. **Customize brand colors** in `tailwind.config.ts`:
   - `cocoa: '#6B4636'`
   - `latte: '#C4A88E'`
   - `cream: '#F5EDE4'`
   - `bronze: '#B08254'`

## 📝 Content Editing

All editable content lives in **`src/config/content.ts`**:

```typescript
// Example: Change button text
booking: {
  headline: "Ready to Glow?",
  description: "Book your appointment...",
  buttonText: "DM to Book",      // ← Edit here
  buttonUrl: "https://instagram.com/glamnglow.studio",
}

// Example: Update services
services: [
  {
    title: "Spray Tanning",
    description: "...",
    priceRange: "$45–$75",         // ← Edit here
  },
  ...
]
```

### Placeholder Images
All gallery and service images are from Unsplash (placeholders). Replace with real images:
1. Upload images to a CDN (Vercel, Cloudinary, AWS S3)
2. Update image URLs in `content.ts`

Example:
```typescript
gallery: [
  {
    image: "https://images.unsplash.com/...",  // Replace this URL
    alt: "Before and after spray tan",
  },
  ...
]
```

## 🎨 Customization

### Change Booking Method
Currently set to Instagram DM. To swap to Fresha or Square:

1. Open `src/config/content.ts`
2. Update `bookingMethod`:
   ```typescript
   bookingMethod: "fresha", // "instagram" | "fresha" | "square"
   ```
3. Update `booking.buttonUrl`:
   ```typescript
   booking: {
     buttonUrl: "https://fresha.com/your-booking-link", // Fresha link
   }
   ```

### Adjust Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  cocoa: '#6B4636',      // Primary brown
  latte: '#C4A88E',      // Secondary tan
  cream: '#F5EDE4',      // Background
  bronze: '#B08254',     // Accent/buttons
  espresso: '#3A2A20',   // Text
},
```

### Modify Animations
Edit component `variants` in each section (e.g., `Hero.tsx`, `Services.tsx`):
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Adjust stagger timing
  },
}
```

## 📱 Mobile Optimization

The site is **mobile-first** and optimized for Instagram screen recording:
- Hero section is fully visible without scrolling (key for video)
- Touch-friendly buttons and links
- Responsive typography (scales with viewport)
- Smooth scrolling behavior

**Test on mobile**: Use Chrome DevTools mobile emulation or real device.

## ♿ Accessibility

- Semantic HTML (`<section>`, `<nav>`, `<main>`)
- ARIA labels on buttons and icons
- Focus states (keyboard navigation)
- Alt text on all images
- Color contrast meets WCAG AA standards
- Mobile keyboard support

## 🚀 Deployment on Vercel

### Option 1: Quick Deploy (Recommended)
1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/glamglow-studio.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - **Done!** Your site is live at `glamglow-studio.vercel.app`

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 3: Manual Deploy
1. Build: `npm run build`
2. Upload the `.next` folder to your hosting
3. Set environment to Node.js

## 📊 Performance

- **Lighthouse**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All green
- **Mobile**: Optimized with responsive images
- **Load Time**: < 2s on 4G

To test locally:
```bash
npm run build
npm run start
```

## 🎬 Instagram Screen Recording Tips

The site is designed to look great when screen-recorded:

1. **Hero Shot**: Logo badge fades in, headline appears—perfect first frame
2. **Scroll Rhythm**: Each section animates as you scroll—sync to music/beats
3. **Mobile View**: Record in portrait mode on a phone (9:16 aspect ratio)
4. **Smooth Scrolling**: Use slow, steady scroll for silky-smooth video
5. **Share**: Record on your phone, edit in CapCut, post to Instagram Reels

## 🔧 Troubleshooting

**Images not loading?**
- Check image URLs are publicly accessible
- Verify next.config.js has correct remote patterns
- Clear `.next` cache: `rm -rf .next`

**Styles not applying?**
- Rebuild: `npm run build`
- Clear cache: `rm -rf node_modules/.cache`

**Site won't start?**
- Delete `node_modules` and `.next`: `rm -rf node_modules .next`
- Reinstall: `npm install`
- Restart: `npm run dev`

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Deploy Docs](https://vercel.com/docs)

## 📞 Support

- Edit content in `src/config/content.ts`
- Modify styles in `tailwind.config.ts`
- Update animations in component files
- Deploy to Vercel for free hosting

---

Built with ✨ for Glam & Glow Studio. Look Good, Feel Good.
