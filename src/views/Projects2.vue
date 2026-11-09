<!-- Proposal: featured projects as a hero band + an even card grid with status and tag filters -->
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useHead } from "@vueuse/head";
import { Icon } from "@iconify/vue";
import { parseProjectsCSV, type Project } from "../utils/csvParser";
import { convertIconName } from "../utils/iconRegistry";
import { useLanguage } from "../composables/useLanguage";

useHead({ title: "María Grandury - Projects (grid)" });

const { lang } = useLanguage();
const projects = ref<Project[]>([]);
onMounted(async () => {
  try {
    projects.value = parseProjectsCSV(await (await fetch("/data/projects.csv")).text());
  } catch (error) {
    console.error("Error loading projects:", error);
  }
});

const listed = computed(() => projects.value.filter((p) => p.status !== "hidden"));
const featured = computed(() => listed.value.filter((p) => p.status === "featured"));

const statusFilter = ref<string[]>([]);
const tagFilter = ref<string[]>([]);

const statusOptions = computed(() => [
  { key: "current", label: lang.value === "en" ? "Current & recent" : "Actuales y recientes", color: "#0891b2", count: listed.value.filter((p) => p.status === "current").length },
  { key: "previous", label: lang.value === "en" ? "Previous" : "Anteriores", color: "#6b7280", count: listed.value.filter((p) => p.status === "previous").length },
]);
const tagOptions = computed(() => {
  const counts: Record<string, number> = {};
  listed.value.filter((p) => p.status !== "featured").forEach((p) => p.tags.forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
  return Object.entries(counts)
    .filter(([, n]) => n > 1)
    .sort((a, b) => b[1] - a[1])
    .map(([key, count]) => ({ key, label: key, count }));
});

const grid = computed(() =>
  listed.value.filter(
    (p) =>
      p.status !== "featured" &&
      (!statusFilter.value.length || statusFilter.value.includes(p.status)) &&
      (!tagFilter.value.length || p.tags.some((t) => tagFilter.value.includes(t))),
  ),
);
</script>

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <h1 class="flex gap-2 items-center font-semibold tracking-tight text-4xl">
      {{ lang === 'en' ? 'Open-Source NLP Projects' : 'Proyectos de Código Abierto de PLN' }}
      <i-fluent-design-ideas-24-regular style="font-size: 2rem" />
    </h1>
    <p class="py-4 text-gray-600 dark:text-gray-300">
      {{ lang === 'en'
        ? 'Increasing the representation of the linguistic and cultural diversity of the world in language models. Do you want to collaborate?'
        : 'Mejorando la representación de la diversidad lingüística y cultural del mundo en los modelos de lenguaje. ¿Quieres colaborar?' }}
    </p>

    <div class="grid gap-6 md:grid-cols-2 py-4">
      <a
        v-for="p in featured"
        :key="p.title"
        :href="p.link"
        target="_blank"
        class="flex gap-4 rounded-md border-2 border-accent-300 bg-accent-50 dark:bg-gray-800 p-6 hover:ring ring-accent-500"
      >
        <div class="rounded-md flex-shrink-0 grid place-items-center" style="width: 4rem; height: 4rem" :class="p.color">
          <Icon v-if="convertIconName(p.icon)" :icon="convertIconName(p.icon)!" style="font-size: 2rem" />
        </div>
        <div class="min-w-0 break-words" style="overflow-wrap: anywhere">
          <div class="text-xs uppercase tracking-wide text-accent-600 dark:text-accent-300">★ {{ lang === 'en' ? 'Featured' : 'Destacado' }}</div>
          <h2 class="text-xl font-semibold">{{ p.title }}</h2>
          <div class="text-sm text-gray-700 dark:text-gray-200" v-html="p.description" />
        </div>
      </a>
    </div>

    <div class="flex flex-col gap-2 py-4">
      <FilterPills v-model="statusFilter" :options="statusOptions" :total="listed.length - featured.length" />
      <FilterPills v-model="tagFilter" :options="tagOptions" hide-all />
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="p in grid"
        :key="p.title"
        class="flex flex-col gap-3 rounded-md border border-gray-200 dark:border-gray-700 p-4 shadow-sm"
        :class="{ 'opacity-80': p.status === 'previous' }"
      >
        <div class="flex gap-3 items-center">
          <div class="rounded-md h-3rem w-3rem flex-shrink-0 grid place-items-center" :class="p.color || 'text-accent-900 bg-accent-50 dark:text-white dark:bg-accent-600'">
            <Icon v-if="convertIconName(p.icon)" :icon="convertIconName(p.icon)!" style="font-size: 1.5rem" />
          </div>
          <h2 class="font-semibold leading-snug flex-1">
            <a v-if="p.link" :href="p.link" target="_blank" class="hover:underline">{{ p.title }}</a>
            <span v-else>{{ p.title }}</span>
          </h2>
        </div>
        <div class="text-sm text-gray-700 dark:text-gray-200" style="overflow-wrap: anywhere" v-html="p.description" />
        <div class="flex flex-wrap gap-2 mt-auto">
          <span v-for="tag in p.tags" :key="tag" class="rounded bg-gray-50 border border-gray-100 dark:border-black dark:bg-gray-700 text-xs px-2 py-0.5">{{ tag }}</span>
        </div>
      </article>
    </div>
  </Container>
</template>
