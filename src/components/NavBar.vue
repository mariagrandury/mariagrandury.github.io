<script setup lang="ts">
import { useDark } from "@vueuse/core";

const isDark = useDark();
</script>

<template>
  <nav class="grid gap-6 md:grid-cols-[auto,max-content,max-content]">
    <router-link class="contents" to="/">
      <Logo class="<md:mx-auto" />
    </router-link>
    <div class="flex gap-6 justify-around items-center">
      <router-link to="/projects">Projects</router-link>
      <router-link to="/talks">Talks</router-link>
      <router-link to="/skills">Skills</router-link>
      <!-- <router-link to="/about">About</router-link> -->
      <!-- <router-link to="/contact">Contact</router-link> -->
    </div>
    <div class="flex gap-6 justify-around items-center">
      <a href="https://twitter.com/mariagrandury" target="_blank" class="contents">
        <i-uil-twitter />
      </a>
      <a href="https://linkedin.com/in/mariagrandury/" target="_blank" class="contents">
        <i-uil-linkedin />
      </a>
      <a href="https://github.com/mariagrandury" target="_blank" class="contents">
        <i-uil-github />
      </a>
      <div class="contents select-none">
        <i-uil-sun @click="isDark = true" class="cursor-pointer" v-show="!isDark" />
        <i-uil-moon @click="isDark = false" class="cursor-pointer" v-show="isDark" />
      </div>
    </div>
  </nav>
</template>
