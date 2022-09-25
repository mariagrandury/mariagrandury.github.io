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
              <a href="//www.neurocat.ai/" target="_blank" class="text-accent-500 hover:underline">@neurocat.ai</a>
            </li>
            <li>
              🚀 Founder
              <a href="https://twitter.com/somosnlp_" target="_blank" class="text-accent-500 hover:underline">@SomosNLP
                🤗</a>
            </li>
            <li>
              ⚡ Core Team
              <a href="https://twitter.com/wairobotics" target="_blank"
                class="text-accent-500 hover:underline">@WAIRobotics</a>
            </li>
          </ul>
        </div>
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
      <div class="p-8">
        <div class="text-3xl mb-4">I'll be speaking at</div>
        <div class="grid py-6 gap-x-6 gap-y-3">
          <CardTalk talk="Encuentro de empresas de PLN"
            event="Mesa Redonda - El estado del arte de la industria de PLN en nuestro país y fuera"
            event_link="https://twitter.com/PERTE_Lengua/status/1567902042353442816?s=20&t=kR1vwhuxmGig2UrbH4WvDw"
            image_link="https://pbs.twimg.com/media/FcJJ_XNWAAUAyv7?format=jpg&name=4096x4096"
            :tags="['NLP', 'SOTA NLP', 'Round Table']">
            <template v-slot:abstract>
              <div class="text-sm text-gray-700 dark:text-white">
                <p>
                  La oficina del Comisionado Especial para la Alianza por la Nueva Economía de la Lengua
                  organiza, en colaboración con Casa Mediterráneo y la Universidad de Alicante, el primer
                  encuentro del ecosistema de empresas de Procesamiento de Lenguaje Natural.
                </p>
                <br />
                <p>
                  El PERTE de la Nueva economía de la Lengua es una oportunidad para aprovechar el potencial
                  del español y de las lenguas cooficiales como factor de crecimiento económico y
                  competitividad internacional en áreas como la inteligencia artificial, la traducción, el
                  aprendizaje, la divulgación cultural, la producción audiovisual, la investigación y la
                  ciencia.
                </p>
              </div>
            </template>
          </CardTalk>
        </div>
      </div>
    </div>
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8 xl:grid-cols-2">
      <div class="p-8">
        <div class="text-3xl mb-4">My latest projects are</div>
        <div class="grid py-6 gap-x-6 gap-y-3">
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
                and the
                <a target="_blank" href="https://arxiv.org/abs/2207.06814"
                  class="text-accent-700 dark:text-accent-300 hover:underline">paper.</a>
              </div>
            </template>
          </CardProject>
          <CardProject title="Course: NLP de 0 a 100 con Hugging Face" :tags="['NLP', 'Somos NLP']"
            link="https://somosnlp.org/nlp-de-cero-a-cien"
            color="text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-500">
            <i-emojione-monotone-hugging-face />
            <template v-slot:description>
              <div class="text-sm text-gray-700 dark:text-white">The first NLP course from zero to hero in Spanish.
                Organized by Somos NLP in collaboration with Spain AI.</div>
            </template>
          </CardProject>
          <CardProject title="BigScience Research Workshop" :tags="['NLP', 'Hugging Face']"
            link="https://bigscience.huggingface.co/" color="text-pink-600 bg-pink-50 dark:text-white dark:bg-pink-600">
            <i-whh-flower />
            <template v-slot:description>
              <div class="text-sm text-gray-700 dark:text-white">A one-year long international research workshop on
                large multilingual models and datasets. I'm part of the data tooling working group.</div>
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
</template>
