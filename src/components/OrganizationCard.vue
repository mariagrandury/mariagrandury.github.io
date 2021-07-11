<script setup lang="ts">
defineProps<{
    img: string,
    url?: string
}>()
</script>
<template>
    <GenericCard class="grid">
        <a class="contents" :href="url" target="_blank">
            <div class="grid p-4 gap-4 place-items-center">
                <img :src="`https://mariagrandury.github.io/assets/logos/${img}`" />
                <slot></slot>
            </div>
        </a>
    </GenericCard>
</template>
