# KristopherAce Photography

Personal photography site: portfolio, galleries, location-based albums (world map), and blog.

Built with Astro 5, Tailwind CSS v4, Mapbox GL JS. Deployed on Cloudflare Pages.

## Local development

```bash
npm install
cp .env.example .env        # then paste your real Mapbox + Web3Forms keys
npm run dev                 # http://localhost:4321
```

## Build

```bash
npm run build               # outputs static site to ./dist
npm run preview             # serve the built site locally
```

## Deploy (Cloudflare Pages)

1. Push to GitHub (main branch).
2. In Cloudflare dashboard → Pages → "Connect to Git" → pick this repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Environment variables (Production): `PUBLIC_MAPBOX_TOKEN`, `PUBLIC_WEB3FORMS_KEY`.
5. First deploy gives you `kristopheracephotography.pages.dev`. Custom domain cutover happens later.

## Content model

All content lives in `src/content/`:

- `blog/` — Markdown/MDX posts. Frontmatter: `title`, `date`, `cover`, `excerpt`, `tags`.
- `portfolio/` — "Best of" entries. Frontmatter: `title`, `image`, `order`.
- `gallery/` — Recent (last 2–3 months). Frontmatter: `title`, `image`, `date`.
- `albums/` — Location-based albums with geo coordinates. Frontmatter: `title`, `location`, `coordinates: [lng, lat]`, `cover`, `images: []`, `date`.

Drop images into `src/assets/images/` (build-time optimized by Astro) or later migrate to a CDN (Cloudflare Images / Bunny.net) when volume grows.

## Originals

Store RAW/full-res originals OUTSIDE the repo. A local `/originals/` folder is gitignored by default. Back those up separately (external drive, Backblaze, iCloud).
