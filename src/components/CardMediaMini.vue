<!-- Based on CardMediaSummary.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import { convertIconName } from '../utils/iconRegistry';

const props = defineProps<{
    talk: string;
    organizer?: string;
    event: string;
    event_link?: string;
    image_link?: string;
    recording_link?: string;
    announcement_link?: string;
    tags: string[];
    date?: string;
    language?: string;
    type?: string;
    location?: string;
    color?: string;
    icon?: string;
    abstract?: string;
}>();

// Convert icon name to Iconify format
const iconifyIcon = computed(() => {
    if (!props.icon) return null;
    return convertIconName(props.icon);
});
</script>

<template>
    <CardGeneric class="py-6 px-8">
        <div class="grid gap-3 grid-cols-[1fr,6fr,auto]">
            <div class="flex justify-center items-start">
                <img class="p-2 max-h-40" :src="image_link" :alt="talk" />
            </div>
            <div class="grid gap-3 items-center">
                <h1 class="text-lg">{{ talk }}</h1>
                <a :href="event_link" target="_blank"
                    class="self-start items-center text-gray-500 text-sm hover:underline">{{ event }}
                </a>
                <div class="flex flex-wrap gap-3">
                    <div v-for="(tag, index) in [type, location]" :key="index"
                        class="border rounded bg-gray-50 border-gray-100 text-sm py-0.5 px-2 select-none dark:border-black dark:bg-gray-700">
                        {{ tag }}</div>
                </div>
            </div>
            <a v-if="recording_link" :href="recording_link" target="_blank"
                class="border rounded-md flex border-gray-200 p-2 self-start items-center dark:border-black dark:bg-gray-700 hover:ring">
                <Icon :icon="iconifyIcon" v-if="iconifyIcon" style="font-size: 1.25rem" />
                <slot v-else></slot>
            </a>
        </div>
        <div v-if="$slots.abstract || abstract" class="col-start-1 col-span-full mt-3">
            <slot name="abstract">
                <div class="text-sm text-gray-700 dark:text-white" v-html="abstract"></div>
            </slot>
        </div>
    </CardGeneric>
</template>
