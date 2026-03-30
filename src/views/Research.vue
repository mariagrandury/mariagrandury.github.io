<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useHead } from "@vueuse/head";
import { parseEventsCSV, parsePapersCSV, type Paper, type Event } from "../utils/csvParser";
import { useLanguage } from "../composables/useLanguage";

useHead({
  title: "María Grandury - Research Interests",
  meta: [
    {
      name: "description",
      content:
        "Hello! I'm María, an NLP Researcher and the Founder @ SomosNLP.org | Here you can find out more about previous and current research interests",
    },
    {
      property: "og:title",
      content: "María Grandury - Research Interests",
    },
    {
      property: "og:image",
      content:
        "https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg",
    },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "@mariagrandury" },
    { name: "twitter:creator", content: "@mariagrandury" },
  ],
});

const papers = ref<Paper[]>([]);
const events = ref<Event[]>([]);

const { lang } = useLanguage();

onMounted(async () => {
  try {
    const [papersResponse, eventsResponse] = await Promise.all([
      fetch("/data/papers.csv"),
      fetch("/data/events.csv")
    ]);
    const papersText = await papersResponse.text();
    const eventsText = await eventsResponse.text();
    papers.value = parsePapersCSV(papersText);
    events.value = parseEventsCSV(eventsText);
  } catch (error) {
    console.error("Error loading data:", error);
  }
});

const highlightPapers = computed(() =>
  papers.value.filter((paper) => paper.status === "highlights")
);

const publishedPapers = computed(() =>
  papers.value.filter((paper) => paper.status === "published")
);

