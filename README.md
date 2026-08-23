# Glam & Glow Studio

Website for **Glam & Glow Studio** — spray tanning, lash lifts, brows and waxing,
run by Elissa Colafella from a private home studio in Blackburn, Melbourne.

**Live:** https://glaw-glow.vercel.app

## Editing the site

**Almost everything you'd want to change lives in one file:**
[`src/config/content.ts`](src/config/content.ts) — services, prices, durations,
opening hours, reviews, the About text, gallery captions and Instagram link.

Edit it on GitHub, commit, and the live site updates in about a minute.

### The booking link
Two settings at the top of `content.ts`:

```ts
export const BOOKING_URL = "https://instagram.com/glamnglow.studio";  // "Message to book"
export const BOOKING_EMBED_URL = "";                                  // live booking calendar
```

Leave `BOOKING_EMBED_URL` empty and every "Book" button points at Instagram DMs.
Paste a **Fresha** or **Calendly** booking link into it and a real booking
calendar appears on the page instead — no other changes needed.

### Photos
See [`public/images/README.md`](public/images/README.md). The photos in there now
are stock placeholders; drop in real ones using the same file names.

## What's on the page

Hero → services ticker → price-list menu → About → gallery → prep & aftercare →
reviews → booking → footer.

## Design

- **Colours:** cream `#FAF6F1`, sand `#EFE6DC`, taupe `#C9B8A8`, bronze `#A9794F`, cocoa `#5E4332`, espresso `#2B211B`
- **Fonts:** Cormorant Garamond (headings) + Manrope (body/labels)
- **Icons:** [Lucide](https://lucide.dev), thin stroke

### Motion
The wordmark rises on load then glides into the header (shared-element morph).
On scroll: photos wipe-reveal, the About photo has parallax, menu rows stagger in,
and a bronze progress line tracks down the top of the page. All motion is disabled
automatically for visitors who have "reduce motion" turned on.

## Search / sharing

The page carries `BeautySalon` structured data (location, opening hours and priced
services, generated from `content.ts`) so Google can show the business properly in
local results, plus OpenGraph tags so the link previews nicely when shared.

## Running it locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Note: don't run `npm run build` while `npm run dev` is running — they share the
`.next` folder and the dev server will start throwing 500s. If that happens,
`rm -rf .next` and restart.

## Deploying

The repo is connected to Vercel — pushing to `main` deploys automatically.
For a fresh setup, import the repo on vercel.com and make sure **Framework Preset
is `Next.js`** (don't add a custom `vercel.json` output directory).

## Tech

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion · Lucide.
