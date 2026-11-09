<!-- Shared pill buttons for filtering lists (empty selection = all). Used by news, map, research, divulgation and projects. -->
<script setup lang="ts">
import { useLanguage } from "../composables/useLanguage";

export interface PillOption { key: string; label: string; color?: string; count?: number }

const props = defineProps<{ modelValue: string[]; options: PillOption[]; total?: number; single?: boolean; hideAll?: boolean }>();
const emit = defineEmits<{ (e: "update:modelValue", value: string[]): void }>();
const { lang } = useLanguage();

const toggle = (key: string) => {
  const on = props.modelValue.includes(key);
  emit("update:modelValue", props.single ? (on ? [] : [key]) : on ? props.modelValue.filter((k) => k !== key) : [...props.modelValue, key]);
};
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-if="!hideAll"
      class="rounded-full border px-3 py-1 text-sm"
      :class="!modelValue.length ? 'bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900' : 'border-gray-200 dark:border-gray-700'"
      @click="emit('update:modelValue', [])"
    >
      {{ lang === 'en' ? 'All' : 'Todo' }}<template v-if="total !== undefined"> · {{ total }}</template>
    </button>
    <button
      v-for="option in options"
      :key="option.key"
      class="rounded-full border px-3 py-1 text-sm"
      :style="modelValue.includes(option.key)
        ? { background: option.color || '#0891b2', borderColor: option.color || '#0891b2', color: 'white' }
        : { borderColor: option.color || '#d1d5db' }"
      @click="toggle(option.key)"
    >
      {{ option.label }}<template v-if="option.count !== undefined"> · {{ option.count }}</template>
    </button>
    <slot />
  </div>
</template>
