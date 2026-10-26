<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useHead } from "@vueuse/head";
import { parseNewsCSV, parsePapersCSV, formatNewsDate, type NewsItem, type Paper } from "../utils/csvParser";
import { isFirstAuthor } from "../utils/bibtex";
import { useLanguage } from "../composables/useLanguage";

useHead({
  title: "María Grandury - PhD Student in NLP at EPFL",
  meta: [
    { name: "description", content: "María Grandury, PhD student at the EPFL NLP Lab working on multilingual and multicultural LLM evaluation. Publications, news, CV and contact." },
    { property: "og:title", content: "María Grandury - PhD Student in NLP at EPFL" },
    { property: "og:image", content: "https://mariagrandury.ai/images/profile/maria_grandury.png" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "@mariagrandury" },
    { name: "twitter:creator", content: "@mariagrandury" },
  ],
});

const { lang } = useLanguage();
const news = ref<NewsItem[]>([]);
const papers = ref<Paper[]>([]);

onMounted(async () => {
  try {
    const [newsText, papersText] = await Promise.all(
      ["/data/news.csv", "/data/papers.csv"].map(async (url) => (await fetch(url)).text())
    );
    news.value = parseNewsCSV(newsText);
    papers.value = parsePapersCSV(papersText);
  } catch (error) {
    console.error("Error loading data:", error);
  }
});

const latestNews = computed(() => news.value.slice(0, 6));
const selectedPapers = computed(() =>
  papers.value.filter((p) => p.status === "highlights" || (p.status === "published" && isFirstAuthor(p)))
);

