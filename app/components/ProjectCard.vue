<script setup lang="ts">
interface Props {
    accentColor?: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
}

const props = withDefaults(defineProps<Props>(), {
    accentColor: 'sky'
});

const colorMap = {
    violet: {
        border: 'hover:border-violet-500/50',
        tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
        title: 'group-hover:text-violet-400',
        cta: 'text-violet-300 hover:bg-violet-300 hover:text-slate-900 border-violet-300/50',
        glow: 'bg-gradient-to-br from-violet-500/5 to-transparent'
    },
    emerald: {
        border: 'hover:border-emerald-500/50',
        tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
        title: 'group-hover:text-emerald-400',
        cta: 'text-emerald-300 hover:bg-emerald-300 hover:text-slate-900 border-emerald-300/50',
        glow: 'bg-gradient-to-br from-emerald-500/5 to-transparent'
    },
    amber: {
        border: 'hover:border-amber-500/50',
        tag: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
        title: 'group-hover:text-amber-400',
        cta: 'text-amber-300 hover:bg-amber-300 hover:text-slate-900 border-amber-300/50',
        glow: 'bg-gradient-to-br from-amber-500/5 to-transparent'
    },
    sky: {
        border: 'hover:border-sky-500/50',
        tag: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
        title: 'group-hover:text-sky-400',
        cta: 'text-sky-300 hover:bg-sky-300 hover:text-slate-900 border-sky-300/50',
        glow: 'bg-gradient-to-br from-sky-500/5 to-transparent'
    },
    indigo: {
        border: 'hover:border-indigo-500/50',
        tag: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
        title: 'group-hover:text-indigo-400',
        cta: 'text-indigo-300 hover:bg-indigo-300 hover:text-slate-900 border-indigo-300/50',
        glow: 'bg-gradient-to-br from-indigo-500/5 to-transparent'
    }
};

const activeColor = computed(() => colorMap[props.accentColor as keyof typeof colorMap] || colorMap.violet);

const borderClasses = computed(() => `border-slate-700 ${activeColor.value.border}`);
const tagClasses = 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
const titleClasses = computed(() => `font-plus-jakarta-sans text-2xl font-bold text-slate-100 mb-2 transition-colors ${activeColor.value.title}`);
const ctaClasses = computed(() => `flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-colors font-inter text-xs font-semibold ${activeColor.value.cta}`);
</script>

<template>
    <div 
        class="group relative rounded-2xl bg-slate-800/40 border overflow-hidden transition-all duration-300 ease-in-out flex flex-col h-full"
        :class="borderClasses">
        <!-- Glow Effect on Hover -->
        <div 
            class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            :class="activeColor.glow"/>

        <!-- Project Image -->
        <div class="aspect-video overflow-hidden bg-slate-950 relative z-10">
            <NuxtPicture 
                format="avif,webp"
                :src="image"
                height="270"
                width="480"
                :img-attrs="{
                    alt: title,
                    loading: 'lazy',
                    class: 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                }"
            />
        </div>

        <div class="p-6 flex flex-col grow relative z-10">
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
                <span 
                    v-for="tag in tags" :key="tag"
                    class="px-3 py-1 rounded-full text-xs font-medium border"
                    :class="tagClasses">
                    {{ tag }}
                </span>
            </div>

            <!-- Content -->
            <h2 :class="titleClasses">
                {{ title }}
            </h2>
            <p class="font-inter text-base text-slate-400 mb-6 grow">
                {{ description }}
            </p>

            <!-- CTA -->
            <a 
                :href="link" target="_blank" rel="noopener noreferrer"
                :aria-label="$t('projectsPage.viewProject') + ': ' + title"
                :class="ctaClasses">
                {{ $t('projectsPage.viewProject') || 'View Project' }}
                <Icon 
                    name="heroicons:arrow-right-20-solid"
                    class="transform group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
    </div>
</template>