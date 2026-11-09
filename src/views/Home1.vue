<!-- Proposal: Home with one "Explore" section (Research / Talks & Media / Projects) below the news -->
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

  <!-- Option 1: one "Explore" section with three columns instead of three alternating blocks -->
  <Container class="bg-white dark:bg-gray-900">
    <div class="px-8 lg:py-8">
      <div class="text-3xl mb-6 flex gap-2 items-center">
        {{ lang === 'en' ? 'Explore' : 'Explora' }}
        <i-fluent-compass-northwest-24-regular style="font-size: 2rem" />
      </div>
      <div class="grid gap-6 lg:grid-cols-3">

        <CardGeneric class="p-5 flex flex-col gap-4">
          <div>
            <h2 class="text-xl font-semibold flex gap-2 items-center"><i-fluent-design-ideas-24-regular />{{ lang === 'en' ? 'Research' : 'Investigación' }}</h2>
            <p class="text-sm text-gray-600 dark:text-gray-300">{{ lang === 'en' ? 'Multilingual and multicultural LLM evaluation.' : 'Evaluación multilingüe y multicultural de LLMs.' }}</p>
          </div>
          <a v-for="paper in highlightPapers.slice(0, 3)" :key="paper.title" :href="paper.paper_link" target="_blank" class="flex gap-3 items-start group">
            <div class="flex-shrink-0 w-24 h-16 rounded border border-gray-100 dark:border-gray-700 bg-white grid place-items-center overflow-hidden" :class="paper.image ? '' : paper.color">
              <img v-if="paper.image" :src="paper.image" :alt="`Figure 1 of ${paper.title}`" loading="lazy" class="w-full h-full object-contain p-1" />
              <Icon v-else-if="convertIconName(paper.icon || '')" :icon="convertIconName(paper.icon || '')!" style="font-size: 1.5rem" />
            </div>
            <div class="min-w-0">
              <div class="text-sm font-medium leading-snug group-hover:underline">{{ paper.title }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">{{ shortVenue(paper) }} · {{ year(paper) }}</div>
            </div>
          </a>
          <router-link to="/research" class="mt-auto pt-2 text-sm font-medium text-accent-500 hover:underline">{{ lang === 'en' ? 'All publications' : 'Todas las publicaciones' }} →</router-link>
        </CardGeneric>

        <CardGeneric class="p-5 flex flex-col gap-4">
          <div>
            <h2 class="text-xl font-semibold flex gap-2 items-center"><i-fluent-chat-12-regular />{{ lang === 'en' ? 'Talks & Media' : 'Charlas y Medios' }}</h2>
            <p class="text-sm text-gray-600 dark:text-gray-300">{{ lang === 'en' ? 'Keynotes, round tables, workshops and interviews.' : 'Keynotes, mesas redondas, talleres y entrevistas.' }}</p>
          </div>
          <a v-for="talk in homeTalks" :key="talk.talk" :href="talk.recording_link || talk.event_link" target="_blank" class="flex gap-3 items-start group">
            <div class="flex-shrink-0 w-24 h-16 rounded bg-gray-50 dark:bg-gray-800 overflow-hidden">
              <img v-if="talk.image_link" :src="imageSrc(talk.image_link)" :alt="talk.event" loading="lazy" class="w-full h-full object-cover" />
            </div>
            <div class="min-w-0">
              <div class="text-sm font-medium leading-snug group-hover:underline">{{ localizeEvent(talk, lang).title }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">{{ localizeEvent(talk, lang).subtitle }}</div>
            </div>
          </a>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            {{ lang === 'en' ? 'Featured in' : 'En medios como' }}
            <template v-for="(outlet, i) in mediaOutlets.slice(0, 6)" :key="outlet.name">
              <a :href="outlet.link" target="_blank" class="font-medium text-gray-700 dark:text-gray-200 hover:underline">{{ outlet.name }}</a><span v-if="i < Math.min(mediaOutlets.length, 6) - 1">, </span>
            </template>
          </p>
          <router-link to="/divulgation" class="mt-auto pt-2 text-sm font-medium text-accent-500 hover:underline">{{ lang === 'en' ? 'All talks & media' : 'Todas las charlas y medios' }} →</router-link>
        </CardGeneric>

        <CardGeneric class="p-5 flex flex-col gap-4">
          <div>
            <h2 class="text-xl font-semibold flex gap-2 items-center"><i-fluent-rocket-24-regular />{{ lang === 'en' ? 'Projects' : 'Proyectos' }}</h2>
            <p class="text-sm text-gray-600 dark:text-gray-300">{{ lang === 'en' ? 'Open-source resources for the languages of LATAM and Spain. Join us!' : 'Recursos abiertos para las lenguas de LATAM y España. ¡Únete!' }}</p>
          </div>
          <a v-for="project in featuredProjects" :key="project.title" :href="project.link" target="_blank" class="flex gap-3 items-start group">
            <div class="flex-shrink-0 rounded-md grid place-items-center" style="width: 3rem; height: 3rem" :class="project.color">
              <Icon v-if="convertIconName(project.icon)" :icon="convertIconName(project.icon)!" style="font-size: 1.5rem" />
            </div>
            <div class="min-w-0">
              <div class="text-sm font-medium leading-snug group-hover:underline">{{ project.title }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">{{ project.tags.join(' · ') }}</div>
            </div>
          </a>
          <router-link to="/projects" class="mt-auto pt-2 text-sm font-medium text-accent-500 hover:underline">{{ lang === 'en' ? 'All projects' : 'Todos los proyectos' }} →</router-link>
        </CardGeneric>

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
