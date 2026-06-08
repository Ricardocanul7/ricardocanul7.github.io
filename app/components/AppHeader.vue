<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
    <div>
        <header class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" class="text-xl font-bold tracking-tight text-white flex items-center gap-2 group">
                <span class="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-sm group-hover:scale-105 transition-transform">P</span>
                <span>MiPortafolio<span class="text-indigo-400">.</span></span>
            </a>
            <nav class="flex gap-6 text-sm font-medium text-slate-400">
                <NuxtLink :to="localePath('/')" class="hover:text-indigo-400 transition-colors">{{ $t('appHeader.home') }}</NuxtLink>
                <NuxtLink :to="localePath('/about')" class="hover:text-indigo-400 transition-colors">{{ $t('appHeader.about') }}</NuxtLink>
                <NuxtLink :to="localePath('/projects')" class="hover:text-indigo-400 transition-colors">{{ $t('appHeader.projects') }}</NuxtLink>
            </nav>
            <LanguageSwitcher />
        </div>
    </header>
    </div>
</template>