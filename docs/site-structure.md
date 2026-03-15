# Palisades Website Architecture

## Site Objectives
1. Build brand desire
2. Educate on products
3. Drive people to stores
4. Collect first-party data
5. Grow community

---

## Page Structure

### 1. Hero Section
**Purpose:** Immediate brand impression, emotional hook
**Content:**
- Logo (subtle, top left)
- Navigation (minimal: Story, Products, Find Us, Community)
- Headline: "Rooted in Calm"
- Subhead: "Premium cannabis vapes, thoughtfully crafted for a more elevated experience."
- CTA: "Explore the Collection" (scrolls to products)
- Background: Full-bleed lifestyle image, muted/atmospheric

**Notes:** No carousel. Single powerful image. Text overlays bottom-left with gradient fade.

---

### 2. Brand Story Section
**Purpose:** Who we are, why we exist
**Content:**
- Small label: "THE BRAND"
- H2: "A More Grounded Experience"
- Body: 2-3 short paragraphs
  - Origin story (New Jersey roots)
  - Philosophy (intentional design, quality first)
  - The Palisades connection (landscape, calm, elevation)
- Supporting image: Product detail or landscape

**Layout:** Text left, image right. 50/50 split on desktop.

---

### 3. Products Section
**Purpose:** Showcase lineup, build desire
**Content:**
- Small label: "THE COLLECTION"
- H2: "Designed to Unwind"
- 3-4 product cards:
  - Product image (device + packaging)
  - Product name
  - Brief descriptor (3-5 words)
  - "Learn More" link
- "Find Near You" CTA button

**Layout:** Grid of cards. Clean, breathable spacing.

---

### 4. Experience/Philosophy Section
**Purpose:** Deepen brand connection
**Content:**
- Small label: "OUR PHILOSOPHY"
- H2: "Intentional by Design"
- Three pillars (horizontal or vertical stack):
  1. **Thoughtfully Crafted** — Quality first, no compromises
  2. **Rooted in Place** — New Jersey landscape as inspiration
  3. **Calm & Clear** — No clutter, just experience
- Each with icon + short description

**Layout:** Centered content. Can be 3-column or stacked.

---

### 5. Retail/Availability Section
**Purpose:** Drive to purchase
**Content:**
- Small label: "FIND US"
- H2: "Near You"
- Store locator integration OR
- Text input: "Enter your zip code"
- Results: List of nearby retailers
- "View All Locations" link
- Wholesale/partner inquiry CTA for retailers

**Layout:** Centered. Form prominent. Results below.

---

### 6. Community/Email Section
**Purpose:** First-party data capture, community building
**Content:**
- Small label: "STAY CONNECTED"
- H2: "Join the Community"
- Body: "Get updates on new drops, exclusive events, and the latest from Palisades."
- Email input + "Subscribe" button
- Social links (Instagram, etc.)

**Layout:** Centered, contained width (max 480px).

---

### 7. Footer
**Purpose:** Compliance, contact, navigation
**Content:**
- Logo (small)
- Navigation links (from header)
- Social icons
- Legal: Age verification (21+), Terms, Privacy, Cookies
- Copyright
- Contact: hello@palisades or similar

**Layout:** Clean 3-4 column grid. Muted, non-dominant.

---

## Technical Requirements

### Tech Stack
- **Framework:** Static HTML or React (Next.js if SEO critical)
- **Styling:** Tailwind CSS or vanilla CSS
- **Hosting:** Netlify or Vercel (fast CDN, free SSL)
- **Domain:** palisades.com or palisadesvapes.com

### Integrations
- **Store Locator:** Storepoint, Brickwork, or custom JSON
- **Email Capture:** Postmark, Resend, or ConvertKit
- **Analytics:** Plausible or Fathom (privacy-friendly)

### SEO
- Meta title: "Palisades | Premium Cannabis Vapes, Rooted in Calm"
- Meta description: "Thoughtfully crafted cannabis vapes from New Jersey. Elevated design, calm experience, premium quality."
- OG tags for social sharing

### Compliance
- Age gate modal on first visit
- State availability warnings
- Lab results link per product
- Legal disclaimers

---

## File Structure
```
palisades/
├── src/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── components/
│       ├── header.html
│       ├── footer.html
│       └── age-gate.html
├── assets/
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── product-1.jpg
│   │   ├── product-2.jpg
│   │   ├── product-3.jpg
│   │   └── brand-story.jpg
│   └── fonts/
├── docs/
│   ├── design-system.md
│   ├── site-structure.md
│   └── content.md
└── README.md
```

---

## Launch Checklist
- [ ] Domain purchased & configured
- [ ] SSL certificate active
- [ ] Age gate implemented
- [ ] Email signup tested
- [ ] Store locator working
- [ ] Mobile responsive verified
- [ ] Analytics installed
- [ ] SEO meta tags complete
- [ ] Legal pages linked
- [ ] Cross-browser tested
