<!-- Proposal: talks & media in the same timeline style as the news, with format filters, a thumbnail per item and wide highlighted cards with the photo below -->
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useHead } from "@vueuse/head";
import { parseEventsCSV, localizeEvent, formatNewsDate, type Event } from "../utils/csvParser";
import { useLanguage } from "../composables/useLanguage";

useHead({ title: "María Grandury - Talks & Media (timeline)" });

const { lang } = useLanguage();
const events = ref<Event[]>([]);
onMounted(async () => {
  try {
    events.value = parseEventsCSV(await (await fetch("/data/events.csv")).text());
  } catch (error) {
    console.error("Error loading events:", error);
  }
});

const formats = {
  talk: { emoji: "🎤", en: "Talks & keynotes", es: "Charlas y keynotes", color: "#0891b2" },
  panel: { emoji: "💬", en: "Round tables & panels", es: "Mesas redondas y paneles", color: "#7c3aed" },
  teaching: { emoji: "🎓", en: "Workshops & teaching", es: "Talleres y docencia", color: "#059669" },
  media: { emoji: "📰", en: "Media", es: "Medios", color: "#d97706" },
} as const;
type Format = keyof typeof formats;

const formatOf = (e: Event): Format => {
  const t = (e.type || "").toLowerCase();
  if (/podcast|article|blog|radio|newspaper|interview/.test(t)) return "media";
  if (/round table|panel|gala|mentorship/.test(t)) return "panel";
  if (/workshop|lecture|course|module|masterclass|school/.test(t)) return "teaching";
  return "talk";
};

const formatFilter = ref<string[]>([]);
const onlyHighlights = ref(false);
const isHighlight = (e: Event) => e.status === "highlights";

const formatOptions = computed(() =>
  (Object.keys(formats) as Format[]).map((key) => ({
    key,
    label: `${formats[key].emoji} ${formats[key][lang.value]}`,
    color: formats[key].color,
    count: events.value.filter((e) => formatOf(e) === key).length,
  })),
);

const visible = computed(() =>
  events.value.filter(
    (e) =>
      (!formatFilter.value.length || formatFilter.value.includes(formatOf(e))) && (!onlyHighlights.value || isHighlight(e)),
  ),
);

const countries = computed(
  () => new Set(events.value.map((e) => (e.location || "").replace(/\(.*?\)|[^\p{L}\s,]/gu, "").split(",").pop()!.trim()).filter((c) => c && c !== "Remote")).size,
);

