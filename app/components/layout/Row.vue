<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    gap?: number | string
}>()

const gapMap: Record<string | number, string> = {
    0: 'gap-0',
    2: 'gap-2',
    4: 'gap-4',
    8: 'gap-8',
    12: 'gap-12',
    16: 'gap-16'
}

const classes = computed(() => [
    'grid grid-cols-1 lg:grid-cols-12',
    props.gap ? gapMap[props.gap] : 'gap-8'
])
</script>