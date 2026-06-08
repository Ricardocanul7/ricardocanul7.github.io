import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.json' },
    ],
  },
  vite: {
    plugins: [
      tailwindcss()
    ],
  },
  modules: [
    'nuxt-lucide-icons',
    '@nuxtjs/i18n'
  ],
  lucide: {
    namePrefix: 'Icon',
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  }
})