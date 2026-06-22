# 🤖 Agents.md - Nuxt 4 Portfolio Project

## 📋 Overview

This is a **Nuxt 4 personal portfolio website** for Ricardo Canul, a Full-Stack Software Developer. The project serves as a professional portfolio showcasing experience in PHP, Python, and modern web development.

---

## 🛠️ Key Modules & Technologies

### Nuxt Core Features
| Module | Purpose |
|--------|---------|
| `nuxt-lucide-icons` | Icon library (prefixed as `Icon`) |
| `@nuxtjs/i18n` | Internationalization (EN/ES) |
| `@nuxt/fonts` | Self-hosted fonts |
| `@nuxt/icon` | Component-based icon system |
| `@nuxt/image` | Image optimization & CDN handling |
| `@nuxtjs/sitemap` | SEO sitemap generation |
| `nuxt-og-image` | Automatic social sharing image generation |
| `@nuxt/scripts` | Google Analytics integration |
| `@nuxt/eslint` | ESLint configuration |

---

## 📁 Project Structure

```
ricardocanul7.github.io/
├── AGENTS.md              # This file - agent guidelines
├── nuxt.config.ts         # Nuxt configuration
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript config
│
├── app/                   # Nuxt application root
│   ├── app.vue            # Root layout component
│   ├── app.config.ts      # App runtime configuration
│   │
│   ├── components/        # Reusable components
│   │   ├── AppBadge.vue
│   │   ├── AppFooter.vue
│   │   ├── AppHeader.vue
│   │   ├── ProjectCard.vue
│   │   ├── SkillCard.vue
│   │   ├── WorkExperience.vue
│   │   └── layout/        # Layout components (Row, Column, Container)
│   │
│   ├── composables/       # Nuxt composables
│   │   └── useExperienceData.ts
│   │
│   ├── layouts/           # Page layouts
│   │   └── default.vue
│   │
│   ├── pages/             # Route pages
│   │   ├── index.vue      # Home page
│   │   ├── about.vue      # About page
│   │   ├── experience.vue # Experience page
│   │   └── projects.vue   # Projects page
│   │
│   └── sections/          # Section components (HomeAbout, HomeHero, HomeSkills)
│
├── i18n/                  # Internationalization
│   └── locales/
│       ├── en.json        # English content
│       └── es.json        # Spanish content
│
├── public/                # Static assets
│   ├── images/            # Portfolio images
│   ├── favicon.ico
│   └── robots.txt
│
├── server/                # Server routes (API endpoints)
│   └── api/
│       └── projects.ts    # Projects API endpoint
│
└── shared/                # Shared types
    └── types/
        ├── experience.ts
        └── projects.ts
```

---

## 🚀 Common Workflows

### Development
```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npx tsc --noEmit
```

### Component Creation Pattern
1. Create new component in `app/components/`
2. Use Nuxt's auto-import to reference without explicit imports
3. For layout components, use `app/components/layout/` (Row, Column, Container)

### Page Routing
- **Home**: `app/pages/index.vue` or `/`
- **About**: `app/pages/about.vue`
- **Experience**: `app/pages/experience.vue`
- **Projects**: `app/pages/projects.vue`

---

## 🌍 Internationalization (i18n)

### Locale Configuration
```javascript
// i18n setup in nuxt.config.ts
{
  baseUrl: 'https://ricardocanul7.github.io',
  langDir: 'locales',
  defaultLocale: 'en',
  locales: [
    { code: 'en', iso: 'en-US', language: 'en-US', name: 'English', file: 'en.json' },
    { code: 'es', iso: 'es-ES', language: 'es-ES', name: 'Español', file: 'es.json' }
  ]
}
```

### Adding New Content
1. Edit `i18n/locales/en.json` for English content
2. Edit `i18n/locales/es.json` for Spanish content
3. Changes are auto-prerendered via nitro prerender

---

## 📱 SEO Features

### Sitemap Generation
The project uses `@nuxtjs/sitemap` module to automatically generate a sitemap at `/sitemap.xml`.

### OG (Open Graph) Images
Use `nuxt-og-image` for automatic social sharing images:
```javascript
// Automatic image generation config in nuxt.config.ts
{
  ogImage: {
    defaults: {
      width: 1200,
      height: 630,
    },
    zeroRuntime: true, // Generate at build time
  }
}
```

### Meta Tags
All Open Graph and Twitter meta tags are configured in `nuxt.config.ts` under `app.head`.

---

## 🎨 Styling

### CSS Architecture
```
app/assets/
├── css/
│   └── main.css          # Main CSS entry
└── scss/
    └── main.scss         # SCSS with variables/mixins
```

### Tailwind CSS
Tailwind is configured as a Vite plugin. It's automatically imported via the CSS file.

---

## 🔧 Server API Endpoints

### Projects Endpoint
```typescript
// server/api/projects.ts
// Used by client-side code to fetch projects data
export default defineEventHandler(async () => {
  // Projects data returned here
});
```

---

## 📊 Analytics

### Google Analytics
Configured via `@nuxt/scripts` module:
- Consent mode enabled (analytics_storage defaults to denied)
- Triggered on NuxtReady
- Proxy disabled (direct to GA4)

See `runtimeConfig.public.gaId` for the tracking ID.

---

## 🚦 Best Practices

### When Adding Components
1. **Reusable components**: Place in `app/components/`
2. **Layout containers**: Use `app/components/layout/` (Row, Column, Container)
3. **Section blocks**: Place in `app/components/sections/`
4. **Pages**: Always create in `app/pages/` with corresponding route

### When Modifying Content
- Edit JSON files in `i18n/locales/` for text content
- Update TypeScript types in `shared/types/` for data structures
- Modify `nuxt.config.ts` only for configuration changes

### For Production Deployment
```bash
# 1. Build the project
npm run build

# 2. Preview to verify
npm run preview

# 3. Deploy the .output directory contents
```

---

## 📦 Key Dependencies

```json
{
  "devDependencies": {
    "@tailwindcss/vite": "Tailwind Vite plugin",
    "vue": "Vue 3 core",
    "typescript": "TypeScript support"
  },
  "dependencies": {
    "@nuxt/image": "Image optimization",
    "@nuxt/fonts": "Font management",
    "@nuxt/i18n": "Internationalization",
    "@nuxt/icon": "Icon components",
    "@nuxt/lucide-icons": "Lucide icons",
    "@nuxt/scripts": "Analytics integration",
    "@nuxt/sitemap": "Sitemap generation",
    "@vite-plugin-pwa": "PWA features (if enabled)",
    "nuxt-og-image": "OG image generation"
  }
}
```

---

## 🔍 Quick Reference Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `nuxt prepare` | Prepare for SSR/SSG |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | TypeScript type check |

---

## 📝 License

This project is a personal portfolio website. No specific license restrictions apply to viewing or modifying this AGENTS.md file.