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
        class="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-black hover:shadow-md rounded-md"
    >
        <div class="grid grid-cols-[max-content,auto,max-content] gap-3">
            <div class="w-4rem h-4rem grid place-items-center rounded-md text-2rem" :class="color">
                <slot></slot>
            </div>
            <div class="flex flex-col gap-3">
                <h1>{{ title }}</h1>
                <div>
                    <span
                        v-for="(tag, index) in tags"
                        :key="index"
                        class="text-sm whitespace-nowrap px-2 py-1 mr-2 bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-black h-10 rounded select-none"
                    >{{ tag }}</span>
                </div>
                <slot name="description"></slot>
            </div>
            <a
                v-if="link"
                :href="link"
                target="_blank"
                class="self-start p-2 dark:bg-gray-700 border border-gray-200 dark:border-black rounded-md items-center flex items-center hover:ring"
            >
                <i-fluent-rocket-20-regular style="font-size: 1.25rem;" />
            </a>
        </div>
    </div>
</template>