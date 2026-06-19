<script setup lang="ts">
interface Props {
    accentColor?: string; // e.g., 'violet', 'emerald', 'amber'
    category: string;
    title: string;
    description: string;
    tags: string[] | null;
}

const props = withDefaults(defineProps<Props>(), {
    accentColor: 'violet'
});

const colorMap = {
    violet: {
        border: 'hover:border-violet-500/50',
        category: 'text-violet-400',
        badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
        glow: 'bg-gradient-to-br from-violet-500/5 to-transparent'
    },
    emerald: {
        border: 'hover:border-emerald-500/50',
        category: 'text-emerald-400',
        badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
        glow: 'bg-gradient-to-br from-emerald-500/5 to-transparent'
    },
    amber: {
        border: 'hover:border-amber-500/50',
        category: 'text-amber-400',
        badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
        glow: 'bg-gradient-to-br from-amber-500/5 to-transparent'
    },
    sky: {
        border: 'hover:border-sky-500/50',
        category: 'text-sky-400',
        badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
        glow: 'bg-gradient-to-br from-sky-500/5 to-transparent'
    },
    indigo: {
        border: 'hover:border-indigo-500/50',
        category: 'text-indigo-400',
        badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
        glow: 'bg-gradient-to-br from-indigo-500/5 to-transparent'
    }
};

const activeColor = computed(() => colorMap[props.accentColor as keyof typeof colorMap] || colorMap.violet);

const borderClasses = computed(() => `border-slate-700 ${activeColor.value.border}`);
const categoryClasses = computed(() => activeColor.value.category);
const badgeClasses = computed(() => activeColor.value.badge);
</script>

<template>
    <div 
        class="group relative p-6 rounded-2xl bg-slate-800/40 border transition-all duration-300 ease-in-out"
        :class="borderClasses">
        <!-- Glow Effect on Hover -->
        <div 
            class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            :class="activeColor.glow"/>

        <div class="relative z-10">
            <!-- Category/Small Description -->
            <span class="text-xs font-bold uppercase tracking-wider mb-3 block" :class="categoryClasses">
                {{ category }}
            </span>

            <!-- Title -->
            <h3 class="text-xl font-plus-jakarta-sans font-bold text-slate-100 mb-3">
                {{ title }}
            </h3>

            <!-- Description -->
            <p class="text-slate-400 font-inter text-sm leading-relaxed mb-6">
                {{ description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
                <span 
                    v-for="tag in tags" :key="tag" class="px-3 py-1 rounded-full text-xs font-medium border"
                    :class="badgeClasses">
                    {{ tag }}
                </span>
            </div>
        </div>
    </div>
</template>