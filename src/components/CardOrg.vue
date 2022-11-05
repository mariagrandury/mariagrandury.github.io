<script setup lang="ts">
defineProps<{
    image: string,
    url?: string
}>()
</script>
<template>
    <CardGeneric class="grid">
        <a class="contents" :href="url" target="_blank">
            <div class="grid p-4 gap-4 place-items-center">
                <!-- <img :src="`images/logos/${image}?nf_resize=fit&w=300&h=350`" /> -->
                <img :src="`images/logos/${image}`" :alt="image.split('.')[0]" />
                <slot></slot>
            </div>
        </a>
    </CardGeneric>
</template>
