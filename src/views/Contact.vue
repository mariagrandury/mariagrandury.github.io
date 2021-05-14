
<template>
  <div class="min-h-screen grid grid-rows-[auto,1fr]">
    <Container class="bg-white dark:bg-gray-900">
      <NavBar />
    </Container>
    <Container class="bg-white dark:bg-gray-900 dark:text-white">
      <div class="h-full grid place-items-center">
        <div
          class="grid p-4 border border-gray-100 rounded-sm shadow-md bg-white dark:bg-gray-900"
          style="width: 90mm; height: 54mm"
          :style="rotation"
        >
          <div class="grid grid-cols-[auto,max-content]">
            <div>
              <h1 class="text-sm font-medium">María Grandury</h1>
              <h2 class="text-xs">Machine Learning Research Engineer</h2>
            </div>
            <Logo />
          </div>
          <div class="text-xs grid grid-cols-[auto,1fr] gap-x-2 gap-y-1 items-center">
            <a href="tel:+34681188591" class="contents">
              <i-carbon-phone />
              <span>+34 681188591</span>
            </a>
            <a href="mailto: mariagrandury@gmail.com" class="contents">
              <i-carbon-email />
              <span>mariagrandury@gmail.com</span>
            </a>
            <a href="https://mariagrandury.github.io" target="_blank" class="contents">
              <i-carbon-explore />
              <span>mariagrandury.github.io</span>
            </a>
            <a href="https://wikipedia.org/wiki/Berlin" target="_blank" class="contents">
              <i-carbon-location-person />
              <span>Berlin, Germany</span>
            </a>
            <a href="https://www.neurocat.ai/" target="_blank" class="contents">
              <i-carbon-building />
              <span>neurocat</span>
            </a>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useMouse, useWindowSize } from "@vueuse/core";

export default defineComponent({
  name: "About",
  setup() {
    const { x: mouseX, y: mouseY } = useMouse({ touch: false });
    const { width, height } = useWindowSize();
    const rotation = computed(() => {
      const x = mouseX.value - width.value / 2;
      const y = mouseY.value - height.value / 2;
      const angle = 0.02 * Math.sqrt(x * x + y * y);
      const scale = Math.min(2, Math.ceil(width.value / 768));
      return {
        transform: `perspective(1000px) scale(${scale}) rotate3d(${-y}, ${x}, 0, ${angle}deg)`,
      };
    });
    return { rotation };
  },
});
</script>
