<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  name: string;
  title?: string;
  year_start?: string;
  year_end?: string;
  logo: string;
  url?: string;
  showTitleDefault?: boolean;
}>();

const dateRange = computed(() => {
  if (!props.year_start && !props.year_end) return "";
  if (!props.year_end) return `${props.year_start}-present`;
  if (!props.year_start) return props.year_end;
  return `${props.year_start}-${props.year_end}`;
});
</script>
<template>
  <CardGeneric class="group relative overflow-hidden bg-white">
    <a :href="url" target="_blank" class="block h-full">
      <div class="grid p-4 gap-3 place-items-center min-h-[9rem]">
        <img :src="logo" :alt="name" class="max-h-16 w-auto object-contain" />
        <div
          v-if="showTitleDefault && title"
          class="text-center text-sm font-semibold text-gray-800 dark:text-gray-100"
        >
          {{ title }}
        </div>
      </div>
      <div
        class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-white/95 dark:bg-gray-900/95 grid place-items-center px-4"
      >
        <div class="text-center text-xs text-gray-700 dark:text-gray-200">
          <div class="font-semibold text-sm text-gray-900 dark:text-gray-100">{{ name }}</div>
          <div v-if="title">{{ title }}</div>
          <div v-if="dateRange">{{ dateRange }}</div>
        </div>
      </div>
    </a>
  </CardGeneric>
</template>
