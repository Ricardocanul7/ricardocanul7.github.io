<script setup lang="ts">
const colorMode = useColorMode()
const isDark = ref(true)

const observer = ref()

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')

  observer.value = new MutationObserver(() => {
    isDark.value = document.documentElement.classList.contains('dark')
  })
  observer.value.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})

const toggle = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    :aria-label="isDark ? $t('themeToggle.light') : $t('themeToggle.dark')"
    class="relative w-9 h-9 rounded-full flex items-center justify-center bg-slate-200/50 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 group overflow-hidden"
    @click="toggle"
  >
    <span
      :class="[
        'absolute inset-0 flex items-center justify-center transition-all duration-300',
        isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
      ]"
    >
      <Icon name="lucide:moon" class="w-4 h-4 text-slate-200 dark:text-indigo-300" />
    </span>
    <span
      :class="[
        'absolute inset-0 flex items-center justify-center transition-all duration-300',
        isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
      ]"
    >
      <Icon name="lucide:sun" class="w-4 h-4" />
    </span>
  </button>
</template>
