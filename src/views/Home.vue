<script setup lang="ts">
import { ref, computed } from "vue";
import { useInterval } from "@vueuse/core";

const greetings = ref([
  "Hi,",
  "Hola,",
  "Bonjour,",
  "Hallo,",
])
const counter = useInterval(1500)
const index = computed(() => counter.value % greetings.value.length)
</script>

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-32 xl:grid-cols-2">
      <div class="p-8">
        <h1 class="font-medium mb-3 tracking-tighter text-3xl">{{ greetings[index] }}</h1>
        <div class="text-xl mb-4">I am María. Key features:</div>
        <div>
          <ul class="flex flex-col gap-1">
            <li>💡 Machine Learning Research Engineer</li>
            <li>🎯 #NLP, #XAI and Adversarial Attacks (#TrustedAI)</li>
            <li>🎓 Mathematician & Physicist</li>
            <li>
              👩🏻‍💻 Text Attacks
              <a href="//www.neurocat.ai/" class="text-accent-500">@neurocat.ai</a>
            </li>
            <li>
              🚀 Founder
              <a
                href="https://twitter.com/nlp_en_es"
                class="text-accent-500"
              >@NLP_en_ES 🤗</a>
            </li>
            <li>
              ⚡ Core Team
              <a
                href="https://twitter.com/wairobotics"
                class="text-accent-500"
              >@WAIRobotics</a>
            </li>
          </ul>
        </div>
      </div>
      <ContactCard />
    </div>
  </Container>
</template>
