<script setup lang="ts">
</script>

<template>
    <div class="min-h-screen flex flex-col bg-slate-900">
        <AppHeader />
        <main class="page-content grow">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>