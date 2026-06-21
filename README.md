# Glam & Glow Studio

A warm, intimate, boutique one-page site for **Glam & Glow Studio** — spray tanning
and lash/brow services in Melbourne's eastern suburbs. Editorial design, built to be
filmed for Instagram (scroll-reveal motion, slow Ken Burns hero, scrolling marquee).

## What's on the page

Hero (full-screen) → scrolling marquee → Services (two tiers) → Studio split row →
Gallery → Testimonials → "DM to Book" band → Footer.

## Design system

- **Palette:** cocoa `#6B4636`, latte `#C4A88E`, cream `#F5EDE4`, bronze `#B08254`, espresso `#3A2A20`
- **Fonts:** Fraunces (display serif) · Mr Dafoe (script accent) · Hanken Grotesk (body & labels)
- **Icons:** thin-stroke [Lucide](https://lucide.dev) in bronze — no emoji
- **Images:** local only, from `/public/images` (see that folder's README)

## Edit the content

**Everything editable lives in one file: [`src/config/content.ts`](src/config/content.ts)** —
copy, prices, hours, socials, testimonials, and image paths.

The booking link is a single variable at the top of that file:

```ts
export const BOOKING_URL = "https://instagram.com/glamnglow.studio";
```

Change it once and every button on the site (nav, hero, services, booking band) updates.

## Add your photos

See [`public/images/README.md`](public/images/README.md). Drop files in with the exact
names listed there; until then each spot shows a branded placeholder, never a broken image.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Deploy on Vercel

This repo is already connected to Vercel. Any push to the `main` branch redeploys
automatically. For a fresh project:

1. Push the repo to GitHub.
2. On [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. **Framework Preset must be `Next.js`** (this is the one setting that matters — do
   not add a custom `vercel.json` output directory).
4. Click **Deploy**.

## Tech

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion · Lucide.
