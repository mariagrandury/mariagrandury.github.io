<script setup lang="ts">
import { ref, computed } from "vue";
import { useInterval } from "@vueuse/core";
import ContactCard from "../components/ContactCard.vue";

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
    <div class="h-full grid gap-8 place-items-center lg:py-16">
      <div class="p-8">
        <h1 class="font-medium mb-3 tracking-tighter text-3xl">{{ greetings[index] }}</h1>
        <div class="text-xl mb-4">I'm María!</div>
        <div>
          <ul class="flex flex-col gap-1">
            <li>💡 Machine Learning Research Engineer</li>
            <li>🎯 #NLP, #XAI, #TrustedAI</li>
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
    </div>
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-16 xl:grid-cols-2">
      <div class="p-8">
        <div class="text-xl mb-4">I'm currently working on</div>
        <div class="grid py-6 gap-x-6 gap-y-3">
          <ProjectCard
            title="BigScience Research Workshop"
            :tags="['NLP', 'Hugging Face']"
            link="https://bigscience.huggingface.co/"
          >
            <i-whh-flower />
            <template v-slot:description>
              <div
                class="text-sm text-gray-700 dark:text-white"
              >A one-year long research workshop on large multilingual models and datasets. I'm part of the data tooling working group.</div>
            </template>
          </ProjectCard>
          <ProjectCard
            title="Course: NLP de 0 a 100 con Hugging Face"
            :tags="['NLP', 'NLP en ES']"
            link="https://nlp-en-es.org/nlp-de-cero-a-cien"
          >
            <i-emojione-monotone-hugging-face />
            <template v-slot:description>
              <div
                class="text-sm text-gray-700 dark:text-white"
              >The first NLP course from zero to hero in Spanish. Organized by NLP en ES in collaboration with Spain AI.</div>
            </template>
          </ProjectCard>
          <ProjectCard
            title="WaiACCELERATE Program"
            :tags="['Entrepreneurship', 'Women in AI & Robotics']"
            link="https://womeninairobotics.de"
          >
            <i-fluent-rocket-24-regular />
            <template v-slot:description>
              <div
                class="text-sm text-gray-700 dark:text-white"
              >A program where we provide women entrepreneurs with the tools, knowledge, mentoring and network to successfully realize their startup/business idea in the AI sector.</div>
            </template>
          </ProjectCard>
        </div>
      </div>
      <div>
        <router-link
          class="border-dashed rounded-md flex font-medium border-2 border-gray-200 p-6 gap-3 items-center hover:border-transparent hover:ring-4"
          to="/projects"
        >More Projects</router-link>
      </div>
    </div>
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <ContactCard />
  </Container>
</template>
