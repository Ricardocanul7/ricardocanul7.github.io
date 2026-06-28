<script setup lang="ts">
defineProps<{
    text: string
    id?: string
}>();
</script>

<template>
    <div class="bg-slate-100 dark:bg-slate-900">
        <LayoutContainer>
            <div class="heading flex justify-center items-center py-5 text-center">
                <div class="border-b-2 border-gray-300/30 dark:border-gray-700/30 w-full mr-8"/>
                <h2 :id="id" class="font-plus-jakarta-sans text-2xl font-bold text-slate-800 dark:text-indigo-100 uppercase">{{ text }}</h2>
                <div class="border-b-2 border-gray-300/30 dark:border-gray-700/30 w-full ml-8"/>
            </div>
        </LayoutContainer>
    </div>
</template>
