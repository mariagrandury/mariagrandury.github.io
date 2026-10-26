<!-- Compact, academic-style publication entry with a BibTeX copy button -->
<script setup lang="ts">
import { computed, ref } from "vue";
import type { Paper } from "../utils/csvParser";
import { isFirstAuthor, toBibtex } from "../utils/bibtex";

const props = defineProps<{ paper: Paper }>();

const authorParts = computed(() => props.paper.authors.split("María Grandury"));
const showBibtex = ref(false);
const copied = ref(false);
const bibtex = computed(() => toBibtex(props.paper));

const copy = async () => {
  await navigator.clipboard.writeText(bibtex.value);
  copied.value = true;
  setTimeout(() => (copied.value = false), 1500);
};

const links = computed(() =>
  [
    ["Paper", props.paper.paper_link],
    ["Website", props.paper.website_link],
    ["Hugging Face", props.paper.hf_link],
    ["Code", props.paper.github_link],
    ["Slides", props.paper.slides_link],
    ["Poster", props.paper.poster_link],
  ].filter(([, href]) => href) as [string, string][]
);
</script>

<template>
  <div class="py-2">
    <div class="font-semibold">
      {{ paper.title }}
      <span v-if="isFirstAuthor(paper)" class="ml-1 text-xs font-normal rounded px-1.5 py-0.5 bg-accent-500/10 text-accent-600 dark:text-accent-400">First author</span>
      <span v-if="paper.award" class="ml-1 text-xs font-normal text-pink-600">★ {{ paper.award }}</span>
    </div>
    <div class="paper-authors text-sm text-gray-700 dark:text-gray-300" :title="paper.authors">
      <template v-for="(part, index) in authorParts" :key="index">
        {{ part }}<b v-if="index < authorParts.length - 1">María Grandury</b>
      </template>
    </div>
    <div v-if="paper.venue" class="text-sm italic text-gray-500 dark:text-gray-400">{{ paper.venue }}</div>
    <div class="flex flex-wrap gap-x-3 text-sm mt-0.5">
      <a v-for="[label, href] in links" :key="label" :href="href" target="_blank" class="text-accent-500 hover:underline">[{{ label }}]</a>
      <button type="button" class="text-accent-500 hover:underline" @click="showBibtex = !showBibtex">[BibTeX]</button>
    </div>
    <div v-if="showBibtex" class="relative mt-2">
      <pre class="text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-black rounded p-3 overflow-x-auto">{{ bibtex }}</pre>
      <button type="button" class="absolute top-2 right-2 text-xs border rounded px-2 bg-white dark:bg-gray-700" @click="copy">
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </div>
  </div>
</template>

<style>
.paper-authors {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
