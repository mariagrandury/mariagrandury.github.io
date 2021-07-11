<script setup lang="ts">
defineProps<{
    url: string
}>()
</script>
<template>
    <GenericCard class="grid p-4 place-items-center">
        <img :src="`https://mariagrandury.github.io/assets/logos/${url}`" />
    </GenericCard>
</template>
