# Developer Portfolio

A simple, minimal developer portfolio built with [Astro](https://astro.build).

## ✏️ Add your own data

Everything on the site is driven by **one file**: [`src/data/profile.ts`](src/data/profile.ts).

Open it and replace the placeholder values (name, bio, links, skills, projects, experience) with your own. The site updates automatically — no other file needs to change.

- **Skills / Projects / Experience sections**: leave an array empty (e.g. `experience: []`) to hide that section.
- **Skill icons**: known skills (TypeScript, React, Docker, PostgreSQL, …) automatically get a small monochrome icon next to their name — no extra setup. The curated list and matching live in [`src/data/skillIcons.ts`](src/data/skillIcons.ts); anything not in the list shows as plain text.
- **Avatar**: drop an image into `public/` and set `profile.avatar` to its path (e.g. `"/avatar.jpg"`). Set it to `""` to hide it.
- **Résumé**: drop a PDF into `public/` and set `profile.resumeUrl` (e.g. `"/resume.pdf"`). Set it to `""` to hide the button.

## 📊 Visitor analytics

The site supports [GoatCounter](https://www.goatcounter.com) — free for personal use, privacy-friendly, and it shows **visitor counts plus country-level geography** in its dashboard.

1. Create a free account at [goatcounter.com](https://www.goatcounter.com) and add your site.
2. In [`src/data/profile.ts`](src/data/profile.ts), paste your site code into `analytics.goatcounter` (the `yoursite` part of `yoursite.goatcounter.com`).
3. In your GoatCounter site settings, enable **“Allow adding visitor counts on your website”** — this powers the on-page visitor counter.
4. Deploy and visit the site — stats appear at `https://yoursite.goatcounter.com`.

Set `analytics.goatcounter` to `""` to disable tracking and the counter entirely (no script is loaded).

### 👀 Visitor counter

When analytics is enabled, a muted **“👀 N visitors”** line appears at the bottom of the Contact section. It fetches the live total from GoatCounter's public JSON endpoint (no API keys exposed). If the fetch fails (e.g. the setting above is off, or the site is offline), it hides itself — never a broken UI. Note that GoatCounter caches the count for up to four hours, so it updates slowly by design.

## 🌙 Dark / light mode

The site ships **dark by default** with a toggle in the nav (top right). The choice is saved in `localStorage`, so it persists between visits. The two palettes live in [`src/styles/global.css`](src/styles/global.css): dark values in `:root`, light values in `:root[data-theme="light"]`.

To make **light the default** instead, change the default in the inline script in [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) from `"dark"` to `"light"` (two places: the initial value and the fallback), and swap the two palettes so `:root` holds the light values.

## 🎨 Change colors

All colors live in CSS variables in [`src/styles/global.css`](src/styles/global.css). The palette is monochrome with a single accent color (`--accent`) in each theme — change those variables to recolor the site.

## 🧞 Commands

| Command         | Action                                        |
| :-------------- | :-------------------------------------------- |
| `npm install`   | Installs dependencies                         |
| `npm run dev`   | Starts local dev server at `localhost:4321`   |
| `npm run build` | Builds the production site to `./dist/`       |
| `npm run preview` | Preview the build locally                   |
| `npm run astro check` | Type-checks the project                  |

## 🚀 Deploy

Build a static site with `npm run build`, then host `dist/` anywhere — Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any static host.
