<script setup lang="ts">
import { useDark } from "@vueuse/core";

const isDark = useDark();

defineProps<{
    name: string,
    ext: string,
    dark?: string,
    url?: string
}>()
</script>
<template>
    <CardGeneric class="grid bg-white">
        <a class="contents" :href="url" target="_blank">
            <div class="grid p-4 gap-4 place-items-center">
                <!-- <img :src="`images/logos/${image}?nf_resize=fit&w=300&h=350`" /> -->
                <img v-if="isDark && dark" :src="`images/logos/${name}_dark.${ext}`" :alt="name" />
                <img v-else :src="`images/logos/${name}.${ext}`" :alt="name" />
                <slot></slot>
            </div>
        </a>
    </CardGeneric>
</template>
