<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { useLanguage } from "../composables/useLanguage";

const isDark = useDark();
const { lang, toggleLanguage } = useLanguage();
</script>

<template>
  <nav class="grid gap-6 md:grid-cols-[auto,max-content,max-content]">
    <router-link class="contents" to="/">
      <Logo class="<md:mx-auto" />
    </router-link>
    <div class="flex gap-6 justify-around items-center">
      <router-link class="hover:underline underline-2px underline-accent-500" to="/research">
        {{ lang === 'en' ? 'Research' : 'Investigación' }}
      </router-link>
      <router-link class="hover:underline underline-2px underline-accent-500" to="/divulgation">
        {{ lang === 'en' ? 'Divulgation' : 'Divulgación' }}
      </router-link>
      <router-link class="hover:underline underline-2px underline-accent-500" to="/projects">
        {{ lang === 'en' ? 'Projects' : 'Proyectos' }}
      </router-link>
      <router-link class="hover:underline underline-2px underline-accent-500" to="/about">
        {{ lang === 'en' ? 'Bio' : 'Biografía' }}
      </router-link>
      <router-link class="hover:underline underline-2px underline-accent-500" to="/contact">
        {{ lang === 'en' ? 'Contact' : 'Contacto' }}
      </router-link>
    </div>
    <div class="flex gap-6 justify-around items-center">
      <a href="https://x.com/mariagrandury" target="_blank" class="content hover:text-accent-500">
        <i-codicon-twitter />
      </a>
      <a href="https://linkedin.com/in/mariagrandury/" target="_blank" class="contents hover:text-accent-500">
        <i-uil-linkedin />
      </a>
      <button
        @click="toggleLanguage"
        class="cursor-pointer hover:text-accent-500 text-sm font-medium select-none"
      > <i-dashicons-translation />
        {{ lang === 'en' ? 'ES' : 'EN' }}
      </button>
      <div class="contents select-none">
        <i-uil-sun @click="isDark = true" class="cursor-pointer hover:text-accent-500" v-show="!isDark" />
        <i-uil-moon @click="isDark = false" class="cursor-pointer hover:text-accent-500" v-show="isDark" />
      </div>
    </div>
  </nav>
</template>
