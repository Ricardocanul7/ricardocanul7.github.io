type AccentColor = 'violet' | 'emerald' | 'amber' | 'sky' | 'indigo'

interface ColorVariant {
  border: string
  badge: string
  glow: string
  icon: string
  category: string
  title: string
  cta: string
}

const colorMap: Record<AccentColor, ColorVariant> = {
  violet: {
    border: 'hover:border-violet-500/50',
    badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300 dark:border-violet-500/20 bg-violet-500/10 text-violet-700 border-violet-500/30',
    glow: 'bg-gradient-to-br from-violet-500/5 to-transparent dark:from-violet-500/5 from-violet-500/10',
    icon: 'text-violet-400 dark:text-violet-400 text-violet-600',
    category: 'text-violet-400 dark:text-violet-400 text-violet-600',
    title: 'group-hover:text-violet-400 dark:group-hover:text-violet-400 group-hover:text-violet-600',
    cta: 'text-violet-300 hover:bg-violet-300 hover:text-slate-900 border-violet-300/50 dark:text-violet-300 dark:hover:bg-violet-300 dark:hover:text-slate-900 dark:border-violet-300/50 text-violet-600 hover:bg-violet-600 hover:text-white border-violet-600/50',
  },
  emerald: {
    border: 'hover:border-emerald-500/50',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20 bg-emerald-500/10 text-emerald-700 border-emerald-500/30',
    glow: 'bg-gradient-to-br from-emerald-500/5 to-transparent dark:from-emerald-500/5 from-emerald-500/10',
    icon: 'text-emerald-400 dark:text-emerald-400 text-emerald-600',
    category: 'text-emerald-400 dark:text-emerald-400 text-emerald-600',
    title: 'group-hover:text-emerald-400 dark:group-hover:text-emerald-400 group-hover:text-emerald-600',
    cta: 'text-emerald-300 hover:bg-emerald-300 hover:text-slate-900 border-emerald-300/50 dark:text-emerald-300 dark:hover:bg-emerald-300 dark:hover:text-slate-900 dark:border-emerald-300/50 text-emerald-600 hover:bg-emerald-600 hover:text-white border-emerald-600/50',
  },
  amber: {
    border: 'hover:border-amber-500/50',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20 bg-amber-500/10 text-amber-700 border-amber-500/30',
    glow: 'bg-gradient-to-br from-amber-500/5 to-transparent dark:from-amber-500/5 from-amber-500/10',
    icon: 'text-amber-400 dark:text-amber-400 text-amber-600',
    category: 'text-amber-400 dark:text-amber-400 text-amber-600',
    title: 'group-hover:text-amber-400 dark:group-hover:text-amber-400 group-hover:text-amber-600',
    cta: 'text-amber-300 hover:bg-amber-300 hover:text-slate-900 border-amber-300/50 dark:text-amber-300 dark:hover:bg-amber-300 dark:hover:text-slate-900 dark:border-amber-300/50 text-amber-600 hover:bg-amber-600 hover:text-white border-amber-600/50',
  },
  sky: {
    border: 'hover:border-sky-500/50',
    badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-500/20 bg-sky-500/10 text-sky-700 border-sky-500/30',
    glow: 'bg-gradient-to-br from-sky-500/5 to-transparent dark:from-sky-500/5 from-sky-500/10',
    icon: 'text-sky-400 dark:text-sky-400 text-sky-600',
    category: 'text-sky-400 dark:text-sky-400 text-sky-600',
    title: 'group-hover:text-sky-400 dark:group-hover:text-sky-400 group-hover:text-sky-600',
    cta: 'text-sky-300 hover:bg-sky-300 hover:text-slate-900 border-sky-300/50 dark:text-sky-300 dark:hover:bg-sky-300 dark:hover:text-slate-900 dark:border-sky-300/50 text-sky-600 hover:bg-sky-600 hover:text-white border-sky-600/50',
  },
  indigo: {
    border: 'hover:border-indigo-500/50',
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20 bg-indigo-500/10 text-indigo-700 border-indigo-500/30',
    glow: 'bg-gradient-to-br from-indigo-500/5 to-transparent dark:from-indigo-500/5 from-indigo-500/10',
    icon: 'text-indigo-400 dark:text-indigo-400 text-indigo-600',
    category: 'text-indigo-400 dark:text-indigo-400 text-indigo-600',
    title: 'group-hover:text-indigo-400 dark:group-hover:text-indigo-400 group-hover:text-indigo-600',
    cta: 'text-indigo-300 hover:bg-indigo-300 hover:text-slate-900 border-indigo-300/50 dark:text-indigo-300 dark:hover:bg-indigo-300 dark:hover:text-slate-900 dark:border-indigo-300/50 text-indigo-600 hover:bg-indigo-600 hover:text-white border-indigo-600/50',
  },
}

export function useColorMap(accentColor: MaybeRef<string | undefined>, fallback: AccentColor = 'sky') {
  const key = computed(() => (toValue(accentColor) || fallback) as AccentColor)
  const activeColor = computed(() => colorMap[key.value] || colorMap[fallback])
  const colorName = computed(() => key.value)

  return {
    activeColor,
    colorName,
    borderClasses: computed(() => `border-slate-200 dark:border-slate-700 ${activeColor.value.border}`),
    badgeClasses: computed(() => activeColor.value.badge),
    glowClasses: computed(() => activeColor.value.glow),
    iconClasses: computed(() => activeColor.value.icon),
    categoryClasses: computed(() => activeColor.value.category),
    titleClasses: computed(() => `font-plus-jakarta-sans text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 transition-colors ${activeColor.value.title}`),
    ctaClasses: computed(() => `flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-colors font-inter text-xs font-semibold ${activeColor.value.cta}`),
  }
}
