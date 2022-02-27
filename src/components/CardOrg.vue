<script setup lang="ts">
defineProps<{
    name: string,
    img: string,
    url?: string
}>()
</script>
<template>
    <CardGeneric class="grid">
        <a class="contents" :href="url" target="_blank">
            <div class="grid p-4 gap-4 place-items-center">
                <img :src="`https://mariagrandury.github.io/assets/logos/${img}`" :alt="name" />
                <slot></slot>
            </div>
        </a>
    </CardGeneric>
</template>
