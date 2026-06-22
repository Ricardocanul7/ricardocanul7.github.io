<script setup lang="ts">
const { t } = useI18n()
const siteName = computed(() => t('siteName'))

useHead({
  titleTemplate: () => `%s | ${siteName.value}`,
  meta: [
    { property: 'og:site_name', content: siteName },
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
    <CookieConsent />
  </NuxtLayout>
</template>
