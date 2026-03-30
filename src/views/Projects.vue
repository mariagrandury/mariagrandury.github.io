<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useHead } from "@vueuse/head";
import { parseProjectsCSV, type Project } from "../utils/csvParser";
import { useLanguage } from "../composables/useLanguage";

useHead({
  title: "María Grandury - Open-Source AI Research Projects",
  meta: [
    {
      name: "description",
      content:
        "Hello! I'm María, an NLP Researcher and the Founder @ SomosNLP.org | Here you can find my open-source AI projects",
    },
    {
      property: "og:title",
      content: "María Grandury - Open-Source NLP Research Projects",
    },
    {
      property: "og:image",
      content:
        "https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg",
    },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "@mariagrandury" },
    { name: "twitter:creator", content: "@mariagrandury" },
  ],
});

const projects = ref<Project[]>([]);
const { lang } = useLanguage();

onMounted(async () => {
  try {
    const response = await fetch("/data/projects.csv");
    const csvText = await response.text();
    projects.value = parseProjectsCSV(csvText);
  } catch (error) {
    console.error("Error loading projects:", error);
  }
});

const featuredProjects = computed(() =>
  projects.value.filter((project) => project.status === "featured")
);

const currentProjects = computed(() =>
  projects.value.filter((project) => project.status === "current")
);

const previousProjects = computed(() =>
  projects.value.filter((project) => project.status === "previous")
);
</script>

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div>
      <h1 class="flex gap-2 items-center">
        <div class="font-semibold tracking-tight text-4xl">
          {{ lang === 'en' ? 'Open-Source NLP Projects' : 'Proyectos de Código Abierto de PLN' }}
        </div>
        <i-fluent-design-ideas-24-regular style="font-size: 2rem" />
      </h1>
      <h2 class="py-6" v-if="lang === 'en'">
        I'm a Natural Language Processing (NLP) Researcher passionate about increasing the representation of the linguistic and cultural diversity of the world in language models. Do you want to collaborate?
      </h2>
      <h2 class="py-6" v-else>
        Soy una investigadora en Procesamiento del Lenguaje Natural (PLN) con la misión mejorar la representación de la diversidad lingüística y cultural del mundo en los modelos de lenguaje. ¿Quieres colaborar?
      </h2>
      <p class="italic text-sm text-gray-500" v-if="lang === 'en'">
        Last update: July 2025 | For up-to-date information check
        <a
          href="https://www.huggingface.co/mariagrandury/"
          target="_blank"
          class="text-accent-500 hover:underline"
          >my Hugging Face profile</a
        >!
      </p>
      <p class="italic text-sm text-gray-500" v-else>
        Última actualización: julio 2025 | Para información actualizada consulta
        <a
          href="https://www.huggingface.co/mariagrandury/"
          target="_blank"
          class="text-accent-500 hover:underline"
          >mi perfil de Hugging Face</a
        >.
      </p>
    </div>

    <div class="py-6 lg:px-24 sm:px-12">
      <CardProject
        v-for="project in featuredProjects"
        :key="project.title"
        :title="project.title"
        :tags="project.tags"
        :link="project.link"
        :color="project.color"
        :icon="project.icon"
        :description="project.description"
      />

      <div class="grid py-6 gap-x-6 gap-y-3 lg:grid-cols-2">
        <div class="col-span-2">
          <br />
          <h3 class="text-2xl">
            {{ lang === 'en' ? 'Current & Recent Projects' : 'Proyectos Actuales y Recientes' }}
          </h3>
          <br />
        </div>
        <CardProject
          v-for="project in currentProjects"
          :key="project.title"
          :title="project.title"
          :tags="project.tags"
          :link="project.link"
          :color="project.color"
          :icon="project.icon"
          :description="project.description"
        />

        <div class="col-span-2">
          <br />
          <h3 class="text-2xl">
            {{ lang === 'en' ? 'Previous Projects' : 'Proyectos Anteriores' }}
          </h3>
          <br />
        </div>
        <CardProject
          v-for="project in previousProjects"
          :key="project.title"
          :title="project.title"
          :tags="project.tags"
          :link="project.link"
          :color="project.color"
          :icon="project.icon"
          :description="project.description"
        />
      </div>

      <div class="flex my-6 justify-center">
        <a
          href="https://huggingface.co/mariagrandury"
          target="_blank"
          class="
            flex
            font-medium
            p-6
            gap-3
            items-center
            border-dashed
            rounded-md
            border-2 border-gray-200
            hover:border-accent-400
          "
        >
          <div>{{ lang === 'en' ? 'More on Hugging Face' : 'Más en Hugging Face' }}</div>
        </a>
      </div>
    </div>
  </Container>
</template>
