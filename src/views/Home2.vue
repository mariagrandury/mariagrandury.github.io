<!-- Proposal: Home with slimmer projects, talks and papers sections (no illustrations) and a "Featured in" strip -->
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useInterval } from "@vueuse/core";
import { useLanguage } from "../composables/useLanguage";
import { Icon } from "@iconify/vue";
import { parsePapersCSV, parseEventsCSV, parseProjectsCSV, localizeEvent, type Paper, type Project, type Event } from "../utils/csvParser";
import { convertIconName } from "../utils/iconRegistry";

const greetings = ref(["Hola,", "Hi,", "Bonjour,", "Hallo,", "Olá,"]);
const counter = useInterval(1500);
const index = computed(() => counter.value % greetings.value.length);

const { lang } = useLanguage();

const papers = ref<Paper[]>([]);
const projects = ref<Project[]>([]);
const events = ref<Event[]>([]);

onMounted(async () => {
  try {
    const [papersResponse, projectsResponse, eventsResponse] = await Promise.all([
      fetch("/data/papers.csv"),
      fetch("/data/projects.csv"),
      fetch("/data/events.csv"),
    ]);
    papers.value = parsePapersCSV(await papersResponse.text());
    projects.value = parseProjectsCSV(await projectsResponse.text());
    events.value = parseEventsCSV(await eventsResponse.text());
  } catch (error) {
    console.error("Error loading data:", error);
  }
});

const highlightPapers = computed(() =>
  papers.value.filter((paper) => paper.status === "highlights")
);
const featuredProjects = computed(() =>
  projects.value.filter((project) => project.status === "featured")
);
const highlightTalks = computed(() =>
  events.value.filter((event) => event.status === "highlights")
);

