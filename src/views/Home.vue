<template>
  <div class="bg-teal-50 dark:bg-teal-900">
    <div class="container mx-auto min-h-screen flex flex-col">
      <NavBar />
      <div
        class="container mx-auto flex-grow grid content-center place-items-center text-3xl"
      >
        <div
          @click="i = (i + 1) % greetings.length"
          class="cursor-pointer select-none"
        >
          {{ greetings[i] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";

export default defineComponent({
  name: "Home",
  components: {
    NavBar,
  },
  data() {
    return {
      i: 0,
      greetings: [
        "Hi! I'm María.",
        "Hola! Yo soy María.",
        "Bonjour! Je suis María.",
        "Hallo! Ich bin María.",
      ],
    };
  },
});
</script>
