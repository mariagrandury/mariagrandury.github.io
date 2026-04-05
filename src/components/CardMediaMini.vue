<!-- Based on CardMediaSummary.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

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
    sm_link?: string;
    abstract?: string;
}>();

// Determine recording icon based on event type
const recordingIcon = computed(() => {
    if (!props.type) return 'mdi:youtube';
    const typeLower = props.type.toLowerCase();
    if (typeLower.includes('article') || typeLower.includes('blog')) {
        return 'mdi:newspaper';
    } else if (typeLower.includes('radio') || typeLower.includes('podcast')) {
        return 'mdi:microphone';
    }
    return 'mdi:youtube';
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
                <div class="text-gray-500 text-sm">{{ event }}</div>
                <div class="flex flex-wrap gap-3">
                    <div v-for="(tag, index) in [type, location]" :key="index"
                        class="border rounded bg-gray-50 border-gray-100 text-sm py-0.5 px-2 select-none dark:border-black dark:bg-gray-700">
                        {{ tag }}</div>
                </div>
            </div>
            <div class="flex flex-row gap-2 self-start">
                <a v-if="event_link" :href="event_link" target="_blank"
                    class="border rounded-md flex border-gray-200 p-2 items-center dark:border-black dark:bg-gray-700 hover:ring ring-accent-500"
                    title="Event information">
                    <Icon icon="mdi:information" style="font-size: 1.25rem" />
                </a>
                <a v-if="recording_link" :href="recording_link" target="_blank"
                    class="border rounded-md flex border-gray-200 p-2 items-center dark:border-black dark:bg-gray-700 hover:ring ring-accent-500"
                    title="View recording/article">
                    <Icon :icon="recordingIcon" style="font-size: 1.25rem" />
                </a>
                <a v-if="sm_link" :href="sm_link" target="_blank"
                    class="border rounded-md flex border-gray-200 p-2 items-center dark:border-black dark:bg-gray-700 hover:ring ring-accent-500"
                    title="Social media post or press release">
                    <Icon icon="mdi:bullhorn" style="font-size: 1.25rem" />
                </a>
            </div>
        </div>
    </CardGeneric>
</template>
