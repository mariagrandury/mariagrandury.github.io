<!-- Based on CardMediaSummary.vue -->
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        talk: String,
        organizer: { type: String, default: "", required: false },
        event: String,
        event_link: {
            type: String, default: "https://www.youtube.com/@mariagrandury", required: false
        },
        image_link: { type: String, default: "", required: false },
        recording_link: {
            type: String, default: "https://www.youtube.com/@mariagrandury", required: false
        },
        announcement_link: { type: String, default: "", required: false },
        tags: Array,
        date: String,
        language: String,
        type: String,
        location: String,
        color: {
            type: String,
            default: "text-accent-900 bg-accent-50 dark:text-white dark:bg-accent-600"
        },
        icon: { type: String, default: "", required: false },
        abstract: { type: String, default: "", required: false },
    }
})
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
                <component v-if="icon" :is="icon" style="font-size: 1.25rem" />
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
