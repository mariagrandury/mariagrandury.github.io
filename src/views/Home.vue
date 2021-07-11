<script setup lang="ts">
import { ref, computed } from "vue";
import { useInterval } from "@vueuse/core";

const greetings = ref([
  "Hi, I'm María.",
  "Hola, soy María.",
  "Bonjour, je suis María.",
  "Hallo, ich bin María.",
])
const counter = useInterval(1500)
const index = computed(() => counter.value % greetings.value.length)
</script>

<template>
  <div class="min-h-screen grid grid-rows-[auto,1fr]">
    <Container class="bg-white dark:bg-gray-900">
      <NavBar />
    </Container>
    <Container class="bg-white dark:bg-gray-900">
      <div class="h-full grid xl:grid-cols-2 gap-8 place-items-center">
        <div class="p-8">
          <h1 class="text-4xl tracking-tight mb-8">{{ greetings[index] }}</h1>
          <p class="text-lg mb-4">Welcome to my personal website!</p>
          <p
            class="text-lg"
          >It includes my portfolio, the story of how I became an MLE and more information about volunteering and interests. Have a look! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro libero aperiam magni similique sapiente qui cumque ad quasi adipisci distinctio nulla consectetur ipsa maxime facilis iusto doloribus amet aliquam unde rem, nisi repellat? Quod pariatur mollitia fuga sequi dolores molestiae tempore consectetur maiores nisi hic ad corrupti, cum nam alias!</p>
        </div>
        <ContactCard />
      </div>
    </Container>
  </div>
</template>
