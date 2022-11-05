<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: String,
        color: {
            type: String,
            default: "text-accent-900 bg-accent-50 dark:text-white dark:bg-accent-600"
        },
        link: {
            type: String,
            default: "",
            required: false
        },
        description: {
            type: String,
            required: false
        },
        tags: {
            type: Array,
            required: false
        },
    }
})
</script>

<template>
    <CardGeneric class="p-6">
        <a :href="link" target="_blank">
            <div class="grid gap-3 grid-cols-[auto,1fr]">
                <div class="rounded-md h-4rem grid text-2rem w-4rem place-items-center" :class=color>
                    <slot></slot>
                </div>
                <div class="grid gap-x-3 my-auto">
                    <p>{{ title }}</p>
                    <div class="flex flex-wrap gap-3">
                        <div v-for="(tag, index) in tags" :key="index"
                            class="border rounded bg-gray-50 border-gray-100 text-sm py-0.5 px-2 select-none dark:border-black dark:bg-gray-700">
                            {{ tag }}</div>
                    </div>
                </div>
                <div v-if="description" class="col-start-2 col-span-2 text-sm text-gray-700 dark:text-white">{{
                        description
                }}</div>
            </div>
        </a>
    </CardGeneric>
</template>
