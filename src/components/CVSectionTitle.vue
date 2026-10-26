<!-- Section title of the Overleaf CV: icon + small caps, with a rule below -->
<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <h2 class="cv-section flex items-center gap-2 mt-5 mb-2 pb-0.5">
    <span class="text-base"><slot /></span>
    <span>{{ title }}</span>
  </h2>
</template>
