<script setup lang="ts">
interface Props {
  accentColor?: string
  category: string
  title: string
  description: string
  tags: string[] | null
}

const props = withDefaults(defineProps<Props>(), {
  accentColor: 'sky',
})

const { borderClasses, badgeClasses, glowClasses, categoryClasses } = useColorMap(toRef(props, 'accentColor'))
</script>

<template>
  <article
    class="group relative p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/40 border transition-all duration-300 ease-in-out"
    :class="borderClasses"
  >
    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      :class="glowClasses"
      aria-hidden="true"
    />
    <div class="relative z-10">
      <span
        class="text-xs font-bold uppercase tracking-wider mb-3 block"
        :class="categoryClasses"
      >
        {{ category }}
      </span>
      <h3 class="text-xl font-plus-jakarta-sans font-bold text-slate-800 dark:text-slate-100 mb-3">
        {{ title }}
      </h3>
      <p class="text-slate-500 dark:text-slate-400 font-inter text-sm leading-relaxed mb-6">
        {{ description }}
      </p>
      <ul v-if="tags" class="flex flex-wrap gap-2 list-none p-0">
        <li v-for="tag in tags" :key="tag">
          <AppTag :tag="tag" :color="badgeClasses" />
        </li>
      </ul>
    </div>
  </article>
</template>