const links = [
  { label: "CV", href: "/cv_overleaf" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=3mc_-QsAAAAJ" },
  { label: "Semantic Scholar", href: "https://www.semanticscholar.org/author/2176184513" },
  { label: "ORCID", href: "https://orcid.org/0009-0009-4703-3348" },
  { label: "GitHub", href: "https://github.com/mariagrandury" },
  { label: "Hugging Face", href: "https://huggingface.co/mariagrandury" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mariagrandury" },
  { label: "X", href: "https://x.com/mariagrandury" },
];

const interests = ["Multilingual LLM evaluation", "Cultural adequacy of LLMs", "Spanish & low-resource NLP", "Benchmark validity", "Open-source & community-driven NLP"];
</script>

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div class="max-w-4xl mx-auto">
      <!-- About -->
      <section class="grid gap-8 md:grid-cols-[12rem,1fr] items-start">
        <img
          class="rounded-full w-48 h-48 mx-auto object-cover"
          src="https://mariagrandury.ai/images/profile/maria_grandury.png"
          alt="María Grandury"
        />
        <div>
          <h1 class="text-4xl font-semibold tracking-tight">María Grandury</h1>
          <p class="text-lg text-gray-600 dark:text-gray-300 mt-1">
            {{ lang === 'en' ? 'PhD Student' : 'Doctoranda' }} ·
            <a href="https://nlp.epfl.ch" target="_blank" class="text-accent-500 hover:underline">EPFL NLP Lab</a>
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400">mariagrandury [at] gmail [dot] com</p>
          <div class="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm">
            <a v-for="link in links" :key="link.label" :href="link.href" :target="link.href.startsWith('http') ? '_blank' : undefined" class="text-accent-500 hover:underline">{{ link.label }}</a>
          </div>
        </div>
      </section>

      <section class="mt-8 flex flex-col gap-3 leading-relaxed">
        <p v-if="lang === 'en'">
          I am a PhD student at the <a href="https://nlp.epfl.ch" target="_blank" class="text-accent-500 hover:underline">EPFL NLP Lab</a>,
          advised by Prof. Antoine Bosselut. I study how to evaluate the linguistic and cultural knowledge of Large Language Models (LLMs),
          because we cannot improve what we cannot measure. My work focuses on multilingual and multicultural benchmarks, with a special
          interest in Spanish as a pluricentric language.
        </p>
        <p v-else>
          Soy doctoranda en el <a href="https://nlp.epfl.ch" target="_blank" class="text-accent-500 hover:underline">EPFL NLP Lab</a>,
          supervisada por el Prof. Antoine Bosselut. Estudio cómo evaluar el conocimiento lingüístico y cultural de los grandes modelos de
          lenguaje (LLMs), porque no podemos mejorar lo que no podemos medir. Me centro en benchmarks multilingües y multiculturales, con
          especial interés en el español como lengua pluricéntrica.
        </p>
        <p v-if="lang === 'en'">
          Before my PhD, I led <a href="https://huggingface.co/spaces/la-leaderboard/la-leaderboard" target="_blank" class="text-accent-500 hover:underline">La Leaderboard</a>
          (ACL 2025), worked as a researcher at UPM, UNED and the Spanish Directorate General for AI, and spent three years as an ML engineer in AI safety and LLM startups.
          I founded <a href="https://somosnlp.org" target="_blank" class="text-accent-500 hover:underline">SomosNLP</a>, the largest open-source community
          of Spanish-speaking NLP practitioners, and I am a Hugging Face Fellow. I hold degrees in Mathematics and Physics and an MSc in Language Technologies.
        </p>
        <p v-else>
          Antes del doctorado lideré <a href="https://huggingface.co/spaces/la-leaderboard/la-leaderboard" target="_blank" class="text-accent-500 hover:underline">La Leaderboard</a>
          (ACL 2025), fui investigadora en la UPM, la UNED y la Dirección General de IA, y trabajé tres años como ingeniera de ML en startups de seguridad de IA y LLMs.
          Fundé <a href="https://somosnlp.org" target="_blank" class="text-accent-500 hover:underline">SomosNLP</a>, la mayor comunidad open-source de PLN en español,
          y soy Hugging Face Fellow. Soy matemática y física, y tengo un máster en Tecnologías del Lenguaje.
        </p>
        <div class="flex flex-wrap gap-2 pt-1">
          <span v-for="interest in interests" :key="interest" class="text-sm rounded-full border border-gray-200 dark:border-gray-700 px-3 py-0.5">{{ interest }}</span>
        </div>
        <div class="rounded-md border-l-4 border-accent-500 bg-accent-500/10 px-4 py-3 mt-2">
          {{ lang === 'en'
            ? '🔎 I am open to research internships and visiting positions on multilingual and multicultural evaluation. Feel free to reach out!'
            : '🔎 Estoy abierta a prácticas de investigación y estancias sobre evaluación multilingüe y multicultural. ¡Escríbeme!' }}
          <router-link to="/contact" class="text-accent-500 hover:underline whitespace-nowrap">{{ lang === 'en' ? 'Contact →' : 'Contacto →' }}</router-link>
        </div>
      </section>

      <!-- News -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 mb-3">{{ lang === 'en' ? 'News' : 'Noticias' }}</h2>
        <ul class="flex flex-col gap-1.5">
          <li v-for="item in latestNews" :key="item.date + item.text" class="grid gap-3 grid-cols-[5.5rem,1fr]">
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ formatNewsDate(item.date, lang) }}</span>
            <span :class="{ 'font-semibold': item.highlighted }">{{ item.text }}</span>
          </li>
        </ul>
        <router-link to="/news" class="inline-block mt-2 text-sm text-accent-500 hover:underline">{{ lang === 'en' ? 'All news →' : 'Todas las noticias →' }}</router-link>
      </section>

      <!-- Publications -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 mb-1">
          {{ lang === 'en' ? 'Selected publications' : 'Publicaciones seleccionadas' }}
        </h2>
        <PaperItem v-for="paper in selectedPapers" :key="paper.title" :paper="paper" />
        <router-link to="/publications" class="inline-block mt-2 text-sm text-accent-500 hover:underline">{{ lang === 'en' ? 'All publications →' : 'Todas las publicaciones →' }}</router-link>
      </section>

      <!-- Service -->
      <section class="mt-10">
        <h2 class="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 mb-3">{{ lang === 'en' ? 'Service' : 'Servicio' }}</h2>
        <ul class="list-disc list-inside flex flex-col gap-1">
          <li>Diversity & Inclusion Chair, EACL 2026</li>
          <li>Birds-of-a-Feather organizer, ACL 2025 and COLM 2025</li>
          <li>Reviewer: ACL Rolling Review, Information Processing & Management, Royal Society Open Science, LANLP, SIMBig, EXIST</li>
          <li>{{ lang === 'en' ? 'Guest lectures at UNAM, CENIA, UNA and UNIA;' : 'Clases invitadas en UNAM, CENIA, UNA y UNIA;' }}
            <router-link to="/divulgation" class="text-accent-500 hover:underline">{{ lang === 'en' ? '40+ talks' : '40+ charlas' }}</router-link>
          </li>
        </ul>
      </section>
    </div>
  </Container>
</template>
