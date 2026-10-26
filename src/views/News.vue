<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useHead } from "@vueuse/head";
import { parseNewsCSV, formatNewsDate, type NewsItem } from "../utils/csvParser";
import { useLanguage } from "../composables/useLanguage";

useHead({
  title: "María Grandury - News",
  meta: [
    { name: "description", content: "Latest news from María Grandury: papers, talks, media appearances and career updates." },
    { property: "og:title", content: "María Grandury - News" },
    { property: "og:image", content: "https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "@mariagrandury" },
    { name: "twitter:creator", content: "@mariagrandury" },
  ],
});

const { lang } = useLanguage();
const news = ref<NewsItem[]>([]);
const onlyHighlights = ref(false);

onMounted(async () => {
  try {
    news.value = parseNewsCSV(await (await fetch("/data/news.csv")).text());
  } catch (error) {
    console.error("Error loading news:", error);
  }
});

const newsByYear = computed(() => {
  const grouped: Record<string, NewsItem[]> = {};
  news.value
    .filter((item) => !onlyHighlights.value || item.highlighted)
    .forEach((item) => (grouped[item.date.slice(0, 4)] ||= []).push(item));
  return Object.keys(grouped)
    .sort((a, b) => b.localeCompare(a))
    .map((year) => ({ year, items: grouped[year] }));
});

const categoryEmoji: Record<string, string> = {
  paper: "📄",
  talk: "🎤",
  media: "📰",
  career: "🚀",
  award: "🏆",
  service: "🤝",
};
</script>

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <h1 class="flex gap-2 items-center">
      <div class="font-semibold tracking-tight text-4xl">{{ lang === 'en' ? 'News' : 'Noticias' }}</div>
      <i-fluent-news-24-regular style="font-size: 2rem" />
    </h1>
    <div class="flex flex-wrap gap-4 items-center py-6">
      <label class="flex gap-2 items-center cursor-pointer select-none">
        <input type="checkbox" v-model="onlyHighlights" class="accent-cyan-500" />
        {{ lang === 'en' ? 'Highlights only' : 'Solo destacados' }}
      </label>
      <router-link to="/world" class="text-accent-500 hover:underline">
        {{ lang === 'en' ? 'See them on a world map →' : 'Verlas en un mapa →' }}
      </router-link>
    </div>

    <div class="lg:px-24 sm:px-12">
      <section v-for="group in newsByYear" :key="group.year" class="mb-8">
        <h2 class="text-2xl font-semibold mb-3">{{ group.year }}</h2>
        <ul class="flex flex-col gap-2">
          <li
            v-for="item in group.items"
            :key="item.date + item.text"
            class="grid gap-3 grid-cols-[5.5rem,1.5rem,1fr] items-baseline"
          >
            <span class="text-sm text-gray-500 dark:text-gray-400 tabular-nums">{{ formatNewsDate(item.date, lang) }}</span>
            <span :title="item.category">{{ categoryEmoji[item.category] || '•' }}</span>
            <span :class="{ 'font-semibold': item.highlighted }">
              <a v-if="item.link" :href="item.link" target="_blank" class="hover:underline hover:text-accent-500">{{ item.text }}</a>
              <template v-else>{{ item.text }}</template>
              <span class="text-sm text-gray-500 dark:text-gray-400"> · {{ item.location }}</span>
            </span>
          </li>
        </ul>
      </section>
    </div>
  </Container>
</template>
