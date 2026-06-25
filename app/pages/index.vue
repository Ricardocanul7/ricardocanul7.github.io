<script setup lang="ts">

usePageSeo({
  title: $t('appHeader.home'),
  description: $t('homeHero.description'),
  path: '/',
  keywords: 'Ricardo Canul, Full-Stack Developer, PHP Developer, Python Developer, Web Development, Software Engineer, Laravel, Django, Shopware, Pimcore',
  ogImageTitle: 'Ricardo Canul - Full-Stack Software Developer',
})

const { person } = usePersonSchema()

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        ...person,
      }),
    },
  ],
})
</script>

<template>
  <div>
    <SectionsHomeHero />
    <SectionsHomeAbout />
    <SectionsHomeSkills />
  </div>
</template>
