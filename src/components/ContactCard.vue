<script setup lang="ts">
import { computed, ref } from "vue";
import { useMouseInElement } from "@vueuse/core";

const el = ref(null);
const { elementX, elementY, elementWidth, elementHeight } = useMouseInElement(el);
const rotationStyle = computed(() => {
    const scale = Math.min(2, Math.ceil(elementWidth.value / 500)) / 2;
    const x = - elementY.value / elementHeight.value + 0.5;
    const y = elementX.value / elementWidth.value - 0.5;
    const tmp = Math.sqrt(x * x + y * y)
    const angle = 30 * tmp / (1 + Math.abs(tmp));
    return {
        transform: `scale(${scale}) rotate3d(${x}, ${y}, 0, ${angle}deg)`,
    };
});
</script>


<!-- <style scoped>
.texture {
  background-image: url("");
  background-size: cover;
}
</style> -->

<template>
    <div
        ref="el"
        class="relative w-full h-full grid place-items-center"
        style="min-height: 400px; perspective: 800px;"
    >
        <!-- uncomment to use translucency -->
        <!-- class="border-white bg-[#fff5] border-1 border-opacity-25 rounded-2xl grid p-10 dark:border-black absolute dark:bg-[#0002] dark:border-opacity-25" -->
        <!-- style="backdrop-filter: blur(20px)" -->
        <div
            class="bg-white border-1 border-gray-200 rounded-2xl shadow grid p-8 dark:border-black absolute dark:bg-gray-900 overflow-hidden"
            style="width: 540px; height: 312px;"
            :style="rotationStyle"
        >
            <!-- uncomment for blurry circles -->
            <!-- <div
            class="-z-1 absolute -bottom-3 -right-4 w-32 h-32 rounded-full bg-purple-300"
            style="mix-blend-mode: multiply; filter: blur(40px);"
          ></div>
          <div
            class="-z-1 absolute top-0 -right-4 w-32 h-32 rounded-full bg-yellow-300"
            style="mix-blend-mode: multiply; filter: blur(40px);"
          ></div>
          <div
            class="-z-1 absolute top-19 right-12 w-32 h-32 rounded-full bg-pink-300"
            style="mix-blend-mode: multiply; filter: blur(40px);"
            ></div>-->
            <div class="grid grid-cols-[auto,max-content]">
                <div>
                    <h1 class="font-medium text-2xl tracking-tight mb-1">María Grandury</h1>
                    <h2 class="font-light text- tracking-tight">Machine Learning Research Engineer</h2>
                </div>
                <Logo style="font-size: 2rem;" />
            </div>
            <div class="font-light grid gap-x-4 gap-y-1 grid-cols-[auto,1fr] items-center">
                <a href="tel:+34681188591" class="contents">
                    <i-fluent-phone-24-regular />
                    <span>+34 681188591</span>
                </a>
                <a href="mailto: mariagrandury@gmail.com" class="contents">
                    <i-fluent-mail-24-regular />
                    <span>mariagrandury@gmail.com</span>
                </a>
                <a href="https://mariagrandury.github.io" target="_blank" class="contents">
                    <i-fluent-link-square-24-regular />
                    <span>mariagrandury.github.io</span>
                </a>
                <a href="https://wikipedia.org/wiki/Berlin" target="_blank" class="contents">
                    <i-fluent-location-24-regular />
                    <span>Berlin, Germany</span>
                </a>
                <a href="https://www.neurocat.ai/" target="_blank" class="contents">
                    <i-fluent-building-24-regular />
                    <span>neurocat GmbH</span>
                </a>
            </div>
        </div>
    </div>
</template>