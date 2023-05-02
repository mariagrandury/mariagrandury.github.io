<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Patos',
  meta: [
    { name: 'robots', content: 'noindex' },
  ],
})
</script>

<template>
    <Container class="bg-white dark:bg-gray-900">
        <div>
            <h1>Patos</h1>
            <p>Patito te quiero mucho muchísimo</p>
        </div>
    </Container>
</template>
