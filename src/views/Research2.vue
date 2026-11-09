<!-- Proposal: papers as a figure gallery with venue-type / role / topic filters -->
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useHead } from "@vueuse/head";
import { parsePapersCSV, type Paper } from "../utils/csvParser";
import { Icon } from "@iconify/vue";
import { convertIconName } from "../utils/iconRegistry";
import { useLanguage } from "../composables/useLanguage";

useHead({ title: "María Grandury - Research (gallery)" });

const { lang } = useLanguage();
const papers = ref<Paper[]>([]);
onMounted(async () => {
  try {
    papers.value = parsePapersCSV(await (await fetch("/data/papers.csv")).text());
  } catch (error) {
    console.error("Error loading papers:", error);
  }
});

const venueTypes = {
  conference: { en: "Conferences", es: "Congresos", color: "#0891b2" },
  journal: { en: "Journals", es: "Revistas", color: "#7c3aed" },
  workshop: { en: "Workshops", es: "Workshops", color: "#059669" },
  other: { en: "Preprints & thesis", es: "Preprints y tesis", color: "#6b7280" },
} as const;
type VenueType = keyof typeof venueTypes;

const venueType = (p: Paper): VenueType => {
  const v = p.venue || "";
  if (/thesis|arXiv preprint/i.test(v)) return "other";
  if (/workshop/i.test(v)) return "workshop";
  if (/^Proceedings|Conference|Advances in Neural/i.test(v)) return "conference";
  return "journal";
};
const year = (p: Paper) => (p.venue || "").match(/(20\d\d)(?!.*20\d\d)/)?.[1] || "";
const firstAuthor = (p: Paper) => p.authors.trim().startsWith("María Grandury") || /co-first/i.test(p.authors);

const typeFilter = ref<string[]>([]);
const roleFilter = ref<string[]>([]);
const topicFilter = ref<string[]>([]);

