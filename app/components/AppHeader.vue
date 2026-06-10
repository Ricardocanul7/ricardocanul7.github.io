<script setup lang="ts">
const localePath = useLocalePath();
const appConfig = useAppConfig();
const isMenuOpen = ref(false);

const navLinks = [
  { name: 'appHeader.home', path: '/', exact: true },
  { name: 'appHeader.projects', path: '/projects', exact: false },
  { name: 'appHeader.experience', path: '/experience', exact: false },
  { name: 'appHeader.about', path: '/about', exact: false },
];

const linkClasses = "hover:text-indigo-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-indigo-500 after:scale-x-0 after:transition-transform after:origin-left";
const activeClasses = "[&.router-link-active]:after:scale-x-100 [&.router-link-active]:text-white";
const exactActiveClasses = "[&.router-link-exact-active]:after:scale-x-100 [&.router-link-exact-active]:text-white";

const getClasses = (exact: boolean) => `${linkClasses} ${exact ? exactActiveClasses : activeClasses}`;
</script>

<template>
    <header class="sticky top-0 z-50 bg-slate-900 backdrop-blur-md border-b border-slate-900">
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <NuxtLink :to="localePath('/')" class="text-xl font-bold tracking-tight text-white flex items-center gap-2 group font-plus-jakarta-sans">
                <span class="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-sm group-hover:scale-105 transition-transform">P</span>
                <span>{{ appConfig.name }}</span>
            </NuxtLink>

            <!-- Desktop Navigation -->
            <nav class="font-inter hidden md:flex gap-6 text-sm font-semibold text-slate-400">
                <NuxtLink 
                    v-for="link in navLinks" 
                    :key="link.path" 
                    :to="localePath(link.path)" 
                    :class="getClasses(link.exact)"
                >
                    {{ $t(link.name) }}
                </NuxtLink>
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
        <div v-show="isMenuOpen" class="md:hidden border-t border-slate-900 bg-slate-900 px-6 py-4 flex flex-col gap-4 text-center text-sm font-semibold">
            <NuxtLink 
                v-for="link in navLinks" 
                :key="link.path" 
                :to="localePath(link.path)" 
                @click="isMenuOpen = false" 
                class="text-slate-400 hover:text-indigo-400 transition-colors"
                active-class="text-white"
            >
                {{ $t(link.name) }}
            </NuxtLink>
        </div>
    </header>
</template>