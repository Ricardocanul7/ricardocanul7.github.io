<script setup lang="ts">

interface Props {
  accentColor?: string
  title: LocalizedString
  description: LocalizedString
  image: string
  tags: string[]
  link: string
  active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  accentColor: 'sky',
  active: true,
})

const { locale } = useI18n()
const { borderClasses, badgeClasses, glowClasses, titleClasses, ctaClasses } = useColorMap(toRef(props, 'accentColor'))

const localizedTitle = computed(() => props.title[locale.value] ?? props.title.en)
const localizedDescription = computed(() => props.description[locale.value] ?? props.description.en)
</script>

<template>
  <article
    class="group relative rounded-2xl bg-slate-100 dark:bg-slate-800/40 border overflow-hidden transition-all duration-300 ease-in-out flex flex-col h-full"
    :class="borderClasses"
  >
    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      :class="glowClasses"
      aria-hidden="true"
    />
    <div class="aspect-video overflow-hidden bg-slate-200 dark:bg-slate-950 relative z-10">
      <NuxtPicture
        format="avif,webp"
        :src="image"
        height="270"
        width="480"
        :img-attrs="{
          alt: localizedTitle,
          loading: 'eager',
          class: 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500',
        }"
      />
    </div>
    <div class="p-6 flex flex-col grow relative z-10">
      <ul class="flex flex-wrap gap-2 mb-4 list-none p-0">
        <li v-for="tag in tags" :key="tag">
          <AppTag :tag="tag" :color="badgeClasses" />
        </li>
      </ul>
      <h2 :class="titleClasses">
        {{ localizedTitle }}
      </h2>
      <p class="font-inter text-base text-slate-500 dark:text-slate-400 mb-6 grow">
        {{ localizedDescription }}
      </p>
      <a
        v-if="active"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="$t('projectsPage.viewProject') + ': ' + localizedTitle"
        :class="ctaClasses"
      >
        {{ $t('projectsPage.viewProject') || 'View Project' }}
        <Icon
          name="heroicons:arrow-right-20-solid"
          class="transform group-hover:translate-x-1 transition-transform"
        />
      </a>
      <span
        v-else
        aria-disabled="true"
        class="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-colors font-inter text-xs font-semibold border-slate-300 dark:border-slate-600 text-slate-400 dark:text-slate-500 opacity-60 cursor-not-allowed"
      >
        {{ $t('projectsPage.notLiveMessage') }}
      </span>
    </div>
  </article>
</template>
