<script setup>
const { locale, locales, setLocale } = useI18n()
const isOpen = ref(false)
const container = ref(null)

const toggleDropdown = () => isOpen.value = !isOpen.value

const selectLocale = (code) => {
  setLocale(code)
  isOpen.value = false
}

// Close dropdown when clicking outside
if (import.meta.client) {
  window.addEventListener('click', (e) => {
    if (container.value && !container.value.contains(e.target)) {
      isOpen.value = false
    }
  })
}
</script>

<template>
    <div class="relative inline-block text-left" ref="container">
        <button 
            @click="toggleDropdown"
            type="button"
            class="flex items-center gap-2 bg-slate-900/50 text-slate-400 text-xs font-medium border border-slate-800 hover:border-indigo-500/50 hover:text-white rounded-lg px-3 py-1.5 transition-all duration-200"
        >
            <span class="uppercase">{{ locale }}</span>
            <svg 
                class="w-3 h-3 transition-transform duration-200" 
                :class="{ 'rotate-180': isOpen }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        <Transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <div v-show="isOpen" class="absolute right-0 mt-2 w-24 origin-top-right rounded-xl bg-slate-950 border border-slate-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden">
                <div class="py-1">
                    <button
                        v-for="loc in locales" 
                        :key="loc.code"
                        @click="selectLocale(loc.code)"
                        :class="[
                            locale === loc.code ? 'bg-indigo-600/10 text-indigo-400' : 'text-slate-400 hover:bg-slate-900 hover:text-white',
                            'block w-full text-left px-4 py-2 text-xs font-medium transition-colors'
                        ]"
                    >
                        {{ loc.name.toUpperCase() }}
                    </button>
                </div>
            </div>
        </Transition>
    </div>
</template>