<!-- Experience entry of the Overleaf CV: dates in a ruled left column -->
<script setup lang="ts">
import type { CVEntry } from "../data/cv";

defineProps<{ entry: CVEntry }>();
</script>

<template>
  <div class="grid grid-cols-[4.5rem,1fr] mb-2">
    <div class="text-right font-semibold pr-2 border-r border-gray-400 leading-snug">
      <div>{{ entry.end }}</div>
      <div>{{ entry.start }}</div>
    </div>
    <div class="pl-2 leading-snug">
      <div>
        <b>{{ entry.title }}, <span class="cv-sc">{{ entry.org }}</span></b>, {{ entry.place }}
      </div>
      <ul class="cv-list">
        <li v-for="bullet in entry.bullets" :key="bullet" v-html="bullet" />
      </ul>
    </div>
  </div>
</template>
