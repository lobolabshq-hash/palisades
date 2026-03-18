# Palisades Website — Cursor Agent Deployment Instructions

## Project Structure

```
palisades/
├── index.html          ← Main site (palisades-live.html renamed)
├── our-story.html      ← Our Story page
├── the-edit.html       ← The Edit / Blog page
└── assets/
    ├── white_logo.png
    ├── cliff.png
    ├── product-hero.jpeg
    ├── product-lineup.png
    ├── palisade_black.png
    ├── palisade_green.png
    ├── palisade_orange.png
    ├── palisade_white.png
    ├── flatlay-womens.jpeg
    ├── gym-bag-hand.png
    ├── flatlay-womens.png
    ├── gym-tote-overhead.png
    ├── gym-items-flatlay.png
    ├── porthole-portrait.png
    ├── subway-group.png
    └── pedestal-product.png
```

---

## Step 1 — Set Up Local Project

```bash
# Create project folder
mkdir palisades-website && cd palisades-website

# Unzip the package
unzip palisades-package.zip

# Confirm structure
ls -la
```

---

## Step 2 — Rename Files for Production

```bash
# Rename main file to index.html
mv palisades-live.html index.html
```

---

## Step 3 — Initialize Git

```bash
git init
git add .
git commit -m "Initial Palisades website commit

- Main landing page (index.html)
- Our Story page (our-story.html)
- The Edit / blog page (the-edit.html)
- All brand assets embedded
- Interactive colorway selector
- Lifestyle carousel
- Store locator with NJ map
- Email signup section
- Linked to admin@palisadesgoods.com
- Linked to @puffpalisades on Instagram"
```

---

## Step 4 — Deploy Options

### Option A: Netlify (Recommended — fastest)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy (from project root)
netlify deploy --prod --dir .

# Your site will be live at:
# https://[your-site-name].netlify.app
# or connect your custom domain in the Netlify dashboard
```

### Option B: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod

# Follow the prompts — select "Other" for framework
```

### Option C: GitHub Pages

```bash
# Push to GitHub first
git remote add origin https://github.com/YOUR_USERNAME/palisades-website.git
git branch -M main
git push -u origin main

# Then in GitHub:
# Settings → Pages → Source: Deploy from branch → main → / (root)
# Site will be at: https://YOUR_USERNAME.github.io/palisades-website
```

### Option D: Custom Domain via Netlify

```bash
netlify deploy --prod --dir .

# Then in Netlify dashboard:
# Domain Settings → Add custom domain → palisadesgoods.com
# Update your DNS:
#   A record:     75.2.60.5
#   CNAME record: www → [your-site].netlify.app
```

---

## Step 5 — Environment / Config Notes

- **Images are in the same directory** as the HTML (e.g. `white_logo.png`, `cliff.png`, `pedestal-product.png`) — web-ready, cacheable, no CDN required
- **Google Maps iframe** is in the Find Us section — requires internet connection to render
- **Email links** all point to `admin@palisadesgoods.com`
- **Instagram links** point to `https://www.instagram.com/puffpalisades`
- **No build step required** — pure HTML/CSS/JS, deploy the folder as-is

---

## Step 6 — Future Updates via Cursor

When making changes in Cursor:

```bash
# After edits
git add .
git commit -m "Update: [describe what changed]"

# If on Netlify
netlify deploy --prod --dir .

# If on Vercel
vercel --prod

# If on GitHub Pages
git push origin main
```

---

## Quick Checklist Before Going Live

- [ ] Replace Google Maps embed with a real API key if needed
- [ ] Connect a real email platform (Mailchimp, Klaviyo) to the signup forms
- [ ] Set up a custom domain
- [ ] Test on mobile (all sections are responsive)
- [ ] Add real dispensary Google Maps links to the Directions buttons
- [ ] Enable HTTPS (automatic on Netlify/Vercel)
- [ ] Add age-gate if required by NJ regulations

---

## Contact

**Email:** admin@palisadesgoods.com  
**Instagram:** @puffpalisades  
**Est. 2025 · New Jersey**
