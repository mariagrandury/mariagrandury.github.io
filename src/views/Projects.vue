<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useHead } from "@vueuse/head";

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

interface Project {
  status: string;
  title: string;
  tags: string[];
  link: string;
  color: string;
  icon: string;
  description: string;
}

const projects = ref<Project[]>([]);

// Simple CSV parser
function parseCSV(csvText: string): Project[] {
  const lines = csvText.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0].split(",");
  const data: Project[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length !== headers.length) continue;

    const project: Project = {
      status: (values[0] || "").trim(),
      title: (values[1] || "").trim(),
      tags: values[2] ? values[2].split(",").map((tag) => tag.trim()) : [],
      link: (values[3] || "").trim(),
      color: (values[4] || "").trim(),
      icon: (values[5] || "").trim(),
      description: (values[6] || "").trim(),
    };

    // Clean up empty strings
    if (!project.link || project.link === "") project.link = "";
    if (!project.color || project.color === "") project.color = "";
    if (!project.icon || project.icon === "") project.icon = "";
    if (!project.description || project.description === "") project.description = "";

    data.push(project);
  }

  return data;
}

// Parse CSV line handling quoted fields
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        i++; // Skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);

  return result;
}

onMounted(async () => {
  try {
    const response = await fetch("/data/projects.csv");
    const csvText = await response.text();
    projects.value = parseCSV(csvText);
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
          Open-Source NLP Research Projects
        </div>
        <i-fluent-design-ideas-24-regular style="font-size: 2rem" />
      </h1>
      <h2 class="py-6">
        I'm a Natural Language Processing (NLP) Researcher passionate about increasing the representation of the linguistic and cultural diversity of the world in language models. Do you want to collaborate?
      </h2>
      <p class="italic text-sm text-gray-500">
        Last update: December 2024 | For up-to-date information check
        <a
          href="https://www.huggingface.co/mariagrandury/"
          target="_blank"
          class="text-accent-500 hover:underline"
          >my Hugging Face profile</a
        >!
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
          <h3 class="text-2xl">Current Projects</h3>
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
          <h3 class="text-2xl">Previous Projects</h3>
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
          <div>More on Hugging Face</div>
        </a>
      </div>
    </div>
  </Container>
</template>
