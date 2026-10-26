<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useHead } from "@vueuse/head";
import { useDark } from "@vueuse/core";
import "leaflet/dist/leaflet.css";
import { parseNewsCSV, formatNewsDate, type NewsItem } from "../utils/csvParser";
import { useLanguage } from "../composables/useLanguage";

useHead({
  title: "María Grandury - World Map",
  meta: [
    { name: "description", content: "Where María Grandury has published, given talks and worked, on a world map." },
    { property: "og:title", content: "María Grandury - World Map" },
    { property: "og:image", content: "https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "@mariagrandury" },
    { name: "twitter:creator", content: "@mariagrandury" },
  ],
});

const { lang } = useLanguage();
const isDark = useDark();
const news = ref<NewsItem[]>([]);
const mapEl = ref<HTMLElement>();
let map: any;

const remoteNews = computed(() => news.value.filter((item) => item.lat === undefined));

const escapeHtml = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

const truncate = (s: string, n: number) => (s.length > n ? `${s.slice(0, n).trimEnd()}…` : s);

const tooltipHtml = (location: string, items: NewsItem[], maxLength = Infinity) =>
  `<b>${escapeHtml(location)}</b>` +
  items
    .map((i) => `<div class="news-tip">${formatNewsDate(i.date, lang.value)} · ${escapeHtml(truncate(i.text, maxLength))}</div>`)
    .join("");

onMounted(async () => {
  news.value = parseNewsCSV(await (await fetch("/data/news.csv")).text());

  // Leaflet needs `window`, so it is imported on the client only
  const L = await import("leaflet");
  map = L.map(mapEl.value!, { worldCopyJump: true, scrollWheelZoom: false, zoomSnap: 0.5 });
  L.tileLayer(`https://{s}.basemaps.cartocdn.com/${isDark.value ? "dark_all" : "light_all"}/{z}/{x}/{y}{r}.png`, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 18,
  }).addTo(map);

  // One dot per location: highlighted news are always visible, the rest show on hover
  const byLocation: Record<string, NewsItem[]> = {};
  news.value
    .filter((item) => item.lat !== undefined)
    .forEach((item) => (byLocation[`${item.lat},${item.lng}`] ||= []).push(item));

  const markers: any[] = [];
  const labelled: any[] = [];
  Object.values(byLocation).forEach((items) => {
    const highlighted = items.filter((i) => i.highlighted);
    const all = tooltipHtml(items[0].location, items);
    const short = tooltipHtml(items[0].location, highlighted.slice(0, 1), 50);
    const marker = L.circleMarker([items[0].lat!, items[0].lng!], {
      radius: 5 + Math.min(items.length, 8),
      color: highlighted.length ? "#db2777" : "#06b6d4",
      fillOpacity: 0.6,
      weight: 2,
    }).addTo(map);

    marker.bindTooltip(highlighted.length ? short : all, {
      permanent: highlighted.length > 0,
      direction: "top",
      className: "news-tooltip",
    });
    if (highlighted.length) {
      marker.on("mouseover", () => {
        marker.getTooltip()!.getElement()!.style.visibility = "visible";
        marker.setTooltipContent(all).getTooltip()!.bringToFront();
      });
      marker.on("mouseout", () => {
        marker.setTooltipContent(short);
        placeLabels();
      });
      labelled.push(marker);
    }
    markers.push(marker);
  });

  // Greedy placement: each highlight label takes the first free side, or hides until zooming in
  const overlaps = (a: DOMRect, b: DOMRect) =>
    a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;
  const placeLabels = () => {
    const box = mapEl.value!.getBoundingClientRect();
    const inside = (r: DOMRect) => r.left >= box.left && r.right <= box.right && r.top >= box.top && r.bottom <= box.bottom;
    const placed: DOMRect[] = [];
    labelled.forEach((marker) => {
      const tooltip = marker.getTooltip();
      const el: HTMLElement = tooltip.getElement();
      const fits = ["right", "left", "top", "bottom"].some((direction) => {
        tooltip.options.direction = direction;
        tooltip.update();
        const rect = el.getBoundingClientRect();
        if (!inside(rect) || placed.some((p) => overlaps(p, rect))) return false;
        placed.push(rect);
        return true;
      });
      el.style.visibility = fits ? "visible" : "hidden";
    });
  };

  map.fitBounds(L.featureGroup(markers).getBounds(), { padding: [20, 20] });
  map.on("zoomend", placeLabels);
  placeLabels();
});

onUnmounted(() => map?.remove());
</script>

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <h1 class="flex gap-2 items-center">
      <div class="font-semibold tracking-tight text-4xl">{{ lang === 'en' ? 'Around the World' : 'Por el mundo' }}</div>
      <i-fluent-earth-24-regular style="font-size: 2rem" />
    </h1>
    <p class="py-6">
      {{ lang === 'en'
        ? 'Papers, talks and milestones by location. Pink dots are highlights (zoom in if some labels are hidden); hover over any dot to see everything that happened there.'
        : 'Artículos, charlas e hitos por lugar. Los puntos rosas son destacados (haz zoom si alguna etiqueta está oculta); pasa el ratón sobre un punto para ver todo lo que pasó allí.' }}
      <router-link to="/news" class="text-accent-500 hover:underline">
        {{ lang === 'en' ? 'See the list →' : 'Ver la lista →' }}
      </router-link>
    </p>
    <div ref="mapEl" class="w-full rounded-md border border-gray-200 dark:border-black z-0" style="height: 70vh" />

    <h2 class="text-2xl font-semibold pt-12 pb-3">{{ lang === 'en' ? 'Remote & online' : 'En remoto y online' }}</h2>
    <ul class="flex flex-col gap-2 lg:px-24 sm:px-12">
      <li v-for="item in remoteNews" :key="item.date + item.text" class="grid gap-3 grid-cols-[5.5rem,1fr]">
        <span class="text-sm text-gray-500 dark:text-gray-400">{{ formatNewsDate(item.date, lang) }}</span>
        <span :class="{ 'font-semibold': item.highlighted }">{{ item.text }}</span>
      </li>
    </ul>
  </Container>
</template>

<style>
.news-tooltip {
  width: 15rem;
  white-space: normal;
  padding: 4px 6px;
}
.news-tip {
  font-size: 0.7rem;
  line-height: 1rem;
}
</style>
