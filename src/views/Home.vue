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
              👩🏻‍💻 AI Robustness
              <a href="//www.neurocat.ai/" target="_blank" class="text-accent-500 hover:underline">@neurocat.ai</a>
            </li>
            <li>
              🚀 Founder
              <a href="https://twitter.com/somosnlp_" target="_blank"
                class="text-accent-500 hover:underline">@SomosNLP</a>
            </li>
            <li>
              🤗 Fellow
              <a href="https://twitter.com/huggingface" target="_blank"
                class="text-accent-500 hover:underline">@HuggingFace
              </a>
            </li>
            <li>
              🌸 Collab
              <a href="https://twitter.com/BigScienceW" target="_blank"
                class="text-accent-500 hover:underline">@BigScience
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Container>

  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8 xl:grid-cols-2">
      <div class="px-8">
        <div class="text-3xl mb-4">My latest projects are</div>
        <div class="grid py-6 gap-x-6 gap-y-3">
          <CardProject title="Hackathon of NLP in Spanish" :tags="['NLP', 'Somos NLP']"
            link="https://somosnlp.org/hackathon" color="text-pink-600 bg-pink-50 dark:text-white dark:bg-pink-600">
            <i-fluent-rocket-24-regular />
            <template v-slot:description>
              <div class="text-sm text-gray-700 dark:text-white">
                With more than 500 participants from 39 countries, it is the largest open-source hackathon of NLP in
                Spanish.
                The recorded events have already more than 5k visualizations!
                Organized by Somos NLP and sponsored by Hugging Face, Platzi and Paperspace.
              </div>
            </template>
          </CardProject>
          <CardProject title="BERTIN" :tags="['NLP', 'Hugging Face', 'BERTIN Project']"
            link="https://huggingface.co/bertin-project"
            color="text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-500">
            <i-mdi-face-man />
            <template v-slot:description>
              <div class="text-sm text-gray-700 dark:text-white">
                BERTIN is a series of RoBERTa-based models in Spanish trained using a novel sampling technique that we
                call "perplexity sampling". More detailed info can be found in the
                <a target="_blank" href="https://huggingface.co/bertin-project/bertin-roberta-base-spanish"
                  class="text-accent-700 dark:text-accent-300 hover:underline">model card</a>
                and the paper
                <a target="_blank" href="https://arxiv.org/abs/2207.06814"
                  class="text-accent-700 dark:text-accent-300 hover:underline">
                  BERTIN: Efficient Pre-Training of a Spanish Language Model using Perplexity Sampling.
                </a>
              </div>
            </template>
          </CardProject>
          <CardProject title="BigScience Research Workshop" :tags="['NLP', 'Hugging Face']"
            link="https://bigscience.huggingface.co/" color="text-pink-600 bg-pink-50 dark:text-white dark:bg-pink-600">
            <i-whh-flower />
            <template v-slot:description>
              <div class="text-sm text-gray-700 dark:text-white">A one-year long international research workshop on
                large multilingual models and datasets. I was part of the data tooling working group. Here is the model
                paper
                <a target="_blank" href="https://arxiv.org/abs/2211.05100"
                  class="text-accent-700 dark:text-accent-300 hover:underline">
                  BLOOM: A 176B-Parameter Open-Access Multilingual Language Model.
                </a>
              </div>
            </template>
          </CardProject>
        </div>
      </div>
      <div class="flex flex-col flex-shrink gap-12">
        <img class="w-screen"
          src="https://raw.githubusercontent.com/mariagrandury/mariagrandury.github.io/legacy/assets/undraw/projects_undraw_freelancer_long_hair.svg"
          alt="Projects" />
        <router-link
          class="flex justify-center place-self-center font-medium p-6 gap-3 text-align-center items-center border-dashed rounded-md border-2 border-gray-200 hover:border-accent-400"
          to="/projects">More Projects</router-link>
      </div>
    </div>
  </Container>

  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8 xl:grid-cols-2">
      <div class="flex flex-col flex-shrink gap-12">
        <img
          src="https://raw.githubusercontent.com/mariagrandury/mariagrandury.github.io/legacy/assets/undraw/talks_undraw_conference.svg"
          alt="Talks" />
        <router-link
          class="flex justify-center place-self-center font-medium p-6 gap-3 items-center border-dashed rounded-md border-2 border-gray-200 hover:border-accent-400"
          to="/talks">More Talks</router-link>
      </div>
      <div class="px-8">
        <div class="text-3xl mb-4">I was invited to speak at</div>
        <div class="grid py-6 gap-x-6 gap-y-3">
          <CardTalkDetailed talk="El estado del arte de la industria de PLN en nuestro país y fuera"
            event="Primer foro del PERTE de la Nueva Economía de la Lengua"
            event_link="https://twitter.com/PERTE_Lengua/status/1567902042353442816?s=20&t=kR1vwhuxmGig2UrbH4WvDw"
            image_link="https://pbs.twimg.com/media/FcJJ_XNWAAUAyv7?format=jpg&name=4096x4096"
            recording_link="https://www.youtube.com/watch?v=XdHnsBbXbWc&t=7370s"
            :tags="['NLP', 'SOTA NLP', 'Round Table']">
            <template v-slot:abstract>
              <div class="text-sm text-gray-700 dark:text-white">
                El PERTE de la Nueva economía de la Lengua es una oportunidad para aprovechar el potencial
                del español y de las lenguas cooficiales como factor de crecimiento económico y
                competitividad internacional en áreas como la inteligencia artificial, la traducción, el
                aprendizaje, la divulgación cultural, la producción audiovisual, la investigación y la
                ciencia.
                <br />
                <br />
                <a href="https://www.youtube.com/watch?v=XdHnsBbXbWc&t=5593s" target="_blank"
                  class="text-accent-500 hover:underline">
                  1. ¿Cómo se puede avanzar el estado del arte del NLP en español?
                </a>
                <br />
                <a href="https://www.youtube.com/watch?v=XdHnsBbXbWc&t=7370s" target="_blank"
                  class="text-accent-500 hover:underline">
                  2. ¿Cuál crees que sería el proyecto más importante a nivel internacional que deberíamos
                  implementar?
                </a>
              </div>
            </template>
          </CardTalkDetailed>
        </div>
      </div>
    </div>
  </Container>
</template>
