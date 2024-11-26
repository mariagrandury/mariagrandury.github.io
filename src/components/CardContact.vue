<script setup lang="ts">
import { computed, ref } from "vue";
import { useMouseInElement } from "@vueuse/core";

const el = ref(null);
const { elementX, elementY, elementWidth, elementHeight } = useMouseInElement(el);
const rotationStyle = computed(() => {
    const scale = (Number(elementWidth.value > 500) + 1) / 2;
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
    <div ref="el" class="h-full w-full grid relative place-items-center" style="min-height: 400px; perspective: 800px;">
        <!-- uncomment to use translucency -->
        <!-- class="border-white bg-[#fff5] border-1 border-opacity-25 rounded-2xl grid p-10 absolute dark:border-black dark:bg-[#0002] dark:border-opacity-25" -->
        <!-- style="backdrop-filter: blur(20px)" -->
        <div class="bg-[#fff5] rounded-lg border-1 border-gray-200 shadow grid p-8 absolute overflow-hidden dark:border-black dark:bg-[#0002]"
            style="width: 540px; height: 312px; backdrop-filter: blur(10px)" :style="rotationStyle">
            <!-- uncomment for blurry circles -->
            <!-- <div
            class="rounded-full bg-purple-300 h-32 -right-4 -bottom-3 w-32 -z-1 absolute"
            style="mix-blend-mode: multiply; filter: blur(40px);"
          ></div>
          <div
            class="rounded-full bg-yellow-300 h-32 top-0 -right-4 w-32 -z-1 absolute"
            style="mix-blend-mode: multiply; filter: blur(40px);"
          ></div>
          <div
            class="rounded-full bg-pink-300 h-32 top-19 right-12 w-32 -z-1 absolute"
            style="mix-blend-mode: multiply; filter: blur(40px);"
            ></div>-->
            <div class="grid grid-cols-[auto,max-content]">
                <div>
                    <h1 class="font-medium mb-1 text-2xl tracking-tight">María Grandury</h1>
                    <h2 class="font-light text-lg tracking-tight">NLP Researcher</h2>
                    <p class="font-light text-sm tracking-tight">LLM Evaluation, Responsible AI and AI in Spanish</p>
                </div>
                <!-- <Logo /> -->
            </div>
            <div class="font-light grid gap-x-4 gap-y-1 grid-cols-[auto,1fr] items-center">
                <!--
                <a href="tel:+34681188591" class="contents">
                    <i-fluent-phone-24-regular />
                    <div>+34 681188591</div>
                </a>
                -->
                <a href="mailto: mariagrandury@gmail.com" target="_blank" class="contents">
                    <i-fluent-mail-24-regular />
                    <div>mariagrandury AT gmail DOT com</div>
                </a>
                <a href="https://mariagrandury.com" target="_blank" class="contents">
                    <i-fluent-link-square-24-regular />
                    <div>mariagrandury.com</div>
                </a>
                <a href="https://wikipedia.org/wiki/Berlin" target="_blank" class="contents">
                    <i-fluent-location-24-regular />
                    <div>Madrid / Berlin</div>
                </a>
                <!--
                <a href="https://www.neurocat.ai/" target="_blank" class="contents">
                    <i-fluent-building-24-regular />
                    <div>Research Engineer @neurocat.ai</div>
                </a> 
                -->
                <a href="https://somosnlp.org" target="_blank" class="contents">
                    <i-fluent-rocket-24-regular />
                    <div>Founder @SomosNLP.org</div>
                </a>
            </div>
        </div>
    </div>
</template>