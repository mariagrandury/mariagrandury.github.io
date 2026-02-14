<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import { convertIconName } from '../utils/iconRegistry';

const props = defineProps<{
    title: string;
    color?: string;
    link?: string;
    tags: string[];
    icon?: string;
    description?: string;
}>();

// Convert icon name to Iconify format
const iconifyIcon = computed(() => {
    if (!props.icon) return null;
    return convertIconName(props.icon);
});
</script>

<template>
    <CardGeneric class="p-6">
        <div class="grid gap-3 grid-cols-[auto,1fr,auto]">
            <div class="rounded-md h-4rem grid text-2rem w-4rem place-items-center" :class="color || 'text-accent-900 bg-accent-50 dark:text-white dark:bg-accent-600'">
                <Icon :icon="iconifyIcon" v-if="iconifyIcon" style="font-size: 2rem;" />
                <slot v-else></slot>
            </div>
            <div class="grid gap-3">
                <h2>{{ title }}</h2>
                <div class="flex flex-wrap gap-3">
                    <div
                        v-for="(tag, index) in tags"
                        :key="index"
                        class="border rounded bg-gray-50 border-gray-100 text-sm py-0.5 px-2 select-none dark:border-black dark:bg-gray-700"
                    >{{ tag }}</div>
                </div>
            </div>
            <a
                v-if="link"
                :href="link"
                target="_blank"
                class="border rounded-md flex border-gray-200 p-2 self-start items-center dark:border-black dark:bg-gray-700 hover:ring ring-accent-500"
            >
                <Icon :icon="iconifyIcon" v-if="iconifyIcon" style="font-size: 1.25rem;" />
                <i-fluent-rocket-20-regular v-else style="font-size: 1.25rem;" />
            </a>
            <div class="col-start-2 col-span-2">
                <slot name="description">
                    <div v-if="description" class="text-sm text-gray-700 dark:text-white" v-html="description"></div>
                </slot>
            </div>
        </div>
    </CardGeneric>
</template>
