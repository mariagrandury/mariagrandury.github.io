<script setup lang="ts">
import { ref, computed } from "vue";
import { useInterval } from "@vueuse/core";

const greetings = ref(["Hola,", "Hi,", "Bonjour,", "Hallo,"]);
const counter = useInterval(1500);
const index = computed(() => counter.value % greetings.value.length);
</script>

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8" style="grid-template-columns: 2fr 3fr;">
      <div class="p-8">
        <h1 class="font-medium mb-3 tracking-tighter text-5xl">
          {{ greetings[index] }}
        </h1>
        <div class="text-4xl mb-4">I'm María Grandury!</div>
        <br>
        <img
          class="rounded-full w-64 h-64"
          src="/images/profile/maria_grandury.png"
          alt="María Grandury"
        />
      </div>
      <div>
        <div>
          <ul class="flex flex-col gap-1">
            <li>💡 Natural Language Processing Researcher</li>
            <li>🎯 #ResponsibleNLP, #TrustworthyNLP, #NLPinSpanish</li>
            <li>🎓 Mathematician & Physicist</li>
            <br>
            <li>
              🚀 Founder
              <a
                href="https://somosnlp.org"
                target="_blank"
                class="text-accent-500 hover:underline"
                >@SomosNLP</a
              >
            </li>
            <li>
              🤗 Fellow
              <a
                href="https://huggingface.co/mariagrandury"
                target="_blank"
                class="text-accent-500 hover:underline"
                >@HuggingFace
              </a>
            </li>
            <br>
            <li>
              🔍 Researcher
              <a
                href="https://upm.es"
                target="_blank"
                class="text-accent-500 hover:underline"
                >@Technical University of Madrid</a
              >
              #LLMEvaluation #Psycholinguistics
              <!-- https://portalcientifico.upm.es/es/ipublic/researcher/337642 -->
            </li>
            <li>
              🔍 Student Researcher
              <a
                href="https://nlp.uned.es"
                target="_blank"
                class="text-accent-500 hover:underline"
                >@National University of Distance Education</a
              >
              #EnglishSpanishGap
            </li>
            <br>
            <li>
              📣 Freelance Speaker and AI Consultant, recipient of the Spanish Transition Fund from the 
              <a
                href="/docs/subvencion_fondo_de_transicion_justa.pdf"
                target="_blank"
                class="text-accent-500 hover:underline"
                >Ministry of Industry, Commerce, and Employment</a>.
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </Container>

  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8 xl:grid-cols-2">
      
      <div class="px-8">
        <div class="text-3xl mb-4">Current projects, join us!</div>
        <div class="grid py-6 gap-x-6 gap-y-3">
          <CardProject
            title="SomosNLP"
            :tags="['My 💛 project']"
            link="https://somosnlp.org"
            color="text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-500"
          >
            <i-fluent-heart-20-regular />
            <template v-slot:description>
              <div class="text-sm text-gray-700 dark:text-white">
                Did you know that we are 600 million Spanish-speaking
                individuals around the world? SomosNLP.org is an international
                community aiming to represent in AI the linguistic diversity of
                the languages spoken by all these persons.
              </div>
            </template>
          </CardProject>

          <CardProject
            title="La Leaderboard"
            :tags="['SomosNLP', 'Project #Somos600M']"
            link="https://huggingface.co/spaces/la-leaderboard/la-leaderboard"
            color="text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-500"
          >
            <i-fluent-rocket-24-regular />
            <template v-slot:description>
              <div class="text-sm text-gray-700 dark:text-white">
                We have created the first open leaderboard to evaluate LLMs in languages and language varieties from LATAM, the Caribbean and Spain. Join us!
              </div>
            </template>
          </CardProject>

          <!-- <CardTalkDetailed
            talk="Proyecto #Somos600M: Diversidad lingüística en IA"
            event_link="https://somosnlp.org/somos600m"
            image_link="images/projects/240301_somos600m.jpg"
            recording_link="https://www.youtube.com/playlist?list=PLTA-KAy8nxaASMwEUWkkTfMaDxWBxn-8J"
            :tags="['NLP in Spanish', 'Open-Source', 'Hackathon', '🇪🇸']"
          >
            <i-mdi-youtube style="font-size: 1.25rem" />
            <template v-slot:abstract>
              <div class="text-sm text-gray-700 dark:text-white"></div>
            </template>
          </CardTalkDetailed> -->
        </div>
      </div>

      <div class="flex flex-col flex-shrink gap-12">
        <img
          class="w-screen"
          src="https://raw.githubusercontent.com/mariagrandury/mariagrandury.github.io/legacy/assets/undraw/projects_undraw_freelancer_long_hair.svg"
          alt="Projects"
        />
        <router-link
          class="
            flex
            justify-center
            place-self-center
            font-medium
            p-6
            gap-3
            text-align-center
            items-center
            border-dashed
            rounded-md
            border-2 border-gray-200
            hover:border-accent-400
          "
          to="/projects"
          >More Projects</router-link
        >
      </div>

    </div>
  </Container>

  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8 xl:grid-cols-2">
      

      <div class="flex flex-col flex-shrink gap-12">
        <img
          src="https://raw.githubusercontent.com/mariagrandury/mariagrandury.github.io/legacy/assets/undraw/talks_undraw_conference.svg"
          alt="Talks"
        />
        <router-link
          class="
            flex
            justify-center
            place-self-center
            font-medium
            p-6
            gap-3
            items-center
            border-dashed
            rounded-md
            border-2 border-gray-200
            hover:border-accent-400
          "
          to="/divulgation"
          >More Talks</router-link
        >
      </div>

      <div class="px-8">
        <div class="text-3xl mb-4">Upcoming talk, join us!</div>
        <div class="grid py-6 gap-x-6 gap-y-3">
          <CardMediaSummary
            talk="Machines that reflect us: Building AI systems responsibly"
            event="Women in Data Science Zurich | Round Table"
            event_link="https://www.wids.ch/"
            image_link="images/events/240607_wids.jpeg"
            recording_link=""
            :tags="['Responsible AI', 'Explainable AI', '🇬🇧']"
          >
            <i-tabler:external-link style="font-size: 1.25rem" />
            <template v-slot:abstract>
              <div class="text-sm text-gray-700 dark:text-white"></div>
            </template>
          </CardMediaSummary>
        </div>
      </div>
      
    </div>
  </Container>

  
</template>
