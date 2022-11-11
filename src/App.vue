<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Container from './components/Container.vue';

useHead({
  title: 'María Grandury - ML Research Engineer #NLP',
  meta: [
    { name: 'description', content: 'Hello! I\'m an ML Research Engineer focused on NLP, XAI & Adversarial Robustness | Founder @ SomosNLP.org | Here I share my projects, talks and interests :)' },
    { property: 'og:title', content: 'María Grandury - ML Research Engineer #NLP' },
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
