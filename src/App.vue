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
