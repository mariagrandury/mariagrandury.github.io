<script setup lang="ts">
defineProps<{
  title: String,
  text: String,
  color: String,
}>()
</script>

<template>
  <GenericCard class="p-6">
    <div class="rounded-md h-4rem grid text-2rem w-4rem place-items-center" :class="color">
      <slot></slot>
    </div>
    <h3 class="font-medium mt-4 mb-2">{{ title }}</h3>
    <div class="text-sm text-gray-700 dark:text-white">{{ text }}</div>
  </GenericCard>
</template>
