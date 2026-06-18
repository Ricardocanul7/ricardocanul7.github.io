import tailwindcss from "@tailwindcss/vite";

const baseURL = '/';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],
  i18n: {
    baseUrl: 'https://ricardocanul7.github.io',
    langDir: 'locales',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', iso: 'es-ES', language: 'es-ES', name: 'Español', file: 'es.json' },
    ],
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    }
  },
  vite: {
    plugins: [
      tailwindcss()
    ],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },
  modules: ['nuxt-lucide-icons', '@nuxtjs/i18n', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxtjs/sitemap', 'nuxt-og-image', '@nuxt/scripts'],
  lucide: {
    namePrefix: 'Icon',
  },
  ogImage: {
    defaults: {
      width: 1200,
      height: 630,
    },
    zeroRuntime: true,
  },
  runtimeConfig: {
    public: {
      gaId: ''
    }
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? baseURL : '/',
    head: {
      title: 'Ricardo Canul - Full-Stack Software Developer',
      meta: [
        { name: 'description', content: 'Ricardo Canul - Full-Stack Software Engineer specializing in PHP, Python, and modern web development. Building robust and scalable digital ecosystems with 4+ years of experience.' },
        { name: 'keywords', content: 'Ricardo Canul, Full-Stack Developer, PHP Developer, Python Developer, Web Development, Software Engineer, Laravel, Django, Shopware, Pimcore' },
        { name: 'author', content: 'Ricardo Canul' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Ricardo Canul Portfolio' },
        { property: 'og:title', content: 'Ricardo Canul - Full-Stack Software Developer' },
        { property: 'og:description', content: 'Full-Stack Software Engineer specializing in PHP, Python, and modern web development. Building robust and scalable digital ecosystems with 4+ years of experience.' },
        { property: 'og:url', content: 'https://ricardocanul7.github.io' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Ricardo Canul - Full-Stack Software Developer' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Ricardo Canul - Full-Stack Software Developer' },
        { name: 'twitter:description', content: 'Full-Stack Software Engineer specializing in PHP, Python, and modern web development. Building robust and scalable digital ecosystems with 4+ years of experience.' },
        { name: 'twitter:creator', content: '@ricardocanul7' },
      ],
      htmlAttrs: { lang: 'en' },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: process.env.NODE_ENV === 'production' ? baseURL + 'favicon.ico' : '/favicon.ico'
        },
        {
          rel: 'canonical',
          href: 'https://ricardocanul7.github.io'
        },
      ],
    },
  },
  scripts: {
    registry: {
      googleAnalytics: { trigger: 'onNuxtReady' },
    }
  }
})