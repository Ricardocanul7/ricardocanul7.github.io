<script setup lang="ts">
interface Props {
    accentColor?: string;
    icon: string;
    title: string;
    description: string;
    tags: string[];
    expertise: string | null;
}

const props = withDefaults(defineProps<Props>(), {
    accentColor: 'sky'
});

const colorMap = {
    violet: {
        border: 'hover:border-violet-500/50',
        icon: 'text-violet-400',
        badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
        glow: 'bg-gradient-to-br from-violet-500/5 to-transparent'
    },
    emerald: {
        border: 'hover:border-emerald-500/50',
        icon: 'text-emerald-400',
        badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
        glow: 'bg-gradient-to-br from-emerald-500/5 to-transparent'
    },
    amber: {
        border: 'hover:border-amber-500/50',
        icon: 'text-amber-400',
        badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
        glow: 'bg-gradient-to-br from-amber-500/5 to-transparent'
    },
    sky: {
        border: 'hover:border-sky-500/50',
        icon: 'text-sky-400',
        badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
        glow: 'bg-gradient-to-br from-sky-500/5 to-transparent'
    },
    indigo: {
        border: 'hover:border-indigo-500/50',
        icon: 'text-indigo-400',
        badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
        glow: 'bg-gradient-to-br from-indigo-500/5 to-transparent'
    }
};

const activeColor = computed(() => colorMap[props.accentColor as keyof typeof colorMap] || colorMap.sky);

const borderClasses = computed(() => `border-slate-700 ${activeColor.value.border}`);
const iconClasses = computed(() => activeColor.value.icon);
const badgeClasses = computed(() => activeColor.value.badge);
</script>

<template>
    <div 
        class="group relative p-6 rounded-2xl bg-slate-800/40 border transition-all duration-300 ease-in-out flex flex-col gap-4"
        :class="borderClasses">
        <!-- Glow Effect on Hover -->
        <div 
            class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            :class="activeColor.glow"/>

        <div class="relative z-10 flex flex-col flex-1">
            <div class="flex justify-between items-start">
                <div class="text-3xl" :class="iconClasses">
                    <Icon :name="icon" />
                </div>
                <span v-if="expertise" class="font-jetbrains-mono text-sm font-bold px-2 py-1 text-emerald-300">
                    {{ expertise }}
                </span>
            </div>

            <h3 class="font-plus-jakarta-sans font-bold text-2xl text-indigo-100 leading-tight">
                {{ title }}
            </h3>

            <p class="font-inter text-sm text-slate-300 line-clamp-3">
                {{ description }}
            </p>

            <div class="flex flex-wrap gap-2 mt-auto pt-4">
                <span 
                    v-for="tag in tags" :key="tag" class="px-3 py-1 rounded-full text-xs font-medium border"
                    :class="badgeClasses">
                    {{ tag }}
                </span>
            </div>
        </div>
    </div>
</template>