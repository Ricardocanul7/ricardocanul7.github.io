<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const { locale: currentLocale, locales, setLocale } = useI18n()
const isOpen = ref(false)
const container = ref<HTMLElement | null>(null)

const toggleDropdown = () => isOpen.value = !isOpen.value

const selectLocale = async (code: 'en' | 'es') => {
  await setLocale(code)
  isOpen.value = false
}

const handleClickOutside = (e: MouseEvent) => {
  if (container.value && !container.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <div 
        ref="container"
        class="relative inline-block text-left" 
        @keydown.escape="isOpen = false"
    >
        <button 
            type="button"
            class="flex items-center gap-2 bg-slate-100/50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs font-medium border border-slate-300 dark:border-slate-800 hover:border-indigo-500/50 hover:text-slate-900 dark:hover:text-white rounded-lg px-3 py-1.5 transition-all duration-200"
            aria-haspopup="listbox"
            :aria-expanded="isOpen"
            aria-controls="language-options-list"
            aria-label="Select language / Seleccionar idioma"
            @click="toggleDropdown"
        >
            <span class="uppercase">{{ currentLocale }}</span>
            <svg 
                class="w-3 h-3 transition-transform duration-200" 
                :class="{ 'rotate-180': isOpen }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                aria-hidden="true"
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
            <div 
                v-show="isOpen" 
                class="absolute right-0 mt-2 w-28 origin-top-right rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden"
            >
                <div 
                    id="language-options-list" 
                    role="listbox" 
                    class="py-1"
                    :aria-label="currentLocale === 'es' ? 'Opciones de idioma' : 'Language options'"
                >
                    <button
                        v-for="loc in locales" 
                        :key="loc.code"
                        role="option"
                        :aria-selected="currentLocale === loc.code"
                        :class="[
                            currentLocale === loc.code ? 'bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white',
                            'block w-full text-left px-4 py-2 text-xs font-medium transition-colors'
                        ]"
                        @click="selectLocale(loc.code)"
                    >
                        {{ loc.name?.toUpperCase() }}
                    </button>
                </div>
            </div>
        </Transition>
    </div>
</template>
