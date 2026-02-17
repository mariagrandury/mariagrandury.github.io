<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useHead } from "@vueuse/head";
import { parseEventsCSV, type Event } from "../utils/csvParser";

useHead({
  title: "María Grandury - NLP Divulgation: Talks, Interviews & Articles",
  meta: [
    {
      name: "description",
      content:
        "Hello! I'm María, an NLP Researcher and the Founder @ SomosNLP.org | Here you can find my talks and other divulgation content",
    },
    {
      property: "og:title",
      content: "María Grandury - NLP Divulgation: Talks, Interviews & Articles",
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

const events = ref<Event[]>([]);

onMounted(async () => {
  try {
    const response = await fetch("/data/events.csv");
    const csvText = await response.text();
    events.value = parseEventsCSV(csvText);
  } catch (error) {
    console.error("Error loading events:", error);
  }
});

const eventsByYear = computed(() => {
  const grouped: Record<string, Event[]> = {};
  events.value.forEach((event) => {
    if (!grouped[event.year]) {
      grouped[event.year] = [];
    }
    grouped[event.year].push(event);
  });
  // Sort years descending
  const sortedYears = Object.keys(grouped).sort((a, b) => b.localeCompare(a));
  return sortedYears.map((year) => ({ year, events: grouped[year] }));
});
</script>

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div>
      <h1 class="flex gap-2 items-center">
        <div class="font-semibold tracking-tight text-4xl">
          Talks, Interviews & Media
        </div>
        <i-fluent-chat-12-regular style="font-size: 2rem" />
      </h1>
      <h2 class="py-6">
        I'm passionate about what I do and really enjoy divulgating! Reach out
        if you would like me to give a keynote, talk or workshop!
      </h2>
    </div>
    <div>
      <p class="italic text-sm text-gray-500">
        Last update: January 2026 | For up-to-date information check
        <a
          href="https://www.linkedin.com/in/mariagrandury/"
          target="_blank"
          class="text-accent-500 hover:underline"
          >my LinkedIn profile</a
        >!
      </p>
    </div>
    <div class="lg:px-24 sm:px-12">
      <br />
      <br /> 

      <div class="grid py-6 gap-x-6 gap-y-3">
        <template v-for="yearGroup in eventsByYear" :key="yearGroup.year">
          <h3 class="text-2xl">{{ yearGroup.year }}</h3>
        <CardMediaMini
            v-for="event in yearGroup.events"
            :key="event.talk"
            :talk="event.talk"
            :organizer="event.organizer"
            :event="event.event"
            :event_link="event.event_link"
            :image_link="event.image_link"
            :recording_link="event.recording_link"
            :language="event.language"
            :type="event.type"
            :date="event.date"
            :location="event.location"
            :tags="event.tags"
            :abstract="event.abstract"
            :sm_link="event.sm_link"
          />
          <br v-if="yearGroup !== eventsByYear[eventsByYear.length - 1]" />
          </template>
      </div>
      <!-- OLD STATIC VERSION REMOVED - Now loading from CSV -->
      <div class="flex my-6 justify-center">
        <a
          href="mailto:mariagrandury@gmail.com"
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
          <div>Get in contact!</div>
        </a>
      </div>
    </div>
  </Container>
</template>
