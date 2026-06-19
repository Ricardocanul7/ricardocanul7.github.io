<template>
    <div class="w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
        <!-- Window Header -->
        <div class="bg-slate-900/50 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500/80"/>
                <div class="w-3 h-3 rounded-full bg-amber-500/80"/>
                <div class="w-3 h-3 rounded-full bg-emerald-500/80"/>
            </div>
            <div v-if="title" class="text-xs font-medium text-slate-400 uppercase tracking-widest">
                {{ title }}
            </div>
            <div class="w-12"/> <!-- Spacer to balance the dots -->
        </div>
        
        <!-- Window Content -->
        <div class="p-6">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title?: string
}>()
</script>

<style scoped>
</style>