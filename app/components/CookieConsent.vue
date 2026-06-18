<script setup lang="ts">
const consent = ref<'granted' | 'denied' | null>(null)
const isVisible = ref(false)

// Declare gtag on window
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

onMounted(() => {
  // Check if consent was already given
  try {
    const savedConsent = localStorage.getItem('cookie-consent')
    if (savedConsent) {
      consent.value = savedConsent as 'granted' | 'denied'
      updateConsentMode(consent.value)
    } else {
      // Show banner for all users
      isVisible.value = true
    }
  } catch (error) {
    // If localStorage is not available, show banner
    isVisible.value = true
  }
})


const updateConsentMode = (consentValue: 'granted' | 'denied') => {
  if (import.meta.client && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': consentValue,
      'ad_storage': consentValue,
      'ad_user_data': consentValue,
      'ad_personalization': consentValue
    })
    
    // If consent is granted, send initial page view
    if (consentValue === 'granted') {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href
      })
    }
  }
}

const acceptCookies = () => {
  consent.value = 'granted'
  try {
    localStorage.setItem('cookie-consent', 'granted')
  } catch (error) {
    // Ignore localStorage errors
  }
  updateConsentMode('granted')
  isVisible.value = false
}

const declineCookies = () => {
  consent.value = 'denied'
  try {
    localStorage.setItem('cookie-consent', 'denied')
  } catch (error) {
    // Ignore localStorage errors
  }
  updateConsentMode('denied')
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
