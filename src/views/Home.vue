<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useInterval } from "@vueuse/core";
import { useLanguage } from "../composables/useLanguage";
import { parsePapersCSV, parseEventsCSV, parseProjectsCSV, type Paper, type Project, type Event } from "../utils/csvParser";

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

  <Container class="bg-yellow-50 dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8 xl:grid-cols-2">
      <div class="px-8">
        <div class="text-2xl font-medium mb-6">
          {{ lang === 'en'
            ? 'Do you speak Spanish or Portuguese? Would you like to help adapt AI systems to your language and culture?'
            : '¿Hablas español o portugués? ¿Te gustaría ayudar a adecuar los sistemas de IA a tu lengua y cultura?' }}
        </div>
        <a
          href="https://somosnlp.org"
          target="_blank"
          class="inline-flex items-center gap-3 font-semibold px-6 py-3 rounded-md bg-yellow-500 hover:bg-yellow-400 text-white dark:bg-yellow-600 dark:hover:bg-yellow-500 transition-colors"
        >
          {{ lang === 'en' ? 'Join SomosNLP.org!' : '¡Únete a SomosNLP.org!' }}
          <i-fluent-arrow-right-24-regular style="font-size: 1.25rem" />
        </a>
      </div>
      <div class="flex justify-center items-center px-8">
        <a href="https://somosnlp.org" target="_blank">
          <img
            src="/images/logos/SomosNLP.svg"
            alt="SomosNLP"
            class="max-w-xs w-full"
          />
        </a>
      </div>
    </div>
  </Container>

  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8 xl:grid-cols-2">

      <div class="px-8">
        <div class="text-3xl mb-4">
          {{ lang === 'en' ? 'Highlighted projects, join us!' : 'Proyectos destacados, ¡únete!' }}
        </div>
        <div class="grid py-6 gap-x-6 gap-y-3">
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

      <div class="flex flex-col flex-shrink gap-12">
        <img
          class="w-screen"
          src="https://raw.githubusercontent.com/mariagrandury/mariagrandury.github.io/legacy/assets/undraw/projects_undraw_freelancer_long_hair.svg"
          alt="Projects"
        />
        <router-link
          class="
            flex
            justify-center
            place-self-center
            font-medium
            p-6
            gap-3
            text-align-center
            items-center
            border-dashed
            rounded-md
            border-2 border-gray-200
            hover:border-accent-400
          "
          to="/projects"
          >{{ lang === 'en' ? 'More Projects' : 'Más Proyectos' }}</router-link
        >
      </div>

    </div>
  </Container>

  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8 xl:grid-cols-2">


      <div class="flex flex-col flex-shrink gap-12">
        <img
          src="https://raw.githubusercontent.com/mariagrandury/mariagrandury.github.io/legacy/assets/undraw/talks_undraw_conference.svg"
          alt="Talks"
        />
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
          to="/divulgation"
          >{{ lang === 'en' ? 'More Talks' : 'Más Charlas' }}</router-link
        >
      </div>

      <div class="px-8">
        <div class="text-3xl mb-4">
          {{ lang === 'en' ? 'Highlighted talks, join us!' : 'Charlas destacadas, ¡únete!' }}
        </div>
        <div class="grid py-6 gap-x-6 gap-y-3">
          <CardMediaSummary
            v-for="talk in highlightTalks"
            :key="talk.talk"
            :talk="talk.talk"
            :event="talk.event"
            :event_link="talk.event_link"
            :image_link="talk.image_link"
            :recording_link="talk.recording_link"
            :tags="talk.tags"
          >
            <i-tabler:external-link style="font-size: 1.25rem" />
          </CardMediaSummary>
        </div>
      </div>

    </div>
  </Container>

  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8">

      <div class="px-8 w-full">
        <div class="text-3xl mb-4">
          {{ lang === 'en' ? 'Highlighted papers' : 'Artículos destacados' }}
        </div>
        <div class="grid py-6 gap-y-3">
          <CardPaper
            v-for="paper in highlightPapers"
            :key="paper.title"
            :title="paper.title"
            :authors="paper.authors"
            :venue="paper.venue"
            :paper_link="paper.paper_link"
            :website_link="paper.website_link"
            :hf_link="paper.hf_link"
            :slides_link="paper.slides_link"
            :poster_link="paper.poster_link"
            :github_link="paper.github_link"
            :linkedin_link="paper.linkedin_link"
            :x_link="paper.x_link"
            :award="paper.award"
            :color="paper.color"
            :icon="paper.icon"
            :abstract="paper.abstract"
          />
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
          to="/research"
        >{{ lang === 'en' ? 'More Research' : 'Más Investigación' }}</router-link>
      </div>

    </div>
  </Container>

  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8 xl:grid-cols-2">

      <div class="px-8">
        <div class="text-3xl mb-4">
          {{ lang === 'en' ? 'Funding and awards' : 'Financiación y reconocimientos' }}
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

      <div class="px-8 flex flex-col justify-center items-center gap-6 h-full">
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
        >{{ lang === 'en' ? 'Full Bio' : 'Ver Biografía' }}</router-link>
      </div>

    </div>
  </Container>


</template>
