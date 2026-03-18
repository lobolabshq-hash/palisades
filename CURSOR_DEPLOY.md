# Palisades — Deploy (this repo)

The **production site** lives in **`site/`** (synced from your current exports, e.g. `files-4/`):

```
site/
├── index.html          # Home (from palisades-live.html)
├── our-story.html
├── the-edit.html
├── CURSOR_DEPLOY.md      # Original package notes (also in site/)
└── *.png / *.jpeg        # Brand assets (package ships flat; images at root)
```

The **`src/`** folder is an alternate lighter build (single-page). For the full marketing site, deploy **`site/`**.

---

## Local preview

```bash
cd site && python3 -m http.server 8000
# → http://localhost:8000
```

Or from repo root: `./serve.sh` (serves `site/`).

---

## Deploy

### Netlify (recommended)

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir site
```

This repo includes **`netlify.toml`** so Netlify can auto-use `site` as the publish directory.

### Vercel

```bash
vercel --prod
# Set root to `site` when prompted, or use vercel.json
```

### GitHub Pages

Push the repo, then **Settings → Pages →** deploy from branch and set **folder** to `/site` (or use an action that publishes `site/`).

---

## Checklist (from package)

- [ ] Maps / dispensary links as needed  
- [ ] Email signup → real provider  
- [ ] Custom domain + HTTPS (Netlify/Vercel handle HTTPS)  
- [ ] Mobile smoke test  
- [ ] Age gate if required (NJ)

**Contact:** admin@palisadesgoods.com · **Instagram:** [@puffpalisades](https://www.instagram.com/puffpalisades)
