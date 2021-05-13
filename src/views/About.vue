<template>
  <div class="bg-orange-50 dark:bg-teal-900">
    <div class="container mx-auto min-h-screen flex flex-col">
      <NavBar />
      <div
        class="container mx-auto flex-grow grid content-center place-items-center text-3xl"
      >
        About me!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";

export default defineComponent({
  name: "Contact",
  components: {
    NavBar,
  },
});
</script>
