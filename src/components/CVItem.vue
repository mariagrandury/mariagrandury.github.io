<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
    location: String,
    title: String,
    timeline: String,
}>()
</script>

<template>
    <div>
        <h1 class="text-lg font-medium mb-4">{{ location }}</h1>
        <p>{{ timeline }}</p>
    </div>
    <div>
        <h2 class="font-medium mb-4">{{ title }}</h2>
        <p>
            <slot></slot>
        </p>
    </div>
</template>
