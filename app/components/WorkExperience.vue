<script setup lang="ts">
defineProps<{
    dates: string,
    title: string,
    descriptionPoints: string[]
}>();
</script>

<template>
    <div class="flex bg-slate-900 group pb-2">
        <div class="line-indicator flex flex-col items-center mr-6" aria-hidden="true">
            <div class="circle w-4 h-4 bg-slate-700 rounded-full group-hover:bg-violet-300 group-hover:ring-4 group-hover:ring-violet-300/20 transition-all duration-300"></div>
            <div class="line border-r-2 border-gray-700/30 w-0 h-full group-hover:border-violet-300/50 transition-colors duration-300"></div>
        </div>
        <div class="work-experience pb-12 text-left">
            <time class="font-jetbrains-mono text-xs text-emerald-400 font-semibold uppercase tracking-wider">{{ dates }}</time>
            <h3 class="font-plus-jakarta-sans text-xl font-bold text-indigo-100 mt-1 mb-3">{{ title }}</h3>
            <ul class="list-none space-y-2">
                <li 
                    v-for="(point, index) in descriptionPoints" :key="index" 
                    class="font-inter text-slate-400 text-sm flex items-start before:content-['◦'] before:text-violet-300 before:mr-2 before:font-bold">
                    {{ point }}
                </li>
            </ul>
        </div>
    </div>
</template>