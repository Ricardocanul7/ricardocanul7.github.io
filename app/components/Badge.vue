<template>
    <div class="badge">
        <slot />
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
    .badge {
        font-family: 'Jetbrains Mono', sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #C0C1FF;
        border-radius: 100px;
        background: rgba(192, 193, 255, 0.1);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(192, 193, 255, 0.2);
        padding: 4px 16px;
        width: fit-content;
    }
</style>