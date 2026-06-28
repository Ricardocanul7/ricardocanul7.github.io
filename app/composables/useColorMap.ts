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
    badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    glow: 'bg-gradient-to-br from-violet-500/5 to-transparent',
    icon: 'text-violet-400',
    category: 'text-violet-400',
    title: 'group-hover:text-violet-400',
    cta: 'text-violet-300 hover:bg-violet-300 hover:text-slate-900 border-violet-300/50',
  },
  emerald: {
    border: 'hover:border-emerald-500/50',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    glow: 'bg-gradient-to-br from-emerald-500/5 to-transparent',
    icon: 'text-emerald-400',
    category: 'text-emerald-400',
    title: 'group-hover:text-emerald-400',
    cta: 'text-emerald-300 hover:bg-emerald-300 hover:text-slate-900 border-emerald-300/50',
  },
  amber: {
    border: 'hover:border-amber-500/50',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    glow: 'bg-gradient-to-br from-amber-500/5 to-transparent',
    icon: 'text-amber-400',
    category: 'text-amber-400',
    title: 'group-hover:text-amber-400',
    cta: 'text-amber-300 hover:bg-amber-300 hover:text-slate-900 border-amber-300/50',
  },
  sky: {
    border: 'hover:border-sky-500/50',
    badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    glow: 'bg-gradient-to-br from-sky-500/5 to-transparent',
    icon: 'text-sky-400',
    category: 'text-sky-400',
    title: 'group-hover:text-sky-400',
    cta: 'text-sky-300 hover:bg-sky-300 hover:text-slate-900 border-sky-300/50',
  },
  indigo: {
    border: 'hover:border-indigo-500/50',
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    glow: 'bg-gradient-to-br from-indigo-500/5 to-transparent',
    icon: 'text-indigo-400',
    category: 'text-indigo-400',
    title: 'group-hover:text-indigo-400',
    cta: 'text-indigo-300 hover:bg-indigo-300 hover:text-slate-900 border-indigo-300/50',
  },
}

export function useColorMap(accentColor: MaybeRef<string | undefined>, fallback: AccentColor = 'sky') {
  const key = computed(() => (toValue(accentColor) || fallback) as AccentColor)
  const activeColor = computed(() => colorMap[key.value] || colorMap[fallback])
  const colorName = computed(() => key.value)

  return {
    activeColor,
    colorName,
    borderClasses: computed(() => `border-slate-700 ${activeColor.value.border}`),
    badgeClasses: computed(() => activeColor.value.badge),
    glowClasses: computed(() => activeColor.value.glow),
    iconClasses: computed(() => activeColor.value.icon),
    categoryClasses: computed(() => activeColor.value.category),
    titleClasses: computed(() => `font-plus-jakarta-sans text-2xl font-bold text-slate-100 mb-2 transition-colors ${activeColor.value.title}`),
    ctaClasses: computed(() => `flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-colors font-inter text-xs font-semibold ${activeColor.value.cta}`),
  }
}
