<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        talk: String,
        event: String,
        event_link: { type: String, default: "", required: false },
        image_link: { type: String, default: "", required: false },
        recording_link: { type: String, default: "", required: false },
        announcement_link: { type: String, default: "", required: false },
        tags: Array,
        date: String,
        color: {
            type: String,
            default: "text-accent-900 bg-accent-50 dark:text-white dark:bg-accent-600"
        },
    }
})
</script>

<template>
    <CardGeneric class="py-6 px-12">
        <div class="grid gap-3 grid-cols-[1fr,auto]">
            <div class="grid gap-3">
                <h2 class="text-1.5rem">{{ talk }}</h2>
                <a :href="event_link" target="_blank" class="self-start items-center hover:underline">{{ event }}</a>
                <div class="flex flex-wrap gap-3">
                    <div v-for="(tag, index) in tags" :key="index"
                        class="border rounded bg-gray-50 border-gray-100 text-sm py-0.5 px-2 select-none dark:border-black dark:bg-gray-700">
                        {{ tag }}</div>
                </div>
            </div>
            <a v-if="recording_link" :href="recording_link" target="_blank"
                class="border rounded-md flex border-gray-200 p-2 self-start items-center dark:border-black dark:bg-gray-700 hover:ring">
                <i-mdi-youtube style="font-size: 1.25rem;" />
            </a>
            <div class="col-start-1 col-span-full">
                <div class="flex justify-center">
                    <img class="p-6 max-h-80" :src="image_link" :alt="talk" />
                </div>
                <slot name="abstract"></slot>
            </div>
        </div>
    </CardGeneric>
</template>
