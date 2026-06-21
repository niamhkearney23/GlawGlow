# 🚀 Quick Start Guide

Your premium Glam & Glow Studio website is ready. Follow these steps to get it live.

## Step 1: Download & Setup (5 minutes)

```bash
# 1. Extract the ZIP file
# 2. Open terminal in the glamglow-studio folder
# 3. Install dependencies
npm install

# 4. Start dev server
npm run dev

# 5. Open http://localhost:3000 in your browser
```

You should see the website with:
- ✨ Logo badge fading in
- 📱 Responsive mobile-first design
- 🎬 Smooth scroll animations
- 🌟 Luxury branding (cocoa, latte, cream colors)

## Step 2: Customize Your Content (10 minutes)

Open **`src/config/content.ts`** and update:

### Change text:
```typescript
hero: {
  headline: "Look Good, Feel Good.",
  subheadline: "Luxury spray tanning...",
}
```

### Update services & prices:
```typescript
services: [
  {
    title: "Spray Tanning",
    priceRange: "$45–$75",  // ← Change price
  },
]
```

### Update gallery images:
Replace Unsplash URLs with your own photos:
```typescript
gallery: [
  {
    image: "YOUR_IMAGE_URL_HERE",  // Upload to Cloudinary or Vercel
    alt: "Before and after spray tan",
  },
]
```

### Update contact info:
```typescript
footer: {
  phone: "(03) 1234 5678",    // Your number
  email: "hello@glamglow.com", // Your email
}
```

## Step 3: Deploy to Vercel (5 minutes)

### Option A: GitHub + Vercel (Recommended)
1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Glam & Glow Studio website"
   git remote add origin https://github.com/YOUR_USERNAME/glamglow-studio
   git push -u origin main
   ```

2. Go to **https://vercel.com**
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"
6. **Done!** Site is live at `glamglow-studio.vercel.app`

### Option B: Vercel CLI
```bash
npm i -g vercel
vercel
```

## Step 4: Update Images (20 minutes)

Replace placeholder Unsplash images with real ones:

1. **Upload images** to a free CDN:
   - **Vercel Blob** (built into Vercel)
   - **Cloudinary** (https://cloudinary.com — free tier)
   - **Imgur** (https://imgur.com — no signup required)

2. **Copy image URLs**

3. **Update in `content.ts`**:
   ```typescript
   hero: {
     backgroundImage: "YOUR_REAL_IMAGE_URL",
   }
   
   services: [
     {
       image: "YOUR_SERVICE_IMAGE_URL",
     },
   ]
   
   gallery: [
     {
       image: "YOUR_GALLERY_IMAGE_URL",
     },
   ]
   ```

4. **Commit & push**:
   ```bash
   git add .
   git commit -m "Update with real images"
   git push
   ```
   → Vercel auto-deploys! ✨

## Step 5: Setup Instagram Booking Link (2 minutes)

The site currently links to Instagram DM for bookings.

To change:
1. Open `src/config/content.ts`
2. Update booking link:
   ```typescript
   booking: {
     buttonUrl: "https://instagram.com/glamnglow.studio", // Your Instagram
   }
   ```

**To use Fresha or Square instead**:
1. Get your booking link from Fresha/Square
2. Update in content.ts:
   ```typescript
   booking: {
     buttonUrl: "https://fresha.com/your-booking-link",
   }
   ```

## What's Included

✅ **Next.js 14** with App Router  
✅ **Tailwind CSS** with brand colors  
✅ **Framer Motion** animations (60fps, Instagram-optimized)  
✅ **Mobile-first** responsive design  
✅ **Accessible** (WCAG AA compliant)  
✅ **SEO-ready** with metadata  
✅ **Vercel deploy-ready**  
✅ **Content in one file** (`content.ts`)  

## Key Files to Edit

| File | What to change |
|------|---|
| `src/config/content.ts` | All text, prices, images, hours, contact |
| `tailwind.config.ts` | Brand colors |
| `src/components/*.tsx` | Component layouts (if needed) |

## Troubleshooting

**"npm: command not found"**
- Install Node.js from https://nodejs.org

**Images not showing?**
- Check URL is public (right-click image → Copy URL)
- Verify URL starts with `https://`

**Styles look wrong?**
- Clear cache: `rm -rf .next`
- Rebuild: `npm run build`

**Deploy failed on Vercel?**
- Check GitHub repo is public
- Verify `package.json` is in root folder

## Next Steps

1. ✅ Deploy to Vercel
2. 📸 Add your real before/after photos
3. 📱 Test on Instagram by screen-recording
4. 🔗 Add link to your Instagram bio
5. 📊 Monitor analytics (Vercel provides free stats)

## Support

- **Full docs**: See `README.md`
- **Animations**: Edit component files
- **Colors**: Update `tailwind.config.ts`
- **Hosting**: Deploy via Vercel (free, fastest)

---

**That's it!** You now have a premium, cinematic website for Glam & Glow Studio.

Look Good, Feel Good. ✨
