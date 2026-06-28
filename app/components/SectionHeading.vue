<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  id?: string
}>()
</script>

<template>
  <div class="text-violet-300 flex items-center gap-3 px-4 md:px-10">
    <Icon :name="icon" aria-hidden="true" />
    <h2 :id="id" class="font-plus-jakarta-sans font-bold text-2xl">
      {{ title }}
    </h2>
  </div>
</template>
