<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'María Grandury - Contact',
  meta: [
    { name: 'description', content: 'Hello! I\'m an NLP Researcher, Responsible AI & AI in Spanish | Founder @SomosNLP.org | Here you can find my contact information' },
    { property: 'og:title', content: 'María Grandury - Contact' },
    { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@mariagrandury' },
    { name: 'twitter:creator', content: '@mariagrandury' },
  ],
})
</script>

<template>
  <div class="min-h-screen grid grid-rows-[auto,1fr]">
    <Container class="bg-[#fffd] dark:bg-[#0002]">
      <NavBar />
    </Container>
    <Container class="bg-accent-500 dark:bg-gray-800" style="background-image: url('https://mariagrandury.github.io/assets/map-image.png');
      background-repeat: no-repeat; background-size: contain">
      <CardContact />
    </Container>
  </div>
</template>
