<script setup>
import { computed } from "vue";
const props = defineProps({
  colorMode: { type: String, required: false, default: "light" },
  title: { type: String, required: false, default: "title" },
  description: { type: String, required: false },
  isPro: { type: Boolean, required: false }
});
const isDark = computed(() => props.colorMode === "dark");
</script>

<template>
  <div
    class="w-full h-full justify-center items-center relative p-10 lg:p-[60px] font-sans"
    :style="{
      backgroundColor: isDark ? '#0f172a' : '#ffffff',
      color: isDark ? '#ffffff' : '#0f172a',
      'font-family': 'Plus Jakarta Sans, sans-serif'
    }">
    <!-- Gradient background -->
    <div class="absolute top-0 left-0 right-0 bottom-0" :style="{
      backgroundImage: `radial-gradient(ellipse 100% 100% at 100% 100%, rgba(99, 102, 241, 0.15) 0%, transparent 60%)`
    }" />
    <div class="absolute top-0 left-0 right-0 bottom-0" :style="{
      backgroundImage: `radial-gradient(ellipse 100% 100% at 0.1% 0.1%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`
    }" />

    <div class="w-full flex-col justify-center relative items-center text-center gap-5 lg:gap-8">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <span
          class="bg-indigo-600 text-white w-16 h-16 rounded-lg flex items-center justify-center font-extrabold text-2xl"
          style="font-family: 'Plus Jakarta Sans', sans-serif;">P</span>
        <span class="text-2xl font-bold tracking-tight" :style="{ color: isDark ? '#ffffff' : '#0f172a', 'font-family': 'Plus Jakarta Sans, sans-serif' }">Portfolio</span>
      </div>

      <!-- Title -->
      <h1
        class="w-full justify-center text-center text-[48px] lg:text-[70px] font-bold m-0 leading-tight max-w-[700px] lg:max-w-[1000px]"
        :style="{
          color: isDark ? '#ffffff' : '#0f172a',
          'font-family': 'Plus Jakarta Sans, sans-serif',
          display: 'block',
          lineClamp: 3,
          textOverflow: 'ellipsis',
          textWrap: 'balance'
        }">
        {{ title }}
      </h1>

      <!-- Description -->
      <p v-if="description"
        class="text-[24px] lg:text-[32px] max-w-[650px] lg:max-w-[900px] leading-relaxed"
        :style="{
          color: isDark ? '#94a3b8' : '#64748b',
          'font-family': 'Plus Jakarta Sans, sans-serif',
          display: 'block',
          lineClamp: 2,
          textOverflow: 'ellipsis'
        }">
        {{ description }}
      </p>
    </div>
  </div>
</template>
