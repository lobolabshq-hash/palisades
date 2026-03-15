# Palisades Design System

## Brand Essence
Premium cannabis vape. New Jersey rooted. Calm, elevated, minimal.

---

## Color Palette

### Primary
- **Deep Forest** `#2D3B2D` — Primary brand color, headings
- **Sage** `#7A8B7A` — Secondary accent, subtle UI
- **Stone** `#E8E4DF` — Backgrounds, cards

### Neutrals
- **Warm White** `#FAF9F7` — Page background
- **Sand** `#D4CFC7` — Subtle accents
- **Clay** `#B8A99A` — Muted highlights
- **Charcoal** `#3D3D3D` — Body text
- **Soft Gray** `#6B6B6B` — Secondary text

### Usage
- Background: Warm White
- Text: Charcoal (headings), Soft Gray (body)
- Accents: Deep Forest, Sage
- Dividers: Sand at 30% opacity

---

## Typography

### Font Family
- **Primary:** Inter (Google Fonts) — Clean, modern, legible
- **Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold)

### Type Scale
| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Hero H1 | 64px / 4rem | 300 | 1.1 | -0.02em |
| H1 | 48px / 3rem | 400 | 1.2 | -0.01em |
| H2 | 32px / 2rem | 400 | 1.3 | 0 |
| H3 | 24px / 1.5rem | 500 | 1.4 | 0 |
| Body Large | 18px / 1.125rem | 400 | 1.6 | 0 |
| Body | 16px / 1rem | 400 | 1.6 | 0 |
| Caption | 14px / 0.875rem | 400 | 1.5 | 0.01em |
| Label | 12px / 0.75rem | 500 | 1.4 | 0.05em |

### Typography Principles
- Generous line height (1.5-1.6) for breathability
- Negative letter spacing on large headings for tightness
- Uppercase only for labels/buttons, never for body
- Ample whitespace between text blocks

---

## Spacing System

### Base Unit: 8px

| Token | Value | Usage |
|-------|-------|-------|
| xs | 8px | Tight gaps, icon padding |
| sm | 16px | Small gaps, internal padding |
| md | 24px | Component padding |
| lg | 32px | Section internal spacing |
| xl | 48px | Medium section gaps |
| 2xl | 64px | Large section gaps |
| 3xl | 96px | Major section breaks |
| 4xl | 128px | Hero/major section padding |

### Section Padding
- Vertical: 96px-128px (6-8rem)
- Horizontal: 24px mobile, 48px tablet, 64px+ desktop

---

## Components

### Buttons

**Primary Button**
- Background: Deep Forest `#2D3B2D`
- Text: Warm White `#FAF9F7`
- Padding: 16px 32px
- Border-radius: 4px
- Font: 14px, weight 500, letter-spacing 0.05em
- Hover: Background lightens to `#3D4B3D`

**Secondary Button**
- Background: transparent
- Border: 1px solid Charcoal `#3D3D3D`
- Text: Charcoal
- Same padding/radius as primary
- Hover: Background fills with Charcoal, text inverts

**Ghost Button**
- No background, no border
- Text: Deep Forest
- Underline on hover
- Used for subtle CTAs

### Cards

**Product Card**
- Background: Stone `#E8E4DF` or White
- Border-radius: 8px
- Shadow: none (flat aesthetic)
- Padding: 24px
- Image: Full bleed top, 4:3 ratio
- Content: Bottom aligned

**Content Card**
- Background: transparent
- Border: 1px solid Sand at 50%
- Border-radius: 4px
- Padding: 32px

### Forms

**Input Field**
- Border: 1px solid Sand
- Border-radius: 4px
- Padding: 16px
- Background: Warm White
- Focus: Border changes to Deep Forest
- Placeholder: Soft Gray

**Submit Button**
- Use Primary Button style
- Full width on mobile

---

## Layout

### Container
- Max-width: 1200px
- Padding: 0 24px (mobile), 0 48px (tablet), 0 64px (desktop)

### Grid
- 12-column grid
- Gap: 24px (mobile), 32px (desktop)

### Breakpoints
- Mobile: 0-640px
- Tablet: 641-1024px
- Desktop: 1025px+

---

## Visual Language

### Imagery Style
- Clean, minimal product photography
- Natural light, soft shadows
- Muted earthy backgrounds
- Lifestyle: calm, modern, intentional moments
- No clutter, no harsh lighting

### Iconography
- Thin line icons, 1.5px stroke
- Minimal, geometric
- Color: Sage or Charcoal

### Texture
- Subtle grain overlay optional (5% opacity)
- Soft gradients allowed (muted greens to sand)
- No harsh patterns or textures

---

## Animation Principles

### Philosophy
- Restrained, purposeful
- Enhance, don't distract
- Calm, smooth motion

### Timing
- Duration: 300-500ms
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out)

### Standard Transitions
- Fade in: opacity 0→1, 400ms
- Slide up: translateY(20px)→0, 500ms
- Hover lift: translateY(-4px), 300ms

### Scroll Behavior
- Smooth scroll enabled
- Section reveals on scroll (subtle)
- Parallax: minimal, 10-15% speed difference max

---

## Content Guidelines

### Tone
- Calm, confident, understated
- Never hype, never loud
- Warm but polished

### Formatting
- Short paragraphs (2-3 sentences max)
- Plenty of white space
- Headings are clear, not clever
- CTAs are direct: "Find Near You", "Join the Community"

---

## Compliance Notes

- Age gate required (21+)
- State-specific messaging
- No health claims
- Lab results accessible
- Terms of use, privacy policy linked
