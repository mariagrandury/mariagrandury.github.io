<script setup lang="ts">
import { ref } from "vue";

const i = ref(0)
const greetings = ref([
  "Hi, I'm María.",
  "Hola, Yo soy María.",
  "Bonjour, Je suis María.",
  "Hallo, Ich bin María.",
])
</script>

<template>
  <div class="min-h-screen grid grid-rows-[auto,1fr]">
    <Container class="bg-white dark:bg-gray-900">
      <NavBar />
    </Container>
    <Container class="bg-white dark:bg-gray-900">
      <div
        @click="i = (i + 1) % greetings.length"
        class="h-full grid place-items-center cursor-pointer select-none"
      >
        <h1 class="text-4xl">{{ greetings[i] }}</h1>
      </div>
    </Container>
  </div>
</template>
