<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useHead } from "@vueuse/head";

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

interface Paper {
  status: string;
  title: string;
  authors: string;
  venue?: string;
  tags: string[];
  arxiv_link?: string;
  hf_link?: string;
  color: string;
  icon?: string;
  abstract?: string;
}

const papers = ref<Paper[]>([]);

// Simple CSV parser
function parseCSV(csvText: string): Paper[] {
  const lines = csvText.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0].split(",");
  const data: Paper[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length !== headers.length) continue;

    const paper: Paper = {
      status: (values[0] || "").trim(),
      title: (values[1] || "").trim(),
      authors: (values[2] || "").trim(),
      venue: values[3] ? values[3].trim() : undefined,
      tags: values[4] ? values[4].split(",").map((tag) => tag.trim()) : [],
      arxiv_link: values[5] ? values[5].trim() : undefined,
      hf_link: values[6] ? values[6].trim() : undefined,
      color: (values[7] || "").trim(),
      icon: values[8] ? values[8].trim() : undefined,
      abstract: values[9] ? values[9].trim() : undefined,
    };

    // Clean up empty strings
    if (!paper.venue || paper.venue === "") delete paper.venue;
    if (!paper.arxiv_link || paper.arxiv_link === "") delete paper.arxiv_link;
    if (!paper.hf_link || paper.hf_link === "") delete paper.hf_link;
    if (!paper.icon || paper.icon === "") delete paper.icon;
    if (!paper.abstract || paper.abstract === "") delete paper.abstract;

    data.push(paper);
  }

  return data;
}

// Parse CSV line handling quoted fields
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        i++; // Skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);

  return result;
}

onMounted(async () => {
  try {
    const response = await fetch("/data/papers.csv");
    const csvText = await response.text();
    papers.value = parseCSV(csvText);
  } catch (error) {
    console.error("Error loading papers:", error);
  }
});

const highlightPapers = computed(() =>
  papers.value.filter((paper) => paper.status === "highlights")
);

const publishedPapers = computed(() =>
  papers.value.filter((paper) => paper.status === "published")
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
        I want to explore cultural and linguistic bias evaluation and mitigation in LLMs with a holistic approach to language understanding, e.g., at the text representation level or through reasoning.
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
          talk="Synthetic Data Generation and LLM Evaluation"
          organizer="Universidad Nacional Autónoma de México (UNAM)"
          event="Universidad Nacional Autónoma de México (UNAM) | Bachelor's Degree in Data Science for Social Sciences and Humanities"
          event_link="https://www.acatlan.unam.mx/index.php?id=1805"
          image_link="images/events/241214_unam_header.png"
          recording_link=""
          language="Spanish"
          type="Guest Lecture"
          date="2024-12-14"
          location="Mexico (Remote)"
          :tags="['Synthetic Data', 'LLM Evaluation']"
        >
        <i-mdi-newspaper style="font-size: 1.25rem" />
        <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Diplomado "Introducción a la Ciencia de Datos: Herramientas para el Aprendizaje Automatizado en las Ciencias Sociales y Humanidades"
            </div>
          </template>
        </CardMediaMini>
        <CardMediaMini
          talk="NLP advanced techniques and applications. LLM alignment and evaluation."
          event="Universidad Internacional de Andalucía | Summer School 'Content Generation and Language Models'"
          event_link=""
          image_link="images/events/240819_unia.jpeg"
          recording_link=""
          language="Spanish"
          type="Summer School Masterclass"
          date="2024-08-19"
          location="Baeza, Spain"
          :tags="['AI Alignment', 'LLM Evaluation']"
        >
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Curso de verano
            </div>
          </template>
        </CardMediaMini>
        <CardMediaMini
          talk="I've trained my LM, now what?"
          event="Universidad Internacional de Andalucía | Summer School 'Applied Artificial Intelligence'"
          organizer="Universidad Internacional de Andalucía "
          event_link=""
          image_link="images/events/230822_curso_unia.jpeg"
          recording_link=""
          language="Spanish"
          type="Summer School Masterclass"
          date="2023-08-22"
          location="Baeza, Spain"
          :tags="['Bias', 'Explainability', 'Open-Source', '🇪🇸']">
          <i-tabler:external-link style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Universidad Internacional de Andalucía
            </div>
          </template>
        </CardMediaMini>
        
      </div>
  </Container>
</template>
