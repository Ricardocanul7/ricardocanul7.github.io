<script setup lang="ts">
useSeoMeta({
  title: 'Ricardo Canul - Full-Stack Software Developer',
  description: $t('homeHero.description'),
  keywords: 'Ricardo Canul, Full-Stack Developer, PHP Developer, Python Developer, Web Development, Software Engineer, Laravel, Django, Shopware, Pimcore',
  author: 'Ricardo Canul',
  ogTitle: 'Ricardo Canul - Full-Stack Software Developer',
  ogDescription: $t('homeHero.description'),
  ogType: 'website',
  ogUrl: 'https://ricardocanul7.github.io',
  ogImageAlt: 'Ricardo Canul - Full-Stack Software Developer',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Ricardo Canul - Full-Stack Software Developer',
  twitterDescription: $t('homeHero.description'),
})

defineOgImage('NuxtSeo.satori', {
  title: 'Ricardo Canul - Full-Stack Software Developer',
  description: $t('homeHero.description'),
  colorMode: 'dark'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Ricardo Canul',
        url: 'https://ricardocanul7.github.io',
        image: 'https://ricardocanul7.github.io/og-image.jpg',
        sameAs: [
          'https://github.com/ricardocanul7',
          'https://linkedin.com/in/ricardocanul7'
        ],
        jobTitle: 'Full-Stack Software Engineer',
        description: 'Full-Stack Software Engineer specializing in PHP, Python, and modern web development. Building robust and scalable digital ecosystems with 4+ years of experience.',
        knowsAbout: [
          'PHP',
          'Python',
          'Laravel',
          'Django',
          'Shopware',
          'Pimcore',
          'Web Development',
          'Full-Stack Development',
          'API Design',
          'Docker',
          'CI/CD',
          'PostgreSQL',
          'Redis'
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'Poland'
        }
      })
    }
  ]
})
</script>

<template>
  <div>
    <SectionsHomeHero />
    <SectionsHomeAbout />
    <SectionsHomeSkills />
  </div>
</template>