<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  title: string;
  authors: string;
  venue?: string;
  abstract?: string;
  paper_link?: string;
  hf_link?: string;
  linkedin_link?: string;
  x_link?: string;
  award?: string;
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
        <p v-if="award" class="text-sm text-accent-500">{{ award }}</p>
      </div>
      <div class="flex flex-wrap gap-2 justify-end">
        <a
          v-if="paper_link"
          :href="paper_link"
          target="_blank"
          rel="noopener noreferrer"
          class="border rounded-md flex border-gray-200 p-2 self-start items-center dark:border-black dark:bg-gray-700 hover:ring ring-accent-500"
          title="Paper (journal, proceedings, or arXiv)"
        >
          <i-fluent-document-24-regular style="font-size: 1.25rem;" />
        </a>
        <a
          v-if="hf_link"
          :href="hf_link"
          target="_blank"
          rel="noopener noreferrer"
          class="border rounded-md flex border-gray-200 p-2 self-start items-center dark:border-black dark:bg-gray-700 hover:ring ring-accent-500"
          title="Hugging Face"
        >
          <i-noto:hugging-face style="font-size: 1.25rem;" />
        </a>
        <a
          v-if="linkedin_link"
          :href="linkedin_link"
          target="_blank"
          rel="noopener noreferrer"
          class="border rounded-md flex border-gray-200 p-2 self-start items-center dark:border-black dark:bg-gray-700 hover:ring ring-accent-500"
          title="LinkedIn post"
        >
          <i-simple-icons-linkedin style="font-size: 1.25rem;" />
        </a>
        <a
          v-if="x_link"
          :href="x_link"
          target="_blank"
          rel="noopener noreferrer"
          class="border rounded-md flex border-gray-200 p-2 self-start items-center dark:border-black dark:bg-gray-700 hover:ring ring-accent-500"
          title="Post on X"
        >
          <i-simple-icons-x style="font-size: 1.25rem;" />
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
