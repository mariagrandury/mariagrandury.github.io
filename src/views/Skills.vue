<template>
  <div class="bg-blue-50 dark:bg-teal-900">
    <div class="container mx-auto min-h-screen flex flex-col">
      <NavBar />
      <div
        class="container mx-auto flex-grow grid content-center place-items-center text-3xl"
      >
        Here are my skills!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";

export default defineComponent({
  name: "Skills",
  components: {
    NavBar,
  },
});
</script>
