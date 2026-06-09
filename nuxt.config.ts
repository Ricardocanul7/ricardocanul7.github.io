import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],
  i18n: {
    langDir: 'locales',
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
  modules: ['nuxt-lucide-icons', '@nuxtjs/i18n', '@nuxt/fonts'],
  lucide: {
    namePrefix: 'Icon',
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
    head: {
      title: 'Portfolio',
      meta: [
        { name: 'description', content: 'Ricardo Canul\'s portfolio' },
      ],
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  }
})