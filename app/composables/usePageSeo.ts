interface UsePageSeoOptions {
  title: string
  description: string
  path: string
  keywords: string
  ogTitle?: string
  ogDescription?: string
  ogImageTitle?: string
}

export function usePageSeo(options: UsePageSeoOptions) {
  const {
    title,
    description,
    path,
    keywords,
    ogTitle,
    ogDescription,
    ogImageTitle,
  } = options

  const resolvedOgTitle = ogTitle || title
  const resolvedOgDescription = ogDescription || description

  useSeoMeta({
    title,
    description,
    keywords,
    author: 'Ricardo Canul',
    ogTitle: resolvedOgTitle,
    ogDescription: resolvedOgDescription,
    ogType: 'website',
    ogUrl: `https://ricardocanul7.github.io${path}`,
    ogImageAlt: 'Ricardo Canul - Full-Stack Software Developer',
    twitterCard: 'summary_large_image',
    twitterTitle: resolvedOgTitle,
    twitterDescription: resolvedOgDescription,
  })

  defineOgImage('NuxtSeo.satori', {
    title: ogImageTitle || `${resolvedOgTitle} - Ricardo Canul`,
    description: resolvedOgDescription,
    colorMode: 'dark',
  })
}
