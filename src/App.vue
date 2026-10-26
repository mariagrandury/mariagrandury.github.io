<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Container from './components/Container.vue';

useHead({
  title: 'María Grandury - NLP Researcher',
  meta: [
    { name: 'description', content: 'Hello! I\'m an NLP Researcher, Responsible AI & AI in Spanish | Founder @ SomosNLP.org | Here I share my projects, talks and interests :)' },
    { property: 'og:title', content: 'María Grandury - NLP Researcher' },
    { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@mariagrandury' },
    { name: 'twitter:creator', content: '@mariagrandury' },
  ],
  // Structured data so search engines link the site to her research profiles
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'María Grandury',
        url: 'https://mariagrandury.ai',
        image: 'https://mariagrandury.ai/images/profile/maria_grandury.png',
        jobTitle: 'PhD Student in Natural Language Processing',
        affiliation: { '@type': 'Organization', name: 'EPFL NLP Lab', url: 'https://nlp.epfl.ch' },
        alumniOf: ['Universidad Nacional de Educación a Distancia', 'Universidad de Oviedo'],
        knowsAbout: ['Natural Language Processing', 'LLM Evaluation', 'Multilingual NLP', 'Responsible AI'],
        sameAs: [
          'https://scholar.google.com/citations?user=3mc_-QsAAAAJ',
          'https://www.semanticscholar.org/author/2176184513',
          'https://orcid.org/0009-0009-4703-3348',
          'https://aclanthology.org/people/maria-grandury/',
          'https://github.com/mariagrandury',
          'https://huggingface.co/mariagrandury',
          'https://www.linkedin.com/in/mariagrandury',
          'https://x.com/mariagrandury',
          'https://es.wikipedia.org/wiki/Mar%C3%ADa_Grandury',
        ],
      }),
    },
  ],
})
</script>

<template>
  <div class="min-h-screen dark:bg-gray-900 dark:text-white">
    <router-view />
    <Container>
      <Footer />
    </Container>
  </div>
</template>
