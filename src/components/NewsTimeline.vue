<!-- News timeline: one vertical line, filter buttons by type, highlights as cards (highlights only by default) -->
<script setup lang="ts">
import { ref, computed } from "vue";
import { formatNewsDate, type NewsItem } from "../utils/csvParser";
import { useLanguage } from "../composables/useLanguage";
import { useNews, categoryOf, countByCategory } from "../composables/useNews";

const { lang } = useLanguage();
const news = useNews();
const active = ref<string[]>([]);
const onlyHighlights = ref(true);

// Emphasise highlights only when they are mixed with the rest
const emphasise = (item: NewsItem) => item.highlighted && !onlyHighlights.value;

const counts = computed(() => countByCategory(news.value));
const visible = computed(() =>
  news.value.filter(
    (item) => (!active.value.length || active.value.includes(item.category)) && (!onlyHighlights.value || item.highlighted),
  ),
);

// Show the year once, on its first item
const showYear = (item: NewsItem, index: number) =>
  index === 0 || visible.value[index - 1].date.slice(0, 4) !== item.date.slice(0, 4);
</script>

<template>
  <div>
    <NewsFilters v-model="active" :counts="counts" :total="news.length" class="py-4">
      <button
        class="rounded-full border px-3 py-1 text-sm border-yellow-400"
        :class="{ 'bg-yellow-400 text-gray-900': onlyHighlights }"
        @click="onlyHighlights = !onlyHighlights"
      >
        ★ {{ lang === 'en' ? 'Highlights' : 'Destacados' }}
      </button>
    </NewsFilters>

    <ol class="relative border-l-2 border-gray-200 dark:border-gray-700 ml-24 my-6">
      <li v-for="(item, index) in visible" :key="item.date + item.text" class="relative pl-6 pb-5">
        <span
          v-if="showYear(item, index)"
          class="absolute -left-24 top-0 w-20 text-right text-xl font-semibold tabular-nums"
        >{{ item.date.slice(0, 4) }}</span>
        <span
          class="absolute rounded-full ring-4 ring-white dark:ring-gray-900"
          :style="{
            background: categoryOf(item).color,
            ...(emphasise(item)
              ? { left: '-9px', top: '4px', width: '16px', height: '16px' }
              : { left: '-6px', top: '6px', width: '10px', height: '10px' }),
          }"
        />
        <div
          :class="emphasise(item) ? 'rounded-md border-l-4 bg-gray-50 dark:bg-gray-800 p-3 shadow-sm' : ''"
          :style="emphasise(item) ? { borderColor: categoryOf(item).color } : {}"
        >
          <div class="text-xs text-gray-500 dark:text-gray-400">
            {{ formatNewsDate(item.date, lang) }} · {{ categoryOf(item).emoji }} {{ categoryOf(item)[lang] }} · {{ item.location }}
          </div>
          <a v-if="item.link" :href="item.link" target="_blank" class="hover:underline" :class="{ 'font-semibold': emphasise(item) }">{{ item.text }}</a>
          <span v-else :class="{ 'font-semibold': emphasise(item) }">{{ item.text }}</span>
        </div>
      </li>
    </ol>
  </div>
</template>