const typeOptions = computed(() =>
  (Object.keys(venueTypes) as VenueType[]).map((key) => ({
    key,
    label: venueTypes[key][lang.value],
    color: venueTypes[key].color,
    count: papers.value.filter((p) => venueType(p) === key).length,
  })),
);
const roleOptions = computed(() => [
  { key: "first", label: lang.value === "en" ? "First author" : "Primera autora", color: "#db2777", count: papers.value.filter(firstAuthor).length },
]);
const topicOptions = computed(() => {
  const counts: Record<string, number> = {};
  papers.value.forEach((p) => p.tags.forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
  return Object.entries(counts)
    .filter(([, n]) => n > 1)
    .sort((a, b) => b[1] - a[1])
    .map(([key, count]) => ({ key, label: key, count }));
});

const visible = computed(() =>
  papers.value.filter(
    (p) =>
      (!typeFilter.value.length || typeFilter.value.includes(venueType(p))) &&
      (!roleFilter.value.length || firstAuthor(p)) &&
      (!topicFilter.value.length || p.tags.some((t) => topicFilter.value.includes(t))),
  ),
);

const authorParts = (authors: string) => authors.split("María Grandury");

// Abstracts are collapsed by default and opened per card
const openAbstracts = ref(new Set<string>());
const toggleAbstract = (title: string) => {
  const next = new Set(openAbstracts.value);
  next.has(title) ? next.delete(title) : next.add(title);
  openAbstracts.value = next;
};
</script>

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <h1 class="flex gap-2 items-center font-semibold tracking-tight text-4xl">
      {{ lang === 'en' ? 'Research' : 'Investigación' }}
      <i-fluent-design-ideas-24-regular style="font-size: 2rem" />
    </h1>
    <p class="py-4 text-gray-600 dark:text-gray-300">
      {{ papers.length }} {{ lang === 'en' ? 'publications' : 'publicaciones' }} ·
      {{ papers.filter(firstAuthor).length }} {{ lang === 'en' ? 'as first author' : 'como primera autora' }}
    </p>

    <div class="flex flex-col gap-2 pb-6">
      <FilterPills v-model="typeFilter" :options="typeOptions" :total="papers.length" />
      <FilterPills v-model="roleFilter" :options="roleOptions" single hide-all />
      <FilterPills v-model="topicFilter" :options="topicOptions" hide-all />
    </div>

    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="paper in visible"
        :key="paper.title"
        class="flex flex-col rounded-md border bg-white dark:bg-gray-900 shadow-sm overflow-hidden"
        :class="paper.status === 'highlights' ? 'border-pink-300 ring-1 ring-pink-300' : 'border-gray-200 dark:border-gray-700'"
      >
        <a :href="paper.paper_link" target="_blank" rel="noopener noreferrer" class="block h-48 bg-white border-b border-gray-100 dark:border-gray-700">
          <img v-if="paper.image" :src="paper.image" :alt="`Figure 1 of ${paper.title}`" loading="lazy" class="w-full h-full object-contain p-3" />
          <div v-else class="w-full h-full grid place-items-center text-5xl" :class="paper.color">
            <Icon v-if="convertIconName(paper.icon || '')" :icon="convertIconName(paper.icon || '')!" />
          </div>
        </a>
        <div class="flex flex-col gap-2 p-4 flex-1">
          <div class="flex flex-wrap gap-2 items-center text-xs">
            <span class="rounded-full px-2 py-0.5 text-white" :style="{ background: venueTypes[venueType(paper)].color }">
              {{ venueTypes[venueType(paper)][lang] }}
            </span>
            <span class="text-gray-500 dark:text-gray-400">{{ year(paper) }}</span>
            <span v-if="paper.status === 'highlights'" class="text-pink-600">★ {{ lang === 'en' ? 'Highlight' : 'Destacado' }}</span>
            <span v-if="paper.award" class="text-accent-500">{{ paper.award }}</span>
          </div>
          <h2 class="font-semibold leading-snug">{{ paper.title }}</h2>
          <p class="text-xs text-gray-600 dark:text-gray-300">
            <template v-for="(part, index) in authorParts(paper.authors)" :key="index">
              {{ part }}<span v-if="index < authorParts(paper.authors).length - 1" class="underline font-semibold">María Grandury</span>
            </template>
          </p>
          <p class="text-xs italic text-gray-500 dark:text-gray-400">{{ paper.venue }}</p>
          <div v-if="paper.abstract && openAbstracts.has(paper.title)" class="text-xs text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700 pt-2">
            {{ paper.abstract }}
          </div>
          <div class="flex flex-wrap gap-3 mt-auto pt-2 text-sm">
            <button v-if="paper.abstract" type="button" class="text-accent-500 hover:underline" @click="toggleAbstract(paper.title)">
              {{ openAbstracts.has(paper.title) ? (lang === 'en' ? 'Hide abstract' : 'Ocultar resumen') : (lang === 'en' ? 'Abstract' : 'Resumen') }}
            </button>
            <a v-if="paper.paper_link" :href="paper.paper_link" target="_blank" class="text-accent-500 hover:underline">Paper</a>
            <a v-if="paper.website_link" :href="paper.website_link" target="_blank" class="text-accent-500 hover:underline">Website</a>
            <a v-if="paper.hf_link" :href="paper.hf_link" target="_blank" class="text-accent-500 hover:underline">Hugging Face</a>
            <a v-if="paper.github_link" :href="paper.github_link" target="_blank" class="text-accent-500 hover:underline">GitHub</a>
            <a v-if="paper.poster_link" :href="paper.poster_link" target="_blank" class="text-accent-500 hover:underline">Poster</a>
            <a v-if="paper.slides_link" :href="paper.slides_link" target="_blank" class="text-accent-500 hover:underline">Slides</a>
          </div>
        </div>
      </article>
    </div>
  </Container>
</template>
