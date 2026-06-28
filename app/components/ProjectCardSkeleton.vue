<script setup lang="ts">
</script>

<template>
    <div class="group relative rounded-2xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col h-full">
        <!-- Image skeleton with shimmer -->
        <div class="aspect-video bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
            <div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        <div class="p-6 flex flex-col grow">
            <!-- Tags skeleton -->
            <div class="flex flex-wrap gap-2 mb-4">
                <div class="h-6 w-14 rounded-full bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                    <div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>
                <div class="h-6 w-16 rounded-full bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                    <div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>
                <div class="h-6 w-12 rounded-full bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                    <div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>
            </div>

            <!-- Title skeleton -->
            <div class="h-7 w-3/4 rounded bg-slate-200 dark:bg-slate-700 mb-2 relative overflow-hidden">
                <div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>

            <!-- Description skeleton -->
            <div class="space-y-2 mb-6 grow">
                <div class="h-4 w-full rounded bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                    <div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>
                <div class="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                    <div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>
            </div>

            <!-- CTA skeleton -->
            <div class="h-10 w-32 rounded-lg bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                <div class="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}
</style>
