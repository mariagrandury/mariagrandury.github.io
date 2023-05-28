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
      <NavBar />
    </Container>
    <Container class="bg-white dark:bg-gray-900">
      <div>
        <h1 class="flex gap-2 items-center">
          <div class="font-semibold tracking-tight text-4xl">Feliz Cumple Patito</div>
          <i-noto-duck style="font-size: 2rem;" />
          <i-twemoji-party-popper style="font-size: 2rem;" />
        </h1>
        <h2 class="py-6">Te quiero mucho muchísimo</h2>
      </div>
  
      <div class="lg:px-84 sm:px-12">
        <div class="grid py-6 gap-y-3 grid-cols-1">
          <CardProject title="Cafecito"
            link="https://somosnlp.org/hackathon">
            <i-fluent-rocket-24-regular />
            <template v-slot:description>
              <div class="text-sm text-gray-700 dark:text-white">
                Second edition of the largest open-source hackathon of NLP in
                Spanish. This year's edition counts with +500 participants, 17 speakers, and 7 mentors. Still in progress, we'll announce the winners shortly!
              </div>
            </template>
          </CardProject>
          <CardProject title="Somos Mujeres NLP" :tags="['Women in AI', 'NLP', 'Somos NLP']"
          link="" color="text-pink-800 bg-pink-50 dark:text-white dark:bg-pink-800">
          <i-fluent-heart-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Organized two initiatives to promote both the work and research of women in NLP and also the projects that apply NLP to fight sexism.
            </div>
          </template>
        </CardProject>  
        </div>
  </div>
 </Container>
</template>
