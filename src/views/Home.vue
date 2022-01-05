<script setup lang="ts">
import { ref, computed } from "vue";
import { useInterval } from "@vueuse/core";

const greetings = ref([
  "Hola,",
  "Hi,",
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
    <div class="h-full grid gap-8 place-items-center lg:py-8">
      <div class="p-8">
        <h1 class="font-medium mb-3 tracking-tighter text-5xl">{{ greetings[index] }}</h1>
        <div class="text-4xl mb-4">I'm María Grandury!</div>
        <div>
          <ul class="flex flex-col gap-1">
            <li>💡 Machine Learning Research Engineer</li>
            <li>🎯 #NLP, #XAI, #TrustedAI</li>
            <li>🎓 Mathematician & Physicist</li>
            <li>
              👩🏻‍💻 Text Attacks
              <a
                href="//www.neurocat.ai/"
                class="text-accent-500 hover:underline"
              >@neurocat.ai</a>
            </li>
            <li>
              🚀 Founder
              <a
                href="https://twitter.com/nlp_en_es"
                class="text-accent-500 hover:underline"
              >@NLP_en_ES 🤗</a>
            </li>
            <li>
              ⚡ Core Team
              <a
                href="https://twitter.com/wairobotics"
                class="text-accent-500 hover:underline"
              >@WAIRobotics</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8 xl:grid-cols-2">
      <div class="p-8">
        <div class="text-3xl mb-4">I'm currently working on</div>
        <div class="grid py-6 gap-x-6 gap-y-3">
          <CardProject
            title="BigScience Research Workshop"
            :tags="['NLP', 'Hugging Face']"
            link="https://bigscience.huggingface.co/"
            color="text-pink-600 bg-pink-50 dark:text-white dark:bg-pink-600"
          >
            <i-whh-flower />
            <template v-slot:description>
              <div
                class="text-sm text-gray-700 dark:text-white"
              >A one-year long research workshop on large multilingual models and datasets. I'm part of the data tooling working group.</div>
            </template>
          </CardProject>
          <CardProject
            title="Course: NLP de 0 a 100 con Hugging Face"
            :tags="['NLP', 'NLP en ES']"
            link="https://nlp-en-es.org/nlp-de-cero-a-cien"
            color="text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-500"
          >
            <i-emojione-monotone-hugging-face />
            <template v-slot:description>
              <div
                class="text-sm text-gray-700 dark:text-white"
              >The first NLP course from zero to hero in Spanish. Organized by NLP en ES in collaboration with Spain AI.</div>
            </template>
          </CardProject>
          <CardProject
            title="WaiACCELERATE Program"
            :tags="['Entrepreneurship', 'Women in AI & Robotics']"
            link="https://womeninairobotics.de"
            color="text-purple-900 bg-purple-50 dark:text-white dark:bg-purple-600"
          >
            <i-fluent-rocket-24-regular />
            <template v-slot:description>
              <div
                class="text-sm text-gray-700 dark:text-white"
              >A program where we provide women entrepreneurs with the tools, knowledge, mentoring and network to successfully realize their startup/business idea in the AI sector.</div>
            </template>
          </CardProject>
        </div>
      </div>
      <div>
        <router-link
          class="flex font-medium p-6 gap-3 items-center border-dashed rounded-md border-2 border-gray-200 hover:border-accent-400"
          to="/projects"
        >More Projects</router-link>
      </div>
    </div>
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8 xl:grid-cols-2">
      <div>
        <router-link
          class="flex font-medium p-6 gap-3 items-center border-dashed rounded-md border-2 border-gray-200 hover:border-accent-400"
          to="/talks"
        >More Talks</router-link>
      </div>
      <div class="p-8">
        <div class="text-3xl mb-4">And I'm going to speak at</div>
        <div class="grid py-6 gap-x-6 gap-y-3">
          <CardTalk
            talk="AI The New Sexy | Podcast"
            event
            event_link="https://aithenewsexy.com/"
            image_link="https://aithenewsexy.com/wp-content/uploads/2020/10/LOGO-HOME-3.png"
            recording_link
            :tags="['NLP', 'Career', 'NLP in Spanish']"
          >
            <template v-slot:abstract>
              <div class="text-sm text-gray-700 dark:text-white">
                AI The New Sexy is a podcast where you can find information about
                Artificial Intelligence and its impact on everyday life and on business.
                In this episode we interview María Grandury, founder of NLP en ES, an
                open community for spanish-speaking professionals and researchers
                advancing and democratizing NLP in their language.
              </div>
            </template>
          </CardTalk>
        </div>
      </div>
    </div>
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <CardContact />
  </Container>
</template>
