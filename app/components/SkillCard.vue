<template>
    <div class="skill-card-component bg-gray-800/50 border border-slate-700 p-6 rounded-xl flex flex-col gap-4 hover:border-sky-400/50 transition-colors">
        <div class="flex justify-between items-start">
            <div class="text-3xl text-sky-400">
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

        <div class="flex flex-wrap gap-2 mt-auto">
            <span v-for="tag in tags" :key="tag" class="font-jetbrains-mono text-xs font-medium px-2 py-1 bg-gray-700 text-indigo-100 rounded-sm">
                {{ tag }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    icon: string;
    title: string;
    description: string;
    tags: string[];
    expertise: string | null;
}>();
</script>