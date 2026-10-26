<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useHead } from "@vueuse/head";
import { parsePapersCSV, type Paper } from "../utils/csvParser";
import { isFirstAuthor, paperYear, toBibtex } from "../utils/bibtex";
import { useLanguage } from "../composables/useLanguage";

useHead({
  title: "María Grandury - Publications",
  meta: [
    { name: "description", content: "Publications of María Grandury on multilingual and multicultural LLM evaluation, with BibTeX." },
    { property: "og:title", content: "María Grandury - Publications" },
    { property: "og:image", content: "https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "@mariagrandury" },
    { name: "twitter:creator", content: "@mariagrandury" },
  ],
});

const { lang } = useLanguage();
const papers = ref<Paper[]>([]);
const filter = ref<"all" | "first" | "highlights">("all");

onMounted(async () => {
  try {
    papers.value = parsePapersCSV(await (await fetch("/data/papers.csv")).text()).filter((p) => p.status !== "hidden");
  } catch (error) {
    console.error("Error loading papers:", error);
  }
});

const filtered = computed(() =>
  papers.value.filter((p) =>
    filter.value === "first" ? isFirstAuthor(p) : filter.value === "highlights" ? p.status === "highlights" : true
  )
);

const byYear = computed(() => {
  const grouped: Record<string, Paper[]> = {};
  filtered.value.forEach((p) => (grouped[paperYear(p) || "Other"] ||= []).push(p));
  return Object.keys(grouped)
    .sort((a, b) => b.localeCompare(a))
    .map((year) => ({ year, papers: grouped[year] }));
});

const downloadBibtex = () => {
  const blob = new Blob([papers.value.map(toBibtex).join("\n\n")], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "grandury_publications.bib";
  a.click();
  URL.revokeObjectURL(a.href);
};

const filters = computed(() => [
  ["all", lang.value === "en" ? `All (${papers.value.length})` : `Todas (${papers.value.length})`],
  ["first", lang.value === "en" ? "First author" : "Primera autora"],
  ["highlights", lang.value === "en" ? "Highlights" : "Destacadas"],
]);
</script>

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <h1 class="flex gap-2 items-center">
      <div class="font-semibold tracking-tight text-4xl">{{ lang === 'en' ? 'Publications' : 'Publicaciones' }}</div>
      <i-fluent-book-24-regular style="font-size: 2rem" />
    </h1>
    <div class="flex flex-wrap gap-3 items-center py-6">
      <button
        v-for="[key, label] in filters"
        :key="key"
        type="button"
        class="rounded-full border px-3 py-1 text-sm"
        :class="filter === key ? 'border-accent-500 bg-accent-500/10' : 'border-gray-200 dark:border-black'"
        @click="filter = key as any"
      >
        {{ label }}
      </button>
      <button type="button" class="text-sm text-accent-500 hover:underline ml-auto" @click="downloadBibtex">
        {{ lang === 'en' ? 'Download all BibTeX' : 'Descargar todo en BibTeX' }}
      </button>
      <a href="https://scholar.google.com/citations?user=3mc_-QsAAAAJ" target="_blank" class="text-sm text-accent-500 hover:underline">Google Scholar</a>
    </div>

    <div class="lg:px-24 sm:px-12">
      <section v-for="group in byYear" :key="group.year" class="mb-6">
        <h2 class="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 mb-1">{{ group.year }}</h2>
        <PaperItem v-for="paper in group.papers" :key="paper.title" :paper="paper" />
      </section>
    </div>
  </Container>
</template>
