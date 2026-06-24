# 🚀 Ricardo Canul — Portfolio

Personal portfolio website built with [Nuxt 4](https://nuxt.com), showcasing full-stack development experience in PHP, Python, and modern web technologies.

🌐 **Live site**: [ricardocanul7.github.io](https://ricardocanul7.github.io)

---

## ✨ Features

- **Dual language** — English / Spanish via `@nuxtjs/i18n`
- **SEO optimized** — Sitemap, Open Graph, JSON-LD structured data, auto-generated OG images
- **Image optimization** — Responsive images with `@nuxt/image`
- **Dark UI** — Tailwind CSS 4 with SCSS utilities
- **Self-hosted fonts** — Via `@nuxt/fonts`
- **Static generated** — Deployed to GitHub Pages via `nuxt generate`
- **Analytics** — Google Analytics via `@nuxt/scripts`

---

## 🛠️ Tech Stack

| Category | Tools |
|----------|-------|
| **Framework** | Nuxt 4, Vue 3, TypeScript |
| **Styling** | Tailwind CSS 4, SCSS |
| **i18n** | @nuxtjs/i18n |
| **Icons** | Lucide Icons, Material Symbols, Simple Icons |
| **SEO** | @nuxtjs/sitemap, nuxt-og-image, nuxt-seo-utils |
| **Images** | @nuxt/image |
| **Fonts** | @nuxt/fonts |
| **Analytics** | @nuxt/scripts (Google Analytics) |
| **Package Manager** | pnpm |

---

## 🚦 Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server at http://localhost:3000
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## 📁 Project Structure

```
app/
├── components/     # Reusable UI components
├── composables/    # Nuxt composables
├── layouts/        # Page layouts
├── pages/          # Route pages
└── sections/       # Section components (HomeHero, HomeSkills, etc.)

i18n/locales/       # English & Spanish content (JSON)
shared/types/       # TypeScript interfaces
server/api/         # API endpoints
public/images/      # Static images
```

---

## 🌍 Internationalization

Content is managed in `i18n/locales/`:
- `en.json` — English
- `es.json` — Español

---

## 🚀 Deployment

The site is statically generated and deployed to **GitHub Pages** via GitHub Actions. Deployments are triggered on version tags (`v*`).

```bash
pnpm generate     # Generate static output
```

The output is in `.output/public/` — ready for any static host.

---

## 📄 License

MIT — feel free to use this as inspiration for your own portfolio.
