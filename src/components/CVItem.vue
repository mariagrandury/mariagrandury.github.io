<script setup lang="ts">
defineProps<{
    location: String,
    title: String,
    timeline: String,
}>()
</script>

<template>
    <div>
        <h1 class="font-medium text-lg mb-4">{{ location }}</h1>
        <p>{{ timeline }}</p>
    </div>
    <div>
        <h2 class="font-medium mb-4">{{ title }}</h2>
        <p>
            <slot></slot>
        </p>
    </div>
</template>
