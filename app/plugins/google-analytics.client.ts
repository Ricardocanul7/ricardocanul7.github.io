// Type declarations for Google Analytics
declare global {
  interface Window {
    dataLayer?: any[]
    gtag?: (...args: any[]) => void
  }
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const gaId = config.public.gaId

  if (!gaId) {
    if (import.meta.dev) {
      console.warn('Google Analytics ID is missing. Set NUXT_GA_ID environment variable to enable analytics.')
    }
    return
  }

  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  window.gtag = function() {
    window.dataLayer!.push(arguments)
  }

  // Set default consent to denied
  window.gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied'
  })

  // Load Google Analytics script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
  script.onerror = () => {
    if (import.meta.dev) {
      console.error('Failed to load Google Analytics script')
    }
  }
  document.head.appendChild(script)

  // Configure Google Analytics
  window.gtag('js', new Date())
  window.gtag('config', gaId, {
    'anonymize_ip': true,
    'send_page_view': false // We'll send page views manually after consent
  })
})
