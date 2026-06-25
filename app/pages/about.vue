<script setup lang="ts">
usePageSeo({
  title: $t('appHeader.about'),
  description: $t('aboutPage.description'),
  path: '/about',
  keywords: 'Ricardo Canul, About, Full-Stack Developer, Software Engineer, PHP, Python, Web Development, AI, Machine Learning, Web Performance',
})

const { person } = usePersonSchema()

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: person,
      }),
    },
  ],
})
</script>

<template>
  <div>
    <section class="intro-section bg-slate-900 pt-16 pb-10 text-center lg:text-left">
      <LayoutContainer>
        <LayoutRow>
          <LayoutColumn span="8" class="flex flex-col justify-center">
            <div class="content">
              <h1
                class="font-plus-jakarta-sans font-extrabold text-4xl lg:text-5xl text-indigo-100 mb-5"
                v-html="$t('aboutPage.title')"
              />
              <p
                class="font-inter text-lg text-slate-300 mb-5"
                v-html="$t('aboutPage.description')"
              />
            </div>
          </LayoutColumn>
          <LayoutColumn span="4">
            <div class="photo-container mx-auto">
              <NuxtPicture
                format="avif,webp"
                src="./images/about-intro.webp"
                height="396"
                width="396"
                :alt="$t('aboutPage.introImage')"
                sizes="(max-width: 768px) 640px, 396px"
                :img-attrs="{
                  class: 'rounded-lg border-2 border-violet-300/20',
                  fetchpriority: 'high',
                }"
              />
            </div>
          </LayoutColumn>
        </LayoutRow>
      </LayoutContainer>
    </section>

    <section class="interests-section bg-slate-900 pt-16 pb-10 text-center md:text-left">
      <LayoutContainer>
        <h2 class="font-plus-jakarta-sans font-bold text-2xl text-indigo-100 mb-10">
          {{ $t('aboutPage.interestsInTech') }}
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <InterestCard
            accent-color="emerald"
            :category="$t('learning')"
            :title="$t('aboutPage.interestItems.pythonForIA.title')"
            :description="$t('aboutPage.interestItems.pythonForIA.description')"
            :tags="['PyTorch', 'Data Science', 'Machine Learning']"
            class="lg:col-span-2"
          />
          <InterestCard
            accent-color="violet"
            :category="$t('experience')"
            :title="$t('aboutPage.interestItems.migration.title')"
            :description="$t('aboutPage.interestItems.migration.description')"
            :tags="null"
            class="lg:col-span-1"
          />
          <InterestCard
            accent-color="sky"
            :category="$t('approach')"
            :title="$t('aboutPage.interestItems.webPerformance.title')"
            :description="$t('aboutPage.interestItems.webPerformance.description')"
            :tags="null"
            class="lg:col-span-1"
          />
          <InterestCard
            accent-color="indigo"
            :category="$t('philosophy')"
            :title="$t('aboutPage.interestItems.networking.title')"
            :description="$t('aboutPage.interestItems.networking.description')"
            :tags="null"
            class="lg:col-span-2"
          />
        </div>
      </LayoutContainer>
    </section>
  </div>
</template>
