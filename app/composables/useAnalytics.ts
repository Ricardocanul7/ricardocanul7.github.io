/**
 * Composable that centralises Google Analytics consent + loading.
 *
 * Uses `@nuxt/scripts`' built-in `useScriptGoogleAnalytics` so the
 * script is loaded/managed by the framework (no manual DOM injection),
 * and `useScriptTriggerConsent` so loading is deferred until the user
 * accepts cookies.
 */
export const useAnalyticsConsent = () => {
  const config = useRuntimeConfig()
  const gaId = config.public.gaId as string

  // Persist the user's choice in a cookie (SSR-safe, unlike localStorage)
  const consentCookie = useCookie<boolean | null>('analytics-consent', {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
    default: () => null,
  })

  // Whether the user has already made a choice
  const hasDecided = computed(() => consentCookie.value !== null)

  // Whether consent was granted
  const isGranted = computed(() => consentCookie.value === true)

  // Create a consent-based trigger – GA won't load until `.accept()` is called
  const consentTrigger = useScriptTriggerConsent({
    consent: computed(() => consentCookie.value === true),
  })

  // Only initialise GA if the measurement ID is configured
  const ga = gaId
    ? useScriptGoogleAnalytics({
        id: gaId,
        scriptOptions: {
          trigger: consentTrigger,
        },
      })
    : null

  const accept = () => {
    consentCookie.value = true
    consentTrigger.accept()
  }

  const decline = () => {
    consentCookie.value = false
  }

  return {
    /** The raw cookie value (true | false | null) */
    consent: consentCookie,
    /** true once the user clicked accept/decline */
    hasDecided,
    /** true only if the user accepted */
    isGranted,
    /** Call to grant consent and load GA */
    accept,
    /** Call to decline – GA never loads */
    decline,
    /** The GA composable instance (null when no ID is configured) */
    ga,
  }
}
