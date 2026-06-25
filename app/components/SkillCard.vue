<script setup lang="ts">
interface Props {
  accentColor?: string
  icon: string
  title: string
  description: string
  tags: string[]
  expertise: string | null
}

const props = withDefaults(defineProps<Props>(), {
  accentColor: 'violet',
})

const { borderClasses, badgeClasses, glowClasses, iconClasses } = useColorMap(toRef(props, 'accentColor'))
</script>

<template>
  <div
    class="group relative p-6 rounded-2xl bg-slate-800/40 border transition-all duration-300 ease-in-out flex flex-col gap-4"
    :class="borderClasses"
  >
    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      :class="glowClasses"
    />
    <div class="relative z-10 flex flex-col flex-1">
      <div class="flex justify-between items-start">
        <div class="text-3xl" :class="iconClasses">
          <Icon :name="icon" />
        </div>
        <span
          v-if="expertise"
          class="font-jetbrains-mono text-sm font-bold px-2 py-1 text-emerald-300"
        >
          {{ expertise }}
        </span>
      </div>
      <h3 class="font-plus-jakarta-sans font-bold text-2xl text-indigo-100 leading-tight">
        {{ title }}
      </h3>
      <p class="font-inter text-sm text-slate-300 line-clamp-3">
        {{ description }}
      </p>
      <div class="flex flex-wrap gap-2 mt-auto pt-4">
        <AppTag v-for="tag in tags" :key="tag" :tag="tag" :color="badgeClasses" />
      </div>
    </div>
  </div>
</template>
