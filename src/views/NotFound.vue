<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { useLanguage } from "../composables/useLanguage";

useHead({ title: "María Grandury - Page not found", meta: [{ name: "robots", content: "noindex" }] });

const { lang } = useLanguage();
</script>

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div class="flex flex-col items-center gap-4 py-24 text-center">
      <div class="text-6xl font-semibold">404</div>
      <p>{{ lang === 'en' ? "This page doesn't exist." : 'Esta página no existe.' }}</p>
      <div class="flex gap-4">
        <router-link to="/" class="text-accent-500 hover:underline">{{ lang === 'en' ? 'Home' : 'Inicio' }}</router-link>
        <router-link to="/research" class="text-accent-500 hover:underline">{{ lang === 'en' ? 'Research' : 'Investigación' }}</router-link>
        <router-link to="/news" class="text-accent-500 hover:underline">{{ lang === 'en' ? 'News' : 'Noticias' }}</router-link>
      </div>
    </div>
  </Container>
</template>
