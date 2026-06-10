<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
}>();
</script>

<template>
    <div
        class="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-violet-300/50 transition-all duration-300 flex flex-col h-full">
        <!-- Project Image -->
        <div class="aspect-video overflow-hidden">
            <img :src="image" :alt="title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>

        <div class="p-6 flex flex-col flex-grow">
            <!-- Tags (Similar to SkillCard style) -->
            <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in tags" :key="tag"
                    class="px-2 py-1 text-[10px] font-jetbrains-mono uppercase tracking-wider bg-slate-800 text-emerald-400 rounded border border-slate-700">
                    {{ tag }}
                </span>
            </div>

            <!-- Content -->
            <h3
                class="font-plus-jakarta-sans text-2xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                {{ title }}
            </h3>
            <p class="font-inter text-base text-slate-400 mb-6 grow">
                {{ description }}
            </p>

            <!-- CTA -->
            <a :href="link" target="_blank" rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 text-violet-300 hover:bg-violet-300 hover:text-indigo-800 px-4 py-2 rounded-lg border-violet-300/50 border transition-colors font-inter text-xs font-semibold">
                {{ $t('projects.viewProject') || 'View Project' }}
                <Icon name="heroicons:arrow-right-20-solid"
                    class="transform group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
    </div>
</template>