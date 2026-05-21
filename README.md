# Suraj Agrawal — Portfolio

A modern, responsive developer portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Fonts**: Inter + JetBrains Mono (Google Fonts)

## Sections

1. **Hero** — Animated particle canvas, intro, social links
2. **About** — Bio, stats, contact details
3. **Skills** — Categorized tech stack with icons
4. **Experience** — Interactive tabbed work history
5. **Projects** — Featured + other projects from GitHub
6. **Contact** — Contact form + direct links

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build → /out
```

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Next.js — just click Deploy ✓

## Deploying to GitHub Pages

The project uses `output: "export"` in `next.config.ts` for static export.

1. Run `npm run build` — generates the `/out` folder
2. Push to a repo, then in Settings → Pages → set source to **GitHub Actions**
3. Or use the `gh-pages` branch with the `/out` folder contents

## Customization

- Update resume data in each component under `src/components/`
- Add your `resume.pdf` to the `/public` folder to enable the Resume button in the navbar
- Replace project GitHub/live URLs in `src/components/Projects.tsx`
