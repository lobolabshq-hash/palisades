# Palisades Website

A premium cannabis vape brand website built for Palisades.

## Two builds in this repo

| Folder | What it is |
|--------|------------|
| **`site/`** | **Production bundle** — `index.html`, `our-story.html`, `the-edit.html`, colorway selector, lifestyle carousel, store locator, embedded assets. **Deploy this.** |
| **`src/`** | Lighter single-page variant (older/alternate). |

**Local preview (full site):** `./serve.sh` or `cd site && python3 -m http.server 8000`  
**Deploy:** see **[CURSOR_DEPLOY.md](./CURSOR_DEPLOY.md)** — Netlify uses **`netlify.toml`** → publish directory **`site`**.

## Overview

- **Brand:** Palisades - New Jersey rooted, elevated cannabis vapes
- **Aesthetic:** Minimal, calm, premium - "cannabis meets skincare"
- **Goal:** Build brand desire, educate products, drive retail, capture email, grow community

## Tech Stack

- Pure HTML/CSS/JS (no framework)
- Tailwind-inspired custom CSS
- Responsive, mobile-first
- Google Fonts (Inter)

## File Structure

```
src/
├── index.html          # Main page (single page site)
├── css/
│   └── styles.css      # Complete design system
├── js/
│   └── main.js         # Age gate, smooth scroll, forms
└── assets/
    └── images/           # (add your photos here)
        ├── hero.jpg
        ├── brand-story.jpg
        ├── product-1.jpg
        ├── product-2.jpg
        └── product-3.jpg
```

## Sections

1. **Hero** - "Rooted in Calm" - atmospheric, brand hook
2. **Brand Story** - Origin, philosophy, New Jersey roots
3. **Products** - 3 product cards with clean presentation
4. **Philosophy** - 3 pillars: Crafted, Rooted, Calm
5. **Find Us** - ZIP code store locator
6. **Community** - Email signup, social links
7. **Footer** - Compliance, contact, legal

## Features

- ✅ Age verification gate (21+)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Scroll reveal animations
- ✅ Working store locator (mock data)
- ✅ Email signup form
- ✅ Accessibility considerations
- ✅ Cannabis compliance ready

## To Deploy

1. Replace placeholder images in `/assets/images/`
2. Update store locator with real API/data
3. Connect email form to your provider (ConvertKit, Postmark, etc.)
4. Add real social links
5. Deploy to Netlify/Vercel
6. Configure domain

## Design System

See `/docs/design-system.md` for full color palette, typography, and components.

## Next Steps

- Add real product images
- Connect store locator API
- Set up email integration
- Deploy and test
- Add analytics (Plausible/Fathom)
