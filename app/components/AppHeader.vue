<script setup lang="ts">
const localePath = useLocalePath();
const appConfig = useAppConfig();
const isMenuOpen = ref(false);
</script>

<template>
    <header class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" class="text-xl font-bold tracking-tight text-white flex items-center gap-2 group plus-jakarta-sans-font">
                <span class="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-sm group-hover:scale-105 transition-transform">P</span>
                <span>{{ $t(appConfig.name) }}<span class="text-indigo-400">.</span></span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="inter-font hidden md:flex gap-6 text-sm font-medium text-slate-400">
                <NuxtLink :to="localePath('/')" class="hover:text-indigo-400 transition-colors">{{ $t('appHeader.home') }}</NuxtLink>
                <NuxtLink :to="localePath('/projects')" class="hover:text-indigo-400 transition-colors">{{ $t('appHeader.projects') }}</NuxtLink>
                <NuxtLink :to="localePath('/experience')" class="hover:text-indigo-400 transition-colors">{{ $t('appHeader.experience') }}</NuxtLink>
                <NuxtLink :to="localePath('/about')" class="hover:text-indigo-400 transition-colors">{{ $t('appHeader.about') }}</NuxtLink>
            </nav>

            <div class="flex items-center gap-4">
                <LanguageSwitcher />
                <!-- Mobile Menu Button -->
                <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-slate-400 hover:text-white">
                    <span class="sr-only">Open menu</span>
                    <div class="w-6 h-5 flex flex-col justify-between">
                        <span :class="['h-0.5 w-full bg-current transition-all', isMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
                        <span :class="['h-0.5 w-full bg-current transition-all', isMenuOpen ? 'opacity-0' : '']"></span>
                        <span :class="['h-0.5 w-full bg-current transition-all', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
                    </div>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-show="isMenuOpen" class="md:hidden border-t border-slate-900 bg-slate-950 px-6 py-4 flex flex-col gap-4">
            <NuxtLink :to="localePath('/')" @click="isMenuOpen = false" class="text-slate-400 hover:text-indigo-400 transition-colors">{{ $t('appHeader.home') }}</NuxtLink>
            <NuxtLink :to="localePath('/projects')" @click="isMenuOpen = false" class="text-slate-400 hover:text-indigo-400 transition-colors">{{ $t('appHeader.projects') }}</NuxtLink>
            <NuxtLink :to="localePath('/experience')" @click="isMenuOpen = false" class="text-slate-400 hover:text-indigo-400 transition-colors">{{ $t('appHeader.experience') }}</NuxtLink>
            <NuxtLink :to="localePath('/about')" @click="isMenuOpen = false" class="text-slate-400 hover:text-indigo-400 transition-colors">{{ $t('appHeader.about') }}</NuxtLink>
        </div>
    </header>
</template>