<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useHead } from "@vueuse/head";
import { parseEventsCSV, parsePapersCSV, type Paper, type Event } from "../utils/csvParser";

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
          Research Interests
        </div>
        <i-fluent-design-ideas-24-regular style="font-size: 2rem" />
      </h1>
      <h2 class="py-6">
        Cultural knowledge is highly relevant for an LLM to understand a language. My main interest is to gain a deeper comprehension of the capabilities and limitations of LLMs since we cannot improve what we cannot measure. 
        At the EPFL NLP lab, I'm currently doing research on Multilingual and Multicultural LLM Evaluation.
        I want to explore cultural and linguistic bias evaluation and mitigation in LLMs with a holistic approach to language understanding.
        <!-- I also collaborate with international labs like ... -->
      </h2>
      <p class="italic text-sm text-gray-500">
        Last update: January 2026 | For up-to-date information check my
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
          > profiles
        !
      </p>
      <!-- ORCID https://orcid.org/my-orcid?orcid=0009-0009-4703-3348 -->
    </div>

    <div class="py-6 lg:px-24 sm:px-12">
      <h2 class="font-semibold tracking-tight text-2xl">Highlights</h2>
    </div>

    <div class="grid py-6 gap-y-3 lg:px-24 sm:px-12">
      <CardPaper
        v-for="paper in highlightPapers"
        :key="paper.title"
        :title="paper.title"
        :authors="paper.authors"
        :venue="paper.venue"
        :tags="paper.tags"
        :arxiv_link="paper.arxiv_link"
        :hf_link="paper.hf_link"
        :color="paper.color"
        :icon="paper.icon"
        :abstract="paper.abstract"
      />
    </div>

    <div class="py-6 lg:px-24 sm:px-12">
      <h2 class="font-semibold tracking-tight text-2xl">Published Papers</h2>
    </div>

    <div class="grid py-6 gap-y-3 lg:px-24 sm:px-12">
      <CardPaper
        v-for="paper in publishedPapers"
        :key="paper.title"
        :title="paper.title"
        :authors="paper.authors"
        :venue="paper.venue"
        :tags="paper.tags"
        :arxiv_link="paper.arxiv_link"
        :hf_link="paper.hf_link"
        :color="paper.color"
        :icon="paper.icon"
        :abstract="paper.abstract"
      />
    </div>

    <div class="py-6 lg:px-24 sm:px-12">
      <h2 class="font-semibold tracking-tight text-2xl">Guest Lectures</h2>
      <p class="py-6">I've always loved teaching and I'm grateful for these opportunities to share my research with the community!</p>
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
  </Container>
</template>
