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
      <router-link class="hover:underline underline-2px underline-accent-500" to="/projects">Projects</router-link>
      <router-link class="hover:underline underline-2px underline-accent-500" to="/talks">Talks</router-link>
      <router-link class="hover:underline underline-2px underline-accent-500" to="/about">About</router-link>
      <router-link class="hover:underline underline-2px underline-accent-500" to="/contact">Contact</router-link>
    </div>
    <div class="flex gap-6 justify-around items-center">
      <a href="https://twitter.com/mariagrandury" target="_blank" class="content hover:text-accent-500">
        <i-uil-twitter />
      </a>
      <a href="https://linkedin.com/in/mariagrandury/" target="_blank" class="contents hover:text-accent-500">
        <i-uil-linkedin />
      </a>
      <a href="https://github.com/mariagrandury" target="_blank" class="contents hover:text-accent-500">
        <i-uil-github />
      </a>
      <div class="contents select-none">
        <i-uil-sun @click="isDark = true" class="cursor-pointer hover:text-accent-500" v-show="!isDark" />
        <i-uil-moon @click="isDark = false" class="cursor-pointer hover:text-accent-500" v-show="isDark" />
      </div>
    </div>
  </nav>
</template>