const guestLectures = computed(() =>
  events.value.filter((event) =>
    event.type && event.type.toLowerCase().includes("lecture")
  )
);
</script>

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div>
      <h1 class="flex gap-2 items-center">
        <div class="font-semibold tracking-tight text-4xl">
          {{ lang === 'en' ? 'Research' : 'Investigación' }}
        </div>
        <i-fluent-design-ideas-24-regular style="font-size: 2rem" />
      </h1>
      <h2 class="py-6" v-if="lang === 'en'">
        Cultural knowledge is highly relevant for an LLM to understand a language. My main interest is to gain a deeper comprehension of the capabilities and limitations of LLMs since we cannot improve what we cannot measure.
        At the EPFL NLP lab, I'm currently doing research on Multilingual and Multicultural LLM Evaluation.
        I want to explore cultural and linguistic bias evaluation and mitigation in LLMs with a holistic approach to language understanding.
      </h2>
      <h2 class="py-6" v-else>
        El conocimiento cultural es fundamental para que un LLM comprenda un idioma. Mi principal interés es obtener una comprensión más profunda de las capacidades y limitaciones de los LLMs, ya que no podemos mejorar lo que no podemos medir.
        En el laboratorio EPFL NLP, realizo investigación sobre Evaluación Multilingüe y Multicultural de LLMs.
        Quiero explorar la evaluación y mitigación de sesgos culturales y lingüísticos en LLMs con un enfoque holístico de la comprensión del lenguaje.
      </h2>
      <p class="italic text-sm text-gray-500" v-if="lang === 'en'">
        Last update: March 2026 | For up-to-date information check my
        <a
          href="https://scholar.google.com/citations?user=3mc_-QsAAAAJ"
          target="_blank"
          class="text-accent-500 hover:underline"
          >Google Scholar</a
          >
          or
          <a
            href="https://www.semanticscholar.org/author/Mar%C3%ADa-Grandury/2176184513"
            target="_blank"
            class="text-accent-500 hover:underline"
            >Semantic Scholar</a
          > profiles!
      </p>
      <p class="italic text-sm text-gray-500" v-else>
        Última actualización: marzo 2026 | Para información actualizada consulta mis perfiles de
        <a
          href="https://scholar.google.com/citations?user=3mc_-QsAAAAJ"
          target="_blank"
          class="text-accent-500 hover:underline"
          >Google Scholar</a
          >
          o
          <a
            href="https://www.semanticscholar.org/author/Mar%C3%ADa-Grandury/2176184513"
            target="_blank"
            class="text-accent-500 hover:underline"
            >Semantic Scholar</a
          >.
      </p>
      <!-- ORCID https://orcid.org/my-orcid?orcid=0009-0009-4703-3348 -->
    </div>


    <div class="py-6 lg:px-24 sm:px-12">
      <h2 class="font-semibold tracking-tight text-2xl">
        {{ lang === 'en' ? 'Highlights' : 'Destacados' }}
      </h2>
    </div>

    <div class="grid py-6 gap-y-3 lg:px-24 sm:px-12">
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
        :openAbstractByDefault="true"
      />
    </div>

    <div class="py-6 lg:px-24 sm:px-12">
      <h2 class="font-semibold tracking-tight text-2xl">
        {{ lang === 'en' ? 'Published Papers' : 'Artículos Publicados' }}
      </h2>
    </div>

    <div class="grid py-6 gap-y-3 lg:px-24 sm:px-12">
      <CardPaper
        v-for="paper in publishedPapers"
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

    <div class="py-6 lg:px-24 sm:px-12">
      <h2 class="font-semibold tracking-tight text-2xl">
        {{ lang === 'en' ? 'Guest Lectures' : 'Clases Invitadas' }}
      </h2>
      <p class="py-6">
        {{ lang === 'en'
          ? "I've always loved teaching and I'm grateful for these opportunities to share my experience and research with the community!"
          : '¡Siempre me ha encantado enseñar y estoy agradecida por estas oportunidades de compartir mi experiencia e investigación con la comunidad!' }}
      </p>
    </div>

    <div class="grid py-6 gap-y-3 lg:px-24 sm:px-12">
        <CardMediaMini
          v-for="lecture in guestLectures"
          :key="lecture.talk"
          :talk="lecture.talk"
          :organizer="lecture.organizer"
          :event="lecture.event"
          :event_link="lecture.event_link"
          :image_link="lecture.image_link"
          :recording_link="lecture.recording_link"
          :language="lecture.language"
          :type="lecture.type"
          :date="lecture.date"
          :location="lecture.location"
          :tags="lecture.tags"
          :sm_link="lecture.sm_link"
        />
      </div>

    <div class="py-6 lg:px-24 sm:px-12">
      <h2 class="font-semibold tracking-tight text-2xl">
        {{ lang === 'en' ? 'Community Service' : 'Servicio a la Comunidad' }}
      </h2>
      <div class="grid gap-4 py-4 md:grid-cols-2">
        <CardGeneric class="p-5">
          <h3 class="font-semibold mb-2">{{ lang === 'en' ? 'Reviewer' : 'Revisora' }}</h3>
          <ul class="list-disc list-inside text-sm text-gray-700 dark:text-gray-200">
            <li>Journal Royal Society Open Science, 2026</li>
            <li>Simposio LANLP: Bridging Latin American NLP, 2026</li>
            <li>Workshop EXIST: sEXism Identification in Social neTworks, 2025</li>
            <!-- https://clef2025.clef-initiative.eu/index.php?page=Pages/Labs/EXIST.html -->
          </ul>
        </CardGeneric>
        <CardGeneric class="p-5">
          <h3 class="font-semibold mb-2">{{ lang === 'en' ? 'Diversity & Inclusion' : 'Diversidad e Inclusión' }}</h3>
          <ul class="list-disc list-inside text-sm text-gray-700 dark:text-gray-200">
            <li>Diversity & Inclusion Chair at EACL 2026</li>
            <li>Birds-of-a-Feather (BoF) organizer at ACL 2025</li>
            <li>Birds-of-a-Feather (BoF) organizer at COLM 2025</li>
          </ul>
        </CardGeneric>
      </div>
    </div>
  </Container>
</template>
