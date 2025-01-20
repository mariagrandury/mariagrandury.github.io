<script setup lang="ts">
defineProps<{
  title: string;
  tags: string[];
  arxiv_link?: string;
  hf_link?: string;
  color: string;
  icon?: string;
}>();
</script>

<template>
  <CardGeneric class="p-6">
    <div class="grid gap-3 grid-cols-[auto,1fr,auto]">
      <div class="rounded-md h-4rem grid text-2rem w-4rem place-items-center" :class="color">
        <component :is="icon" v-if="icon" />
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
      <div class="flex gap-2">
        <a
          v-if="arxiv_link"
          :href="arxiv_link"
          target="_blank"
          class="border rounded-md flex border-gray-200 p-2 self-start items-center dark:border-black dark:bg-gray-700 hover:ring ring-accent-500"
          title="View on arXiv"
        >
          <i-simple-icons-arxiv style="font-size: 1.25rem;" />
        </a>
        <a
          v-if="hf_link"
          :href="hf_link"
          target="_blank"
          class="border rounded-md flex border-gray-200 p-2 self-start items-center dark:border-black dark:bg-gray-700 hover:ring ring-accent-500"
          title="View on Hugging Face"
        >
          <i-noto:hugging-face style="font-size: 1.25rem;" />
        </a>
      </div>
      <div class="col-start-2 col-span-2">
        <slot name="description"></slot>
      </div>
    </div>
  </CardGeneric>
</template> 