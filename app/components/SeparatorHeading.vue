<script setup lang="ts">
defineProps<{
    text: string
}>();
</script>

<template>
    <div class="bg-slate-900">
        <LayoutContainer>
            <div class="heading flex justify-center items-center py-5 text-center">
                <div class="border-b-2 border-gray-700/30 w-full mr-8"></div>
                <h2 class="font-plus-jakarta-sans text-2xl font-bold text-indigo-100 uppercase" >{{ text }}</h2>
                <div class="border-b-2 border-gray-700/30 w-full ml-8"></div>
            </div>
        </LayoutContainer>
    </div>
</template>