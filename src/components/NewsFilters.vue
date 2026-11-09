<!-- News type filters (empty selection = all types) -->
<script setup lang="ts">
import { computed } from "vue";
import { useLanguage } from "../composables/useLanguage";
import { categories } from "../composables/useNews";

const props = defineProps<{ modelValue: string[]; counts: Record<string, number>; total: number }>();
const emit = defineEmits<{ (e: "update:modelValue", value: string[]): void }>();
const { lang } = useLanguage();

const options = computed(() =>
  Object.entries(categories).map(([key, meta]) => ({ key, label: `${meta.emoji} ${meta[lang.value]}`, color: meta.color, count: props.counts[key] || 0 })),
);
</script>

<template>
  <FilterPills :model-value="modelValue" :options="options" :total="total" @update:model-value="emit('update:modelValue', $event)">
    <slot />
  </FilterPills>
</template>
