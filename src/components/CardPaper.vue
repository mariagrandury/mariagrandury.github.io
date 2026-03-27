<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  title: string;
  authors: string;
  venue?: string;
  abstract?: string;
  paper_link?: string;
  hf_link?: string;
  slides_link?: string;
  poster_link?: string;
  github_link?: string;
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

const actionBtnClass =
  "inline-flex items-center gap-1 rounded border border-gray-200 px-2 py-0.5 text-xs dark:border-black dark:bg-gray-700 hover:ring ring-accent-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500";

const abstractBtnClass = computed(() =>
  [
    actionBtnClass,
    showAbstract.value ? "bg-accent-500/10 text-accent-600 dark:text-accent-400" : "text-gray-800 dark:text-gray-200",
  ].join(" ")
);
</script>

<template>
  <CardGeneric class="p-6">
    <div class="grid gap-3 grid-cols-[auto,1fr]">
      <div class="rounded-md h-4rem grid text-2rem w-4rem place-items-center" :class="color">
        <component :is="icon" v-if="icon" />
      </div>
      <div class="grid gap-3 min-w-0">
        <h2 class="font-semibold">{{ title }}</h2>
        <p class="text-sm text-gray-800 dark:text-gray-200">
          <template v-for="(part, index) in authorParts" :key="index">
            {{ part }}<span v-if="index < authorParts.length - 1" class="underline">María Grandury</span>
          </template>
        </p>
        <p v-if="venue" class="text-sm italic text-gray-500 dark:text-gray-400">{{ venue }}</p>
        <p v-if="award" class="text-sm text-accent-500">{{ award }}</p>

        <div class="flex flex-wrap gap-1.5">
          <button
            v-if="abstract"
            type="button"
            :class="abstractBtnClass"
            @click="showAbstract = !showAbstract"
          >
            <i-fluent-text-align-left-24-regular class="text-[0.875rem] shrink-0" aria-hidden="true" />
            Abstract
          </button>
          <a
            v-if="paper_link"
            :href="paper_link"
            target="_blank"
            rel="noopener noreferrer"
            :class="`${actionBtnClass} text-gray-800 dark:text-gray-200`"
            title="Paper (journal, proceedings, or arXiv)"
          >
            <i-fluent-document-24-regular class="text-[0.875rem] shrink-0" aria-hidden="true" />
            Paper
          </a>
          <a
            v-if="hf_link"
            :href="hf_link"
            target="_blank"
            rel="noopener noreferrer"
            :class="`${actionBtnClass} text-gray-800 dark:text-gray-200`"
            title="Hugging Face"
          >
            <i-noto:hugging-face class="text-[0.875rem] shrink-0" aria-hidden="true" />
            Hugging Face
          </a>
          <a
            v-if="slides_link"
            :href="slides_link"
            target="_blank"
            rel="noopener noreferrer"
            :class="`${actionBtnClass} text-gray-800 dark:text-gray-200`"
            title="Slides"
          >
            <i-fluent-design-ideas-24-regular class="text-[0.875rem] shrink-0" aria-hidden="true" />
            Slides
          </a>
          <a
            v-if="poster_link"
            :href="poster_link"
            target="_blank"
            rel="noopener noreferrer"
            :class="`${actionBtnClass} text-gray-800 dark:text-gray-200`"
            title="Poster"
          >
            <i-fluent-design-ideas-24-regular class="text-[0.875rem] shrink-0" aria-hidden="true" />
            Poster
          </a>
          <a
            v-if="github_link"
            :href="github_link"
            target="_blank"
            rel="noopener noreferrer"
            :class="`${actionBtnClass} text-gray-800 dark:text-gray-200`"
            title="GitHub repository"
          >
            <i-simple-icons-github class="text-[0.875rem] shrink-0" aria-hidden="true" />
            GitHub
          </a>
          <a
            v-if="linkedin_link"
            :href="linkedin_link"
            target="_blank"
            rel="noopener noreferrer"
            :class="`${actionBtnClass} text-gray-800 dark:text-gray-200`"
            title="LinkedIn"
          >
            <i-simple-icons-linkedin class="text-[0.875rem] shrink-0" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            v-if="x_link"
            :href="x_link"
            target="_blank"
            rel="noopener noreferrer"
            :class="`${actionBtnClass} text-gray-800 dark:text-gray-200`"
            title="Post on X"
          >
            <i-simple-icons-x class="text-[0.875rem] shrink-0" aria-hidden="true" />
            X
          </a>
        </div>

        <div v-if="abstract && showAbstract" class="text-sm text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700 pt-3">
          {{ abstract }}
        </div>
      </div>
    </div>
  </CardGeneric>
</template>
