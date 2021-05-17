<script setup lang="ts">
import { ref, computed } from "vue";
import { useInterval } from "@vueuse/core";

const greetings = ref([
  "Hi, I'm María.",
  "Hola, soy María.",
  "Bonjour, je suis María.",
  "Hallo, ich bin María.",
])
const { counter } = useInterval(1500)
const index = computed(() => counter.value % greetings.value.length)
</script>

<template>
  <div class="min-h-screen grid grid-rows-[auto,1fr]">
    <Container class="bg-white dark:bg-gray-900">
      <NavBar />
    </Container>
    <Container class="bg-white dark:bg-gray-900">
      <div class="h-full grid place-items-center">
        <h1 class="text-4xl">{{ greetings[index] }}</h1>
      </div>
    </Container>
  </div>
</template>
