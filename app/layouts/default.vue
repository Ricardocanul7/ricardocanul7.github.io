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
    <div class="min-h-screen flex flex-col bg-slate-900">
        <AppHeader />
        <main class="page-content grow">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>