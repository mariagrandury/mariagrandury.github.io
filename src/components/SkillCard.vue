<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  title: String,
  text: String,
  color: String,
}>()
</script>

<template>
  <div
    class="bg-white p-6 border border-gray-200 rounded-md hover:shadow-md dark:border-gray-600 dark:bg-gray-800"
  >
    <div class="w-4rem h-4rem grid place-items-center rounded-md text-2rem" :class="color">
      <slot></slot>
    </div>
    <h3 class="mt-4 mb-2 font-medium">{{ title }}</h3>
    <p class="text-sm text-gray-700 dark:text-white">{{ text }}</p>
  </div>
</template>
