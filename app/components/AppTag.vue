<script setup lang="ts">
defineProps<{
  tag: string
  color?: string
}>()
</script>

<template>
  <span class="px-3 py-1 rounded-full text-xs font-medium border" :class="color">
    {{ tag }}
  </span>
</template>
