<script setup lang="ts">
import { reactive } from "vue";
import { useHead } from "@vueuse/head";
import { useLanguage } from "../composables/useLanguage";
import {
  header,
  education,
  research,
  professional,
  publicationsSelected,
  publicationsFull,
  talksSelected,
  talksFull,
  achievements,
  openSource,
  volunteering,
  languages,
  skills,
} from "../data/cv";

useHead({
  title: "María Grandury - CV",
  meta: [
    { name: "description", content: "CV of María Grandury, NLP Researcher: education, research experience, publications, talks and awards." },
    { property: "og:title", content: "María Grandury - CV" },
    { property: "og:image", content: "https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "@mariagrandury" },
    { name: "twitter:creator", content: "@mariagrandury" },
  ],
  link: [
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,600;1,300&display=swap" },
  ],
});

const { lang } = useLanguage();
const more = reactive({ publications: false, talks: false, professional: false, extra: false });
const PDF = "/docs/cv_maria_grandury.pdf";
</script>

<template>
  <Container class="bg-white dark:bg-gray-900 print:hidden">
    <NavBar />
  </Container>

  <div class="bg-gray-100 dark:bg-gray-800 py-8 px-2 sm:px-6">
    <div class="flex flex-wrap justify-center gap-3 mb-6 print:hidden">
      <a :href="PDF" download class="cv-button">
        <i-fa-download /> {{ lang === 'en' ? 'Download PDF' : 'Descargar PDF' }}
      </a>
      <a :href="PDF" target="_blank" class="cv-button">
        <i-fa-file-pdf-o /> {{ lang === 'en' ? 'Open PDF' : 'Abrir PDF' }}
      </a>
    </div>

    <article class="cv-paper">
      <!-- Header -->
      <div class="cv-accent text-3xl">{{ header.firstName }} <b class="cv-sc">{{ header.lastName }}</b></div>
      <div class="cv-links text-sm flex flex-wrap gap-x-4 gap-y-1 mt-1">
        <a href="https://mariagrandury.ai" target="_blank"><i-fa-external-link class="cv-accent" /> mariagrandury.ai</a>
        <a href="https://www.linkedin.com/in/mariagrandury" target="_blank"><i-fa-linkedin class="cv-accent" /> mariagrandury</a>
        <a href="https://x.com/mariagrandury" target="_blank"><i-fa-twitter class="cv-accent" /> mariagrandury</a>
        <a href="https://scholar.google.com/citations?user=3mc_-QsAAAAJ" target="_blank"><i-fa-google class="cv-accent" /> google scholar</a>
        <a href="https://huggingface.co/mariagrandury" target="_blank"><i-fa-lightbulb-o class="cv-accent" /> huggingface</a>
        <a href="https://github.com/mariagrandury" target="_blank"><i-fa-github class="cv-accent" /> mariagrandury</a>
        <a href="mailto:mariagrandury@gmail.com"><i-fa-at class="cv-accent" /> mariagrandury@gmail.com</a>
      </div>
      <div class="cv-accent text-xl font-semibold text-center my-5">{{ header.tagline }}</div>

      <CVSectionTitle title="Education (465 ECTS)"><i-fa-mortar-board /></CVSectionTitle>
      <div v-for="item in education" :key="item.text" class="grid grid-cols-[4.5rem,1fr] mb-1 leading-snug">
        <div class="text-right pr-2">{{ item.date }}</div>
        <div class="pl-2" v-html="item.text" />
      </div>

      <CVSectionTitle title="Non-Profit & Research Experience"><i-fa-search /></CVSectionTitle>
      <CVExperience v-for="entry in research" :key="entry.org" :entry="entry" />

      <CVSectionTitle :title="more.publications ? 'Publications' : 'Publications (Selected, * First Author)'"><i-fa-book /></CVSectionTitle>
      <p v-if="more.publications" class="mb-1">
        All publications are available at
        <a href="https://scholar.google.com/citations?user=3mc_-QsAAAAJ" target="_blank">Google Scholar</a>.
      </p>
      <ul class="cv-list">
        <li v-for="item in more.publications ? publicationsFull : publicationsSelected" :key="item" v-html="item" />
      </ul>
      <button class="cv-more" @click="more.publications = !more.publications">
        {{ more.publications ? (lang === 'en' ? 'See less' : 'Ver menos') : (lang === 'en' ? 'See more' : 'Ver más') }}
      </button>

      <CVSectionTitle :title="more.talks ? 'Teaching & Public Speaking Experience' : 'Teaching and Public Speaking Experience (Selected)'"><i-fa-users /></CVSectionTitle>
      <ul class="cv-list">
        <li v-for="item in more.talks ? talksFull : talksSelected" :key="item" v-html="item" />
      </ul>
      <button class="cv-more" @click="more.talks = !more.talks">
        {{ more.talks ? (lang === 'en' ? 'See less' : 'Ver menos') : (lang === 'en' ? 'See more' : 'Ver más') }}
      </button>

      <CVSectionTitle title="Professional Experience"><i-fa-suitcase /></CVSectionTitle>
      <CVExperience v-for="entry in more.professional ? professional : professional.slice(0, 2)" :key="entry.org" :entry="entry" />
      <button class="cv-more" @click="more.professional = !more.professional">
        {{ more.professional ? (lang === 'en' ? 'See less' : 'Ver menos') : (lang === 'en' ? 'See more' : 'Ver más') }}
      </button>

      <div class="grid gap-x-8 sm:grid-cols-2">
        <div>
          <CVSectionTitle title="Achievements"><i-fa-star /></CVSectionTitle>
          <ul class="cv-list">
            <li v-for="item in more.extra ? achievements : achievements.slice(0, 8)" :key="item" v-html="item" />
          </ul>
        </div>
        <div>
          <CVSectionTitle title="Open-Source Projects"><i-fa-code /></CVSectionTitle>
          <ul class="cv-list">
            <li v-for="item in more.extra ? openSource : openSource.slice(0, 8)" :key="item" v-html="item" />
          </ul>
        </div>
        <div>
          <CVSectionTitle title="Volunteering"><i-fa-globe /></CVSectionTitle>
          <ul class="cv-list">
            <li v-for="item in volunteering" :key="item" v-html="item" />
          </ul>
        </div>
        <div>
          <CVSectionTitle title="Languages"><i-fa-language /></CVSectionTitle>
          <ul class="cv-list">
            <li v-for="item in languages" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <template v-if="more.extra">
        <CVSectionTitle title="Skills"><i-fa-tasks /></CVSectionTitle>
        <div v-for="skill in skills" :key="skill.label" class="grid grid-cols-[11rem,1fr] gap-2 leading-snug">
          <b class="text-right">{{ skill.label }}</b>
          <span>{{ skill.text }}</span>
        </div>
      </template>
      <button class="cv-more" @click="more.extra = !more.extra">
        {{ more.extra ? (lang === 'en' ? 'See less' : 'Ver menos') : (lang === 'en' ? 'See more' : 'Ver más') }}
      </button>
    </article>
  </div>
</template>

<style>
.cv-paper {
  --cv-accent: #1a1a75; /* basecolor #000066 at 90%, as in the LaTeX class */
  max-width: 210mm;
  margin: 0 auto;
  padding: 1.5cm;
  background: white;
  color: black;
  font-family: "Source Sans 3", "Source Sans Pro", sans-serif;
  font-weight: 300;
  font-size: 0.95rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}
.cv-paper b,
.cv-paper strong {
  font-weight: 600;
}
.cv-paper a {
  color: var(--cv-accent);
}
.cv-paper a:hover {
  text-decoration: underline;
}
.cv-accent,
.cv-section {
  color: var(--cv-accent);
}
.cv-section {
  font-size: 1.35rem;
  font-variant: small-caps;
  border-bottom: 1px solid black;
}
.cv-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
}
.cv-sc {
  font-variant: small-caps;
}
.cv-list {
  padding-left: 1.5em;
}
.cv-list > li {
  position: relative;
  line-height: 1.35;
}
.cv-list > li::before {
  content: "›";
  position: absolute;
  left: -0.9em;
  font-weight: 600;
}
.cv-more {
  display: block;
  margin: 0.25rem 0 0 auto;
  font-size: 0.8rem;
  color: var(--cv-accent);
  border: 1px solid var(--cv-accent);
  border-radius: 0.25rem;
  padding: 0 0.5rem;
}
.cv-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 2px dashed #e5e7eb;
  border-radius: 0.375rem;
  font-weight: 500;
}
.cv-button:hover {
  border-color: #22d3ee;
}
@media (max-width: 640px) {
  .cv-paper {
    padding: 1rem;
  }
}
@media print {
  .cv-more {
    display: none;
  }
  .cv-paper {
    box-shadow: none;
    padding: 0;
  }
}
</style>
