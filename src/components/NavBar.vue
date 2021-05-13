<template>
  <header>
    <div class="flex p-6 justify-between">
      <div class="flex">
        <router-link to="/"><i-uil-home /></router-link>
      </div>
      <div class="flex gap-x-4 items-center">
        <router-link to="/projects">Projects</router-link>
        <router-link to="/skills">Skills</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <a
          href="https://github.com/mariagrandury"
          target="_blank"
          class="contents"
        >
          <i-uil-github />
        </a>
        <a
          href="https://linkedin.com/in/mariagrandury/"
          target="_blank"
          class="contents"
        >
          <i-uil-linkedin />
        </a>
        <a
          href="https://twitter.com/mariagrandury"
          target="_blank"
          class="contents"
        >
          <i-uil-twitter />
        </a>
        <div class="contents">
          <i-uil-sun
            @click="toggleDark"
            class="cursor-pointer"
            v-show="!isDark"
          />
          <i-uil-moon
            @click="toggleDark"
            class="cursor-pointer"
            v-show="isDark"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useDark, useToggle } from "@vueuse/core";

export default defineComponent({
  name: "NavBar",
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    return { isDark, toggleDark };
  },
});
</script>
