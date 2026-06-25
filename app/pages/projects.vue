<script setup lang="ts">
const { locale } = useI18n()
const { data } = await useFetch('/api/projects')

const localizedProjects = computed(() =>
  data.value?.projects?.map(project => ({
    ...project,
    localizedTitle: project.title[locale.value] ?? project.title.en,
    localizedDescription: project.description[locale.value] ?? project.description.en,
  })) ?? []
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
  title: $t('appHeader.projects'),
  description: $t('projectsPage.listingDescription'),
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
        description: $t('projectsPage.listingDescription'),
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
    <section class="projects-header bg-slate-900 pt-16 pb-10 text-center md:text-left">
      <LayoutContainer>
        <div class="content">
          <span class="font-jetbrains-mono text-sm text-violet-300 mb-1.5 uppercase">{{ $t('portfolio') }}</span>
          <h1 class="font-plus-jakarta-sans font-extrabold text-5xl text-indigo-100 mb-5">
            {{ $t('projectsPage.featuredProjects') }}
          </h1>
          <p class="font-inter text-lg text-slate-300 md:max-w-1/2">
            {{ $t('projectsPage.listingDescription') }}
          </p>
        </div>
      </LayoutContainer>
    </section>

    <section class="project-listing-section bg-slate-900 pt-16 pb-10 text-center md:text-left relative">
      <div class="absolute top-1/2 left-1/10 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-400/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <LayoutContainer class="position relative z-10">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 transition-opacity duration-500 ease-in-out"
          :class="allImagesLoaded ? 'opacity-0 absolute pointer-events-none' : 'opacity-100'"
        >
          <ProjectCardSkeleton v-for="(_, index) in data?.projects" :key="'skeleton-' + index" />
        </div>
        <div
          ref="gridRef"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 transition-opacity duration-500 ease-in-out"
          :class="allImagesLoaded ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'"
        >
          <ProjectCard
            v-for="(project, index) in data?.projects"
            :key="index"
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :tags="project.tags"
            :link="project.link"
          />
        </div>
      </LayoutContainer>
    </section>
  </div>
</template>
