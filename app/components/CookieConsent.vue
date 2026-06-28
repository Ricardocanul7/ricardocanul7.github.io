<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const { consent } = useScriptGoogleAnalytics()

const consentCookie = useCookie<'accepted' | 'declined' | null>('analytics-consent', {
  maxAge: 60 * 60 * 24 * 365,
  sameSite: 'lax',
  default: () => null,
})

const isVisible = ref(false)
const acceptButtonRef = ref<HTMLButtonElement | null>(null)
const dialogRef = ref<HTMLDivElement | null>(null)

const grantGA = () => {
  consent?.update({
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  })
}

const acceptCookies = () => {
  consentCookie.value = 'accepted'
  grantGA()
  isVisible.value = false
}

const declineCookies = () => {
  consentCookie.value = 'declined'
  isVisible.value = false
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    declineCookies()
    return
  }
  if (e.key === 'Tab' && dialogRef.value) {
    const focusable = dialogRef.value.querySelectorAll<HTMLElement>('button')
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }
}

onMounted(() => {
  if (consentCookie.value === null) {
    isVisible.value = true
    nextTick(() => acceptButtonRef.value?.focus())
    document.addEventListener('keydown', handleKeydown)
  } else if (consentCookie.value === 'accepted') {
    grantGA()
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
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
      ref="dialogRef"
      role="alertdialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      class="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-2xl"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex-1">
            <p id="cookie-title" class="text-lg font-semibold text-slate-800 dark:text-indigo-100 mb-2">
              {{ $t('cookieConsent.title') }}
            </p>
            <p id="cookie-desc" class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {{ $t('cookieConsent.description') }}
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-300 dark:border-slate-700"
              @click="declineCookies"
            >
              {{ $t('cookieConsent.decline') }}
            </button>
            <button
              ref="acceptButtonRef"
              class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
              @click="acceptCookies"
            >
              {{ $t('cookieConsent.accept') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
