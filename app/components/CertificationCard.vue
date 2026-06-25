<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  institution: string
  year: string
}>()
</script>

<template>
  <div class="mb-8 bg-slate-800/50 p-6 rounded-xl shadow-lg border border-slate-700/50 flex items-center gap-5">
    <div class="icon-container text-violet-300 text-4xl">
      <Icon :name="icon" />
    </div>
    <div>
      <h3 class="text-slate-100 font-plus-jakarta-sans font-bold text-base mt-1">
        {{ title }}
      </h3>
      <p class="text-slate-400 font-inter italic">{{ institution }} &bull; {{ year }}</p>
    </div>
  </div>
</template>
