<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  title: string;
  authors: string;
  venue?: string;
  abstract?: string;
  arxiv_link?: string;
  hf_link?: string;
  color: string;
  icon?: string;
}>();

const showAbstract = ref(false);

const authorParts = computed(() => {
  const targetAuthor = "María Grandury";
  return props.authors.split(targetAuthor);
});
</script>

<template>
  <CardGeneric class="p-6">
    <div class="grid gap-3 grid-cols-[auto,1fr,auto]">
      <div class="rounded-md h-4rem grid text-2rem w-4rem place-items-center" :class="color">
        <component :is="icon" v-if="icon" />
      </div>
      <div class="grid gap-3">
        <h2 class="font-semibold">{{ title }}</h2>
        <p class="text-sm text-gray-800 dark:text-gray-200">
          <template v-for="(part, index) in authorParts" :key="index">
            {{ part }}<span v-if="index < authorParts.length - 1" class="underline">María Grandury</span>
          </template>
        </p>
        <p v-if="venue" class="text-sm italic text-gray-500 dark:text-gray-400">{{ venue }}</p>
      </div>
      <div class="flex gap-2">
        <a
          v-if="arxiv_link"
          :href="arxiv_link"
          target="_blank"
          class="border rounded-md flex border-gray-200 p-2 self-start items-center dark:border-black dark:bg-gray-700 hover:ring ring-accent-500"
          title="View paper"
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
      <div v-if="abstract" class="col-start-2 col-span-2">
        <button
          type="button"
          class="text-sm text-accent-500 hover:underline"
          @click="showAbstract = !showAbstract"
        >
          {{ showAbstract ? "Hide abstract" : "Show abstract" }}
        </button>
        <div v-if="showAbstract" class="mt-2 text-sm text-gray-500 dark:text-white">
          {{ abstract }}
        </div>
      </div>
    </div>
  </CardGeneric>
</template> 