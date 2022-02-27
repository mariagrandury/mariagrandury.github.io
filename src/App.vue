<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Container from './components/Container.vue';

useHead({
  title: 'María Grandury - ML Research Engineer',
  meta: [
    { name: 'description', content: 'Hello! I\'m an ML Research Engineer focused on NLP, XAI & Adversarial Robustness | Founder @ Somos NLP | Here I share my projects, events and interests :)' },
    { property: 'og:title', content: 'María Grandury - ML Research Engineer' },
    { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1379831102689452036/GDAUh5UT_400x400.jpg' },
    { name: 'twitter:card', content: 'María Grandury - ML Research Engineer' },
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
