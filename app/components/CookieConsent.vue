<script setup lang="ts">
const { hasDecided, accept, decline } = useAnalyticsConsent()

// Show the banner only when the user hasn't decided yet
const isVisible = ref(false)

onMounted(() => {
  if (!hasDecided.value) {
    isVisible.value = true
  }
})

const acceptCookies = () => {
  accept()
  isVisible.value = false
}

const declineCookies = () => {
  decline()
  isVisible.value = false
}

</script>

<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="transform translate-y-full opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-full opacity-0"
  >
    <div
      v-if="isVisible"
      class="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-800 shadow-2xl"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-indigo-100 mb-2">
              {{ $t('cookieConsent.title') }}
            </h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              {{ $t('cookieConsent.description') }}
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              @click="declineCookies"
              class="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
            >
              {{ $t('cookieConsent.decline') }}
            </button>
            <button
              @click="acceptCookies"
              class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
            >
              {{ $t('cookieConsent.accept') }}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  </Transition>
</template>
