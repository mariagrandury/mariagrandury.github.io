<!-- SVG map without tiles: world + Europe zoom, dots sized by number of items, click a city to list them -->
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { geoNaturalEarth1, geoMercator, geoPath, type GeoProjection } from "d3-geo";
import { feature } from "topojson-client";
import worldUrl from "world-atlas/countries-110m.json?url";
import { formatNewsDate, type NewsItem } from "../utils/csvParser";
import { useLanguage } from "../composables/useLanguage";
import { useNews, categoryOf, countryOf, countByCategory } from "../composables/useNews";

const { lang } = useLanguage();
const news = useNews();
const countries = ref<any[]>([]);
const selected = ref<string>("");
const active = ref<string[]>([]);

// news.csv country names -> world-atlas names
const alias: Record<string, string> = { USA: "United States of America", UAE: "United Arab Emirates" };

onMounted(async () => {
  const world = await (await fetch(worldUrl)).json();
  countries.value = (feature(world, world.objects.countries) as any).features;
});

const counts = computed(() => countByCategory(news.value));
const filtered = computed(() =>
  news.value.filter((i) => !active.value.length || active.value.includes(i.category)),
);

const places = computed(() => {
  const byPlace: Record<string, NewsItem[]> = {};
  filtered.value.filter((i) => i.lat !== undefined).forEach((i) => (byPlace[i.location] ||= []).push(i));
  return Object.entries(byPlace)
    .map(([location, items]) => ({ location, items, lng: items[0].lng!, lat: items[0].lat!, highlighted: items.some((i) => i.highlighted) }))
    .sort((a, b) => b.items.length - a.items.length);
});

const visitedCount = computed(() => {
  const c: Record<string, number> = {};
  filtered.value.forEach((i) => {
    const country = countryOf(i);
    if (country) c[alias[country] || country] = (c[alias[country] || country] || 0) + 1;
  });
  return c;
});

// Europe frame is fitted to all European places, so it does not jump when filtering
const W = 960;
const frames = computed(() => {
  const world = geoNaturalEarth1().fitExtent([[0, 0], [W, 480]], { type: "Sphere" });
  const europePoints = news.value.filter((i) => i.lat !== undefined && i.lng! > -12 && i.lng! < 30 && i.lat! > 33 && i.lat! < 56);
  const europe = geoMercator().fitExtent([[40, 30], [W - 40, 450]], {
    type: "MultiPoint",
    coordinates: europePoints.map((i) => [i.lng!, i.lat!]),
  });
  return [
    { key: "world", projection: world as GeoProjection, labels: false },
    { key: "europe", projection: europe as GeoProjection, labels: true },
  ].map((f) => ({ ...f, path: geoPath(f.projection) }));
});

const fill = (name: string) => {
  const n = visitedCount.value[name];
  return n ? `rgba(8, 145, 178, ${Math.min(0.15 + n / 40, 0.6)})` : undefined;
};

const radius = (n: number) => 3 + Math.sqrt(n) * 2.5;

const selectedItems = computed(() =>
  selected.value
    ? places.value.find((p) => p.location === selected.value)?.items || []
    : filtered.value.filter((i) => i.highlighted),
);
</script>

<template>
  <div>
    <p class="pb-4 text-gray-600 dark:text-gray-300">
      {{ lang === 'en' ? 'Click a city to see the events. Pink dots include highlights.' : 'Haz clic en una ciudad para ver los eventos. Los puntos rosas incluyen destacados.' }}
    </p>
    <NewsFilters v-model="active" :counts="counts" :total="news.length" class="pb-4" />

    <div class="grid gap-6 xl:grid-cols-2">
      <figure v-for="frame in frames" :key="frame.key" class="rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
        <svg :viewBox="`0 0 ${W} 480`" class="w-full h-auto bg-sky-50 dark:bg-gray-800">
          <path
            v-for="c in countries"
            :key="c.id"
            :d="frame.path(c) || ''"
            class="fill-gray-200 dark:fill-gray-700 stroke-white dark:stroke-gray-900"
            :style="fill(c.properties.name) ? { fill: fill(c.properties.name) } : {}"
            stroke-width="0.5"
          >
            <title>{{ c.properties.name }}{{ visitedCount[c.properties.name] ? ` · ${visitedCount[c.properties.name]}` : '' }}</title>
          </path>
          <g
            v-for="p in places"
            :key="p.location"
            :transform="`translate(${frame.projection([p.lng, p.lat])})`"
            class="cursor-pointer"
            @click="selected = selected === p.location ? '' : p.location"
          >
            <circle
              :r="radius(p.items.length)"
              :fill="p.highlighted ? '#db2777' : '#0891b2'"
              fill-opacity="0.75"
              :stroke="selected === p.location ? '#111827' : 'white'"
              stroke-width="1.5"
            >
              <title>{{ p.location }} · {{ p.items.length }}</title>
            </circle>
            <text
              v-if="frame.labels && (p.highlighted || p.items.length > 2)"
              :x="radius(p.items.length) + 3"
              y="4"
              class="text-xs fill-gray-800 dark:fill-gray-100 pointer-events-none"
              style="paint-order: stroke; stroke: rgba(255,255,255,0.8); stroke-width: 3px"
            >{{ p.location.split(',')[0] }}</text>
          </g>
        </svg>
      </figure>
    </div>

    <h3 class="text-2xl font-semibold pt-8 pb-3">
      {{ selected || (lang === 'en' ? 'Highlights' : 'Destacados') }}
      <button v-if="selected" class="text-sm text-accent-500 hover:underline ml-2" @click="selected = ''">
        {{ lang === 'en' ? 'Show all highlights' : 'Ver todos los destacados' }}
      </button>
    </h3>
    <ul class="flex flex-col gap-2">
      <li v-for="item in selectedItems" :key="item.date + item.text" class="grid gap-3 grid-cols-[5.5rem,1.5rem,1fr] items-baseline">
        <span class="text-sm text-gray-500 dark:text-gray-400 tabular-nums">{{ formatNewsDate(item.date, lang) }}</span>
        <span>{{ categoryOf(item).emoji }}</span>
        <span>
          <a v-if="item.link" :href="item.link" target="_blank" class="hover:underline" :class="{ 'font-semibold': item.highlighted }">{{ item.text }}</a>
          <span v-else :class="{ 'font-semibold': item.highlighted }">{{ item.text }}</span>
          <span v-for="extra in item.extraLinks || []" :key="extra.url" class="text-xs"> · <a :href="extra.url" target="_blank" class="text-accent-500 hover:underline">{{ extra.label }}</a></span>
          <span v-if="!selected" class="text-sm text-gray-500 dark:text-gray-400"> · {{ item.location }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>