const showYear = (e: Event, index: number) => index === 0 || visible.value[index - 1].year !== e.year;
const cleanType = (t?: string) => (t || "").replace(/\s*\(Featured\)/, "");
const imageSrc = (link: string) => (/^https?:/.test(link) ? link : "/" + link.replace(/^\//, ""));
</script>

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <h1 class="flex gap-2 items-center font-semibold tracking-tight text-4xl">
      {{ lang === 'en' ? 'Talks, Interviews & Media' : 'Charlas, Entrevistas y Medios' }}
      <i-fluent-chat-12-regular style="font-size: 2rem" />
    </h1>
    <p class="py-4 text-gray-600 dark:text-gray-300">
      {{ events.length }} {{ lang === 'en' ? 'activities' : 'actividades' }} · {{ countries }} {{ lang === 'en' ? 'countries' : 'países' }} ·
      {{ lang === 'en' ? 'Reach out if you would like me to give a keynote, talk or workshop!' : '¡Contáctame si quieres que imparta una keynote, charla o taller!' }}
    </p>

    <div class="flex flex-col gap-2 py-2 sticky top-0 z-10 bg-white dark:bg-gray-900">
      <FilterPills v-model="formatFilter" :options="formatOptions" :total="events.length">
        <button
          class="rounded-full border px-3 py-1 text-sm border-yellow-400"
          :class="{ 'bg-yellow-400 text-gray-900': onlyHighlights }"
          @click="onlyHighlights = !onlyHighlights"
        >
          ★ {{ lang === 'en' ? 'Highlights' : 'Destacados' }}
        </button>
      </FilterPills>
    </div>

    <ol class="relative border-l-2 border-gray-200 dark:border-gray-700 ml-24 my-6">
      <li v-for="(e, index) in visible" :key="e.date + e.talk" class="relative pl-6 pb-4">
        <span v-if="showYear(e, index)" class="absolute -left-24 top-0 w-20 text-right text-xl font-semibold tabular-nums">{{ e.year }}</span>
        <span
          class="absolute rounded-full ring-4 ring-white dark:ring-gray-900"
          :style="{ background: formats[formatOf(e)].color, left: '-7px', top: '22px', width: '12px', height: '12px' }"
        />
        <!-- Highlight: wide card, photo below the text -->
        <div
          v-if="isHighlight(e)"
          class="rounded-md border-l-4 bg-gray-50 dark:bg-gray-800 p-4 shadow-sm"
          :style="{ borderColor: formats[formatOf(e)].color }"
        >
          <div class="text-xs text-gray-500 dark:text-gray-400">
            ★ {{ formatNewsDate(e.date, lang) }} · {{ formats[formatOf(e)].emoji }} {{ cleanType(e.type) }} · {{ e.location }}
          </div>
          <a v-if="e.event_link || e.recording_link" :href="e.recording_link || e.event_link" target="_blank" class="text-lg font-semibold hover:underline">
            {{ localizeEvent(e, lang).title }}
          </a>
          <span v-else class="text-lg font-semibold">{{ localizeEvent(e, lang).title }}</span>
          <div class="text-sm text-gray-600 dark:text-gray-300">{{ localizeEvent(e, lang).subtitle }}</div>
          <div class="flex gap-3 pt-1 text-xs">
            <a v-if="e.event_link" :href="e.event_link" target="_blank" class="text-accent-500 hover:underline">{{ lang === 'en' ? 'Event' : 'Evento' }}</a>
            <a v-if="e.recording_link" :href="e.recording_link" target="_blank" class="text-accent-500 hover:underline">{{ lang === 'en' ? 'Recording / article' : 'Grabación / artículo' }}</a>
            <a v-if="e.sm_link" :href="e.sm_link" target="_blank" class="text-accent-500 hover:underline">{{ lang === 'en' ? 'Post' : 'Publicación' }}</a>
          </div>
          <img
            v-if="e.image_link"
            :src="imageSrc(e.image_link)"
            :alt="e.event"
            loading="lazy"
            class="mt-3 rounded-md max-w-full w-auto object-contain"
            style="max-height: 26rem"
          />
        </div>

        <!-- Regular item: compact card with a thumbnail on the left -->
        <div v-else class="max-w-3xl flex gap-3 items-start rounded-md border border-gray-100 dark:border-gray-700 p-3 hover:shadow-sm">
          <div class="flex-shrink-0 w-24 h-20 rounded-md bg-gray-50 dark:bg-gray-800 grid place-items-center overflow-hidden">
            <img v-if="e.image_link" :src="imageSrc(e.image_link)" :alt="e.event" loading="lazy" class="w-full h-full object-cover" />
            <span v-else class="text-2xl">{{ formats[formatOf(e)].emoji }}</span>
          </div>
          <div class="min-w-0">
            <div class="text-xs text-gray-500 dark:text-gray-400">
              {{ formatNewsDate(e.date, lang) }} · {{ formats[formatOf(e)].emoji }} {{ cleanType(e.type) }} · {{ e.location }}
            </div>
            <a v-if="e.event_link || e.recording_link" :href="e.recording_link || e.event_link" target="_blank" class="font-medium hover:underline">
              {{ localizeEvent(e, lang).title }}
            </a>
            <span v-else class="font-medium">{{ localizeEvent(e, lang).title }}</span>
            <div class="text-sm text-gray-600 dark:text-gray-300">{{ localizeEvent(e, lang).subtitle }}</div>
            <div class="flex gap-3 pt-1 text-xs">
              <a v-if="e.event_link" :href="e.event_link" target="_blank" class="text-accent-500 hover:underline">{{ lang === 'en' ? 'Event' : 'Evento' }}</a>
              <a v-if="e.recording_link" :href="e.recording_link" target="_blank" class="text-accent-500 hover:underline">{{ lang === 'en' ? 'Recording / article' : 'Grabación / artículo' }}</a>
              <a v-if="e.sm_link" :href="e.sm_link" target="_blank" class="text-accent-500 hover:underline">{{ lang === 'en' ? 'Post' : 'Publicación' }}</a>
            </div>
          </div>
        </div>
      </li>
    </ol>
  </Container>
</template>
