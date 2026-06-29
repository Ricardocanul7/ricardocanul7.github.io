<script setup lang="ts">
const { t, locale } = useI18n()
const { data } = await useFetch('/api/projects')

const localizedProjects = computed(() =>
  (data.value?.projects ?? [])
    .sort((a, b) => {
      if (a.active && !b.active) return -1
      if (!a.active && b.active) return 1
      return 0
    })
    .map(project => ({
      ...project,
      localizedTitle: project.title[locale.value] ?? project.title.en,
      localizedDescription: project.description[locale.value] ?? project.description.en,
    }))
)

const allImagesLoaded = ref(false)
const gridRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()
  const container = gridRef.value
  if (!container) { allImagesLoaded.value = true; return }
  const images = container.querySelectorAll('img')
  if (images.length === 0) { allImagesLoaded.value = true; return }
  let loadedCount = 0
  const totalImages = images.length
  const checkAllLoaded = () => {
    loadedCount++
    if (loadedCount >= totalImages) { allImagesLoaded.value = true }
  }
  images.forEach((img) => {
    if (img.complete) { checkAllLoaded() }
    else {
      img.addEventListener('load', checkAllLoaded, { once: true })
      img.addEventListener('error', checkAllLoaded, { once: true })
    }
  })
})

usePageSeo({
  title: t('appHeader.projects'),
  description: t('projectsPage.listingDescription'),
  path: '/projects',
  keywords: 'Ricardo Canul, Projects, Portfolio, Web Development, Full-Stack Developer, PHP, Python, Laravel, Django, Shopware, Pimcore, Web Applications',
})

const { person } = usePersonSchema()

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Ricardo Canul - Projects',
        description: t('projectsPage.listingDescription'),
        url: 'https://ricardocanul7.github.io/projects',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: localizedProjects.value.map((project, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'SoftwareSourceCode',
              name: project.localizedTitle,
              description: project.localizedDescription,
              url: project.link,
              programmingLanguage: project.tags,
              author: person,
            },
          })) || [],
        },
      }),
    },
  ],
})
</script>

<template>
  <div>
    <section class="projects-header bg-slate-100 dark:bg-slate-900 pt-16 pb-10 text-center md:text-left">
      <LayoutContainer>
        <div class="content">
          <span class="font-jetbrains-mono text-sm text-sky-600 dark:text-sky-300 mb-1.5 uppercase">{{ $t('portfolio') }}</span>
          <h1 class="font-plus-jakarta-sans font-extrabold text-5xl text-slate-800 dark:text-indigo-100 mb-5">
            {{ $t('projectsPage.featuredProjects') }}
          </h1>
          <p class="font-inter text-lg text-slate-600 dark:text-slate-300 md:max-w-1/2">
            {{ $t('projectsPage.listingDescription') }}
          </p>
        </div>
      </LayoutContainer>
    </section>

    <section class="project-listing-section bg-slate-100 dark:bg-slate-900 pb-10 text-center md:text-left relative">
      <div class="absolute top-1/2 left-1/10 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-400/10 rounded-full blur-[100px] pointer-events-none z-0" aria-hidden="true" />
      <LayoutContainer class="relative z-10">
        <ul
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500 ease-in-out list-none p-0"
          :class="allImagesLoaded ? 'opacity-0 absolute pointer-events-none' : 'opacity-100'"
        >
          <li v-for="(_, index) in data?.projects" :key="'skeleton-' + index" class="contents">
            <ProjectCardSkeleton />
          </li>
        </ul>
        <ul
          ref="gridRef"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500 ease-in-out list-none p-0"
          :class="allImagesLoaded ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'"
        >
          <li
            v-for="(project, index) in localizedProjects"
            :key="index"
            class="contents"
          >
            <ProjectCard
              :title="project.title"
              :description="project.description"
              :image="project.image"
              :tags="project.tags"
              :link="project.link"
              :active="project.active"
            />
          </li>
        </ul>
      </LayoutContainer>
    </section>
  </div>
</template>
