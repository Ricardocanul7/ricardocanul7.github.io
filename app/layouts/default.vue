<script setup lang="ts">
const head = useLocaleHead({
  dir: true,
  lang: true,
  seo: true
})

useHead(() => ({
  htmlAttrs: {
    lang: head.value.htmlAttrs?.lang || 'en',
    dir: (head.value.htmlAttrs?.dir || 'ltr') as 'ltr' | 'rtl' | 'auto'
  },
  link: head.value.link || [],
  meta: head.value.meta || []
}))
</script>

<template>
    <div class="min-h-screen flex flex-col bg-white dark:bg-slate-900">
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
            {{ $t('skipToContent') }}
        </a>
        <AppHeader />
        <main id="main-content" class="page-content grow flex flex-col">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>