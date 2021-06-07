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
        tags: Array
    }
})
</script>

<template>
    <div
        class="bg-white border rounded-md border-gray-200 p-6 dark:border-black hover:shadow-md dark:bg-gray-800"
    >
        <div class="grid gap-3 grid-cols-[auto,1fr,auto]">
            <div class="rounded-md h-4rem grid text-2rem w-4rem place-items-center" :class="color">
                <slot></slot>
            </div>
            <div class="grid gap-3">
                <h1>{{ title }}</h1>
                <div class="flex flex-wrap gap-3">
                    <span
                        v-for="(tag, index) in tags"
                        :key="index"
                        class="border rounded bg-gray-50 border-gray-100 text-sm py-0.5 px-2 dark:border-black select-none dark:bg-gray-700"
                    >{{ tag }}</span>
                </div>
            </div>
            <a
                v-if="link"
                :href="link"
                target="_blank"
                class="border rounded-md flex border-gray-200 p-2 self-start dark:border-black items-center hover:ring dark:bg-gray-700"
            >
                <i-fluent-rocket-20-regular style="font-size: 1.25rem;" />
            </a>
            <div class="col-start-2 col-span-2">
                <slot name="description"></slot>
            </div>
        </div>
    </div>
</template>
