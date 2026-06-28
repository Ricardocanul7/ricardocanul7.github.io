<script setup lang="ts">
defineProps<{
  degree: string
  institution: string
  dates: string
}>()
</script>

<template>
  <article class="mb-8 bg-slate-800/50 p-6 rounded-xl shadow-lg border border-slate-700/50">
    <h3 class="text-slate-100 font-inter text-base font-bold">{{ degree }}</h3>
    <p class="text-slate-400 font-inter text-base mt-1">{{ institution }}</p>
    <time class="text-emerald-300 font-mono text-sm">{{ dates }}</time>
  </article>
</template>
