<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Container from './components/Container.vue';

useHead({
  title: 'María Grandury',
  meta: [
    { name: 'description', content: 'Here I share my projects and interests as well as my story, volunteering experiences and organizations.' },
    { property: 'og:title', content: 'María Grandury' },
    { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1379831102689452036/GDAUh5UT_400x400.jpg' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@mariagrandury' },
  ],
})
</script>

<template>
  <div class="dark:text-white dark:bg-gray-900 min-h-screen">
    <router-view />
    <Container>
      <Footer />
    </Container>
  </div>
</template>
