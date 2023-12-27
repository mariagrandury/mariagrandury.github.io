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
            <li>🎯 #NLP, #ResponsibleAI, #AIinSpanish</li>
            <li>🎓 Mathematician & Physicist</li>
            <li>
              🚀 Founder
              <a href="https://somosnlp.org" target="_blank"
                class="text-accent-500 hover:underline">@SomosNLP</a>
            </li>
            <li>
              🤗 Fellow
              <a href="https://huggingface.co/mariagrandury" target="_blank"
                class="text-accent-500 hover:underline">@HuggingFace
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
        <!-- <div class="text-3xl mb-4">I was invited to speak at</div> -->
        <div class="grid py-6 gap-x-6 gap-y-3">
          <CardTalkDetailed talk="IA y Español"
                event="IE Center for the Governance of Change y Clibrain | Round Table"
                event_link="https://www.eventbrite.com/e/entradas-inteligencia-artificial-y-espanol-637934588527"
                image_link="images/events/230530_ia_y_espanol.jpg"
                recording_link=""
                :tags="['AI in Spanish', 'NLP', '🇪🇸']">
                <i-tabler:external-link style="font-size: 1.25rem;" />
                <template v-slot:abstract>
                    <div class="text-sm text-gray-700 dark:text-white">
                        Acto de clausura del Hackathon organizado por IE Center for the Governance of Change y Clibrain.
                        <br />
                        <br />
                        El evento incluirá una mesa redonda de expertos: Guillermo Escribano, director general del español en el mundo en el MAUEC, María Grandury, fundadora de SomosNLP.org, y Alfonso Ureña López, presidente en Sociedad Española para el Procesamiento del Lenguaje Natural (SEPLN), nos hablarán sobre la importancia del español como lengua nativa del IA, las implicaciones económicas y culturales de su uso, y la forma de paliar el actual retraso con respecto al inglés. El panel estará moderado por David Villalon, Co-Founder de Clibrain.
                    </div>
                </template>
            </CardTalkDetailed>
        </div>
      </div>

      <div class="flex flex-col flex-shrink gap-12">
        <img
          src="https://raw.githubusercontent.com/mariagrandury/mariagrandury.github.io/legacy/assets/undraw/talks_undraw_conference.svg"
          alt="Talks" />
        <router-link
          class="flex justify-center place-self-center font-medium p-6 gap-3 items-center border-dashed rounded-md border-2 border-gray-200 hover:border-accent-400"
          to="/divulgation">More Talks</router-link>
      </div>

    </div>
  </Container>

  <Container class="bg-white dark:bg-gray-900">
    <div class="h-full grid gap-8 place-items-center lg:py-8 xl:grid-cols-2">

      <div class="flex flex-col flex-shrink gap-12">
        <img class="w-screen"
          src="https://raw.githubusercontent.com/mariagrandury/mariagrandury.github.io/legacy/assets/undraw/projects_undraw_freelancer_long_hair.svg"
          alt="Projects" />
        <router-link
          class="flex justify-center place-self-center font-medium p-6 gap-3 text-align-center items-center border-dashed rounded-md border-2 border-gray-200 hover:border-accent-400"
          to="/projects">More Projects</router-link>
      </div>

      <div class="px-8">
        <!-- <div class="text-3xl mb-4">My latest project is</div> -->
        <div class="grid py-6 gap-x-6 gap-y-3">
          <CardTalkDetailed talk="Hackathon Somos NLP 2023: Los LLMs hablan español" event="Somos NLP | Hackathon | Organizer, Host & Speaker"
            event_link="https://somosnlp.org/hackathon" image_link="images/projects/230320_hackathon_llms.jpg"
            recording_link="https://www.youtube.com/playlist?list=PLTA-KAy8nxaCDc0IJpLac-3csiAepV546"
            :tags="['NLP in Spanish', 'Open-Source', 'Hackathon', '🇪🇸']">
            <i-mdi-youtube style="font-size: 1.25rem;" />
            <template v-slot:abstract>
                <div class="text-sm text-gray-700 dark:text-white">
                  Second edition of the largest open-source hackathon of NLP in
                  Spanish. This year's edition counted with +500 participants, 17 speakers, and 7 mentors.
                  <br />
                  Check the 
                  <a target="_blank" href="https://twitter.com/SomosNLP_/status/1648752306978971666"
                      class="text-accent-700 dark:text-accent-300 hover:underline">
                      awarded projects
                    </a>
                    and the
                    <a target="_blank" href="https://www.youtube.com/playlist?list=PLTA-KAy8nxaCDc0IJpLac-3csiAepV546"
                      class="text-accent-700 dark:text-accent-300 hover:underline">
                      recorded talks and keynotes!
                    </a>
                  </div>
            </template>
        </CardTalkDetailed>

        </div>
      </div>
      
    </div>
  </Container>

</template>