// Shared helpers for the proposal sections
const year = (p: Paper) => (p.venue || "").match(/(20\d\d)(?!.*20\d\d)/)?.[1] || "";
// Venue acronym, e.g. "(EMNLP)" or "(ACL)", else the start of the venue
const shortVenue = (p: Paper) => (p.venue || "").match(/\(([A-Z][\w&-]*(?: [\w&-]+)?)\)/)?.[1] || (p.venue || "").split(/[,(]/)[0].trim();
// Highlighted talks first, then the most recent talks with a photo, up to three
const homeTalks = computed(() => {
  const picks = [...highlightTalks.value];
  for (const e of events.value) {
    if (picks.length >= 3) break;
    if (e.image_link && e.image_link.includes("events/") && !isMedia(e) && !picks.includes(e)) picks.push(e);
  }
  return picks.slice(0, 3);
});
const imageSrc = (link?: string) => (!link ? "" : /^https?:/.test(link) ? link : "/" + link.replace(/^\//, ""));
const isMedia = (e: Event) => /podcast|article|blog|radio|newspaper|interview|tv/i.test(e.type || "");
// One entry per outlet, most recent first, using the acronym in parentheses when there is one
const mediaOutlets = computed(() => {
  const seen = new Set<string>();
  return events.value.filter(isMedia).flatMap((e) => {
    const name = (e.organizer || "").match(/\(([^)]+)\)/)?.[1] || (e.organizer || "").split(",")[0].trim();
    if (!name || seen.has(name) || /SomosNLP/.test(name)) return [];
    seen.add(name);
    return [{ name, link: e.recording_link || e.event_link }];
  });
});
</script>

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8" style="grid-template-columns: 2fr 3fr;">
      <div class="p-8">
        <h1 class="font-medium mb-3 tracking-tighter text-5xl">
          {{ greetings[index] }}
        </h1>
        <div class="text-4xl mb-4">
          {{ lang === 'en' ? "I'm María Grandury!" : "soy María Grandury" }}
        </div>
        <br>
        <img
          class="rounded-full w-64 h-64"
          src="https://mariagrandury.ai/images/profile/maria_grandury.png"
          alt="María Grandury"
        />
      </div>
      <div>
        <div>
          <ul class="flex flex-col gap-1">
            <li>
              {{ lang === 'en' ? '💡 Natural Language Processing Researcher' : '💡 Investigadora en Procesamiento del Lenguaje Natural' }}
            </li>
            <li>🎯 #ResponsibleNLP, #MultilingualNLP, #LLMEvaluation</li>
            <br>
            <li>
              {{ lang === 'en' ? '🚀 Founder' : '🚀 Fundadora' }}
              <a
                href="https://somosnlp.org"
                target="_blank"
                class="text-accent-500 hover:underline"
                >@SomosNLP</a
              >
            </li>
            <li>
              🤗 Fellow
              <a
                href="https://huggingface.co/mariagrandury"
                target="_blank"
                class="text-accent-500 hover:underline"
                >@HuggingFace
              </a>
            </li>
            <br>
            <li>
              {{ lang === 'en' ? '🔍 PhD Student' : '🔍 Doctoranda' }}
              <a
                href="https://nlp.epfl.ch"
                target="_blank"
                class="text-accent-500 hover:underline"
                >@EPFL NLP,</a
              >
              {{ lang === 'en' ? 'supervised by Prof. Antoine Bosselut' : 'supervisada por el Prof. Antoine Bosselut' }}
            </li>
            <li>
              {{ lang === 'en' ? "🎓 Mathematician & Physicist, Master's in Language Technologies" : '🎓 Matemática y Física, Máster en Tecnologías del Lenguaje' }}
            </li>
            <br>
            <li>
              {{ lang === 'en'
                ? '📣 Freelance Speaker and AI Advisor, recipient of the Spanish Transition Fund from the'
                : '📣 Autónoma, ponente y asesora de IA, beneficiaria del Fondo de Transición Justa del' }}
              <a
                href="/docs/subvencion_fondo_de_transicion_justa.pdf"
                target="_blank"
                class="text-accent-500 hover:underline"
                >{{ lang === 'en' ? 'Ministry of Industry, Commerce, and Employment' : 'Ministerio de Industria, Comercio y Empleo' }}</a>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Container>

  <Container class="bg-white dark:bg-gray-900">
    <div class="px-8 lg:py-8">
      <div class="text-3xl mb-2 flex gap-2 items-center">
        {{ lang === 'en' ? 'News' : 'Noticias' }}
        <i-fluent-news-24-regular style="font-size: 2rem" />
      </div>
      <NewsTimeline />
    </div>
  </Container>

  <!-- Option 2: same three sections, each slimmer and without the illustrations -->
  <Container class="bg-white dark:bg-gray-900">
    <div class="px-8 lg:py-8">
      <div class="flex flex-wrap gap-4 items-baseline justify-between mb-4">
        <div class="text-3xl">{{ lang === 'en' ? 'Highlighted projects, join us!' : 'Proyectos destacados, ¡únete!' }}</div>
        <router-link to="/projects" class="text-sm font-medium text-accent-500 hover:underline">{{ lang === 'en' ? 'More projects' : 'Más proyectos' }} →</router-link>
      </div>
      <div class="grid gap-4 md:grid-cols-2">
        <CardProject
          v-for="project in featuredProjects"
          :key="project.title"
          :title="project.title"
          :tags="project.tags"
          :link="project.link"
          :color="project.color"
          :icon="project.icon"
          :description="project.description"
        />
      </div>
    </div>
  </Container>

  <Container class="bg-white dark:bg-gray-900">
    <div class="px-8 lg:py-8">
      <div class="flex flex-wrap gap-4 items-baseline justify-between mb-4">
        <div class="text-3xl">{{ lang === 'en' ? 'Highlighted talks' : 'Charlas destacadas' }}</div>
        <router-link to="/divulgation" class="text-sm font-medium text-accent-500 hover:underline">{{ lang === 'en' ? 'More talks' : 'Más charlas' }} →</router-link>
      </div>
      <div class="grid gap-4 md:grid-cols-3">
        <a v-for="talk in homeTalks" :key="talk.talk" :href="talk.recording_link || talk.event_link" target="_blank" class="group">
          <CardGeneric class="h-full flex flex-col">
            <img v-if="talk.image_link" :src="imageSrc(talk.image_link)" :alt="talk.event" loading="lazy" class="w-full h-44 object-cover" />
            <div class="p-4">
              <div class="font-medium leading-snug group-hover:underline">{{ localizeEvent(talk, lang).title }}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ localizeEvent(talk, lang).subtitle }}</div>
            </div>
          </CardGeneric>
        </a>
      </div>
      <!-- "Featured in" strip: outlet names as grey wordmarks (swap for grey-scale logos when we have them) -->
      <div class="mt-8 flex flex-wrap gap-x-8 gap-y-3 items-center justify-center border-y border-gray-100 dark:border-gray-800 py-4">
        <span class="text-xs uppercase tracking-wider text-gray-400">{{ lang === 'en' ? 'Featured in' : 'En los medios' }}</span>
        <a
          v-for="outlet in mediaOutlets.slice(0, 8)"
          :key="outlet.name"
          :href="outlet.link"
          target="_blank"
          class="text-lg font-semibold tracking-tight text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
        >{{ outlet.name }}</a>
      </div>
    </div>
  </Container>

  <Container class="bg-white dark:bg-gray-900">
    <div class="px-8 lg:py-8">
      <div class="flex flex-wrap gap-4 items-baseline justify-between mb-4">
        <div class="text-3xl">{{ lang === 'en' ? 'Highlighted papers' : 'Artículos destacados' }}</div>
        <router-link to="/research" class="text-sm font-medium text-accent-500 hover:underline">{{ lang === 'en' ? 'More research' : 'Más investigación' }} →</router-link>
      </div>
      <div class="grid gap-4 md:grid-cols-3">
        <a v-for="paper in highlightPapers.slice(0, 3)" :key="paper.title" :href="paper.paper_link" target="_blank" class="group">
          <CardGeneric class="h-full flex flex-col">
            <div class="h-44 p-3 bg-white border-b border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden" :class="paper.image ? '' : paper.color">
              <img v-if="paper.image" :src="paper.image" :alt="`Figure 1 of ${paper.title}`" loading="lazy" class="max-w-full max-h-full object-contain" />
              <Icon v-else-if="convertIconName(paper.icon || '')" :icon="convertIconName(paper.icon || '')!" style="font-size: 3rem" />
            </div>
            <div class="p-4">
              <div class="text-xs text-gray-500 dark:text-gray-400">{{ shortVenue(paper) }} · {{ year(paper) }}</div>
              <div class="font-medium leading-snug group-hover:underline">{{ paper.title }}</div>
            </div>
          </CardGeneric>
        </a>
      </div>
    </div>
  </Container>


  <!-- # TODO: Add a line with the logos (in gray scale) of conferences and journals I have published in "Published by" -->

  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8 xl:grid-cols-2">

      <div class="px-8">
        <div class="text-3xl mb-4">
          <!-- {{ lang === 'en' ? 'Funding and awards' : 'Financiación y reconocimientos' }} -->
          {{ lang === 'en' ? 'Funding' : 'Financiación' }}
        </div>
        <div class="grid py-6 gap-x-6 gap-y-3">
          <div
            class="
              border-2
              border-gray-200
              rounded-md
              bg-white
              dark:bg-gray-900
              p-4
              flex
              justify-center
              items-center
              shadow-sm
            "
          >
            <img
              src="https://mariagrandury.ai/images/awards/2024_fondo_transicion_justa.png"
              alt="Fondo de transición justa"
              class="max-w-xs rounded"
            />
          </div>
        </div>
      </div>

      <!-- <div class="px-8 flex flex-col justify-center items-center gap-6 h-full">
        <div
          class="
            border-2
            border-gray-200
            rounded-md
            bg-white
            dark:bg-gray-900
            p-4
            flex
            justify-center
            items-center
            shadow-sm
          "
        >
          <img
            src="https://mariagrandury.ai/images/awards/2026_hf_fellow.png"
            alt="Hugging Face Fellow 2026"
            class="max-w-xs rounded"
          />
        </div>
      </div> -->

      <div class="px-2 flex flex-col justify-center items-center gap-6 h-full">
        <div
          class="
            border-2
            border-gray-200
            rounded-md
            bg-white
            dark:bg-gray-900
            p-2
            flex
            justify-center
            items-center
            shadow-sm
            w-full
          "
        >
          <img
            src="https://mariagrandury.ai/images/awards/2026_CONSOLIDACYL.png"
            alt="CONSOLIDACYL 2026"
            class="w-full max-w-lg rounded"
          />
        </div>
      </div>
    </div>

    <div class="px-8 flex flex-col justify-center items-center h-full">
      <router-link
        class="
          flex
          justify-center
          place-self-center
          font-medium
          p-6
          gap-3
          items-center
          border-dashed
          rounded-md
          border-2 border-gray-200
          hover:border-accent-400
        "
        to="/about"
      >{{ lang === 'en' ? 'Full Bio' : 'Ver Biografía' }}
      </router-link>
    </div>

  </Container>


</template>
