<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useLanguage } from '../composables/useLanguage'

useHead({
  title: 'María Grandury - Contact',
  meta: [
    { name: 'description', content: 'Hello! I\'m an NLP Researcher, Responsible AI & AI in Spanish | Founder @SomosNLP.org | Here you can find my contact information' },
    { property: 'og:title', content: 'María Grandury - Contact' },
    { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@mariagrandury' },
    { name: 'twitter:creator', content: '@mariagrandury' },
  ],
})

const { lang } = useLanguage()
</script>

<template>
  <div class="min-h-screen grid grid-rows-[auto,1fr]">
    <Container class="bg-[#fffd] dark:bg-[#0002]">
      <NavBar />
    </Container>
    <Container class="bg-white dark:bg-gray-900">
    <div>
      <h1 class="flex gap-2 items-center">
        <div class="font-semibold tracking-tight text-4xl">
          {{ lang === 'en' ? 'Contact' : 'Contacto' }}
        </div>
        <i-fluent-chat-12-regular style="font-size: 2rem" />
      </h1>
      <h2 class="py-6" v-if="lang === 'en'">
        Please feel free to reach out for questions about my research and interest in collaborating.
        <br>
        Of course, I'm also open to invitations to speak about responsible, inclusive and open-source NLP!
        <br>
        <br>
        <p class="italic text-sm text-gray-500">
          For motivated students doing a Master's at <strong>EPFL</strong> OR interested in a (remote) internship at <strong>SomosNLP</strong>: I'm very happy to supervise/host you! Please take into account that we have limited capacity each semester so make sure to reach out early!
        </p>
      </h2>
      <h2 class="py-6" v-else>
        No dudes en contactarme si tienes preguntas sobre mi investigación o tienes interés en colaborar.
        <br>
        ¡Por supuesto, también estoy abierta a invitaciones para hablar sobre PLN responsable, inclusivo y open-source!
        <br>
        <br>
        <p class="italic text-sm text-gray-500">
          Para estudiantes de Máster en <strong>EPFL</strong> o interesados en unas prácticas (en remoto) en <strong>SomosNLP</strong>: ¡estaré encantada de supervisarte/acogerte! Ten en cuenta que tenemos capacidad limitada cada semestre, así que asegúrate de contactarme con antelación.
        </p>
      </h2>
    </div>
    </Container>
    <Container class="bg-accent-500 dark:bg-gray-800" style="background-image: url('https://mariagrandury.github.io/assets/map-image.png');
      background-repeat: no-repeat; background-size: contain; background-position: center;">
      <CardContact />
    </Container>
  </div>
</template>
