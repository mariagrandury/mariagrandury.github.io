<!-- Proposal: contact page with "ways to get involved" cards (SomosNLP community, aligned projects, INCLUDE-3.0 data, students, talks) above the contact card -->
<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useLanguage } from '../composables/useLanguage'

useHead({ title: 'María Grandury - Contact (proposal)' })

const { lang } = useLanguage()

const DISCORD = 'https://discord.com/invite/my8w7JUxZR'
</script>

<template>
  <div class="min-h-screen grid grid-rows-[auto,1fr]">
    <Container class="bg-[#fffd] dark:bg-[#0002]">
      <NavBar />
    </Container>
    <Container class="bg-white dark:bg-gray-900">
      <h1 class="flex gap-2 items-center font-semibold tracking-tight text-4xl">
        {{ lang === 'en' ? 'Contact' : 'Contacto' }}
        <i-fluent-chat-12-regular style="font-size: 2rem" />
      </h1>
      <p class="py-6 text-lg">
        {{ lang === 'en'
          ? "Feel free to reach out about my research, collaborations or invitations to speak about responsible, inclusive and open-source NLP. Here are some of the ways we can work together:"
          : 'No dudes en escribirme sobre mi investigación, colaboraciones o invitaciones para hablar de PLN responsable, inclusivo y open-source. Estas son algunas formas de trabajar juntos:' }}
      </p>

      <div class="grid gap-4 md:grid-cols-2">
        <!-- Join SomosNLP: the main call, spans the full width -->
        <CardGeneric class="md:col-span-2 p-6 border-l-4 border-yellow-400 flex flex-col md:flex-row gap-6 md:items-center">
          <img src="/images/logos/SomosNLP.svg" alt="SomosNLP" class="w-24 h-24 object-contain flex-shrink-0" />
          <div class="flex-1">
            <h2 class="text-xl font-semibold">{{ lang === 'en' ? 'Join the SomosNLP community' : 'Únete a la comunidad SomosNLP' }}</h2>
            <p class="text-gray-700 dark:text-gray-200 pt-1">
              {{ lang === 'en'
                ? 'Everyone is welcome! SomosNLP is free and online: join thousands of people working on NLP in Spanish and the languages of LATAM and Spain, share your projects and take part in our hackathons, talks and collaborative projects.'
                : '¡Todo el mundo es bienvenido! SomosNLP es gratuita y online: únete a miles de personas que trabajan en PLN en español y en las lenguas de LATAM y España, comparte tus proyectos y participa en nuestros hackathons, charlas y proyectos colaborativos.' }}
            </p>
          </div>
          <a
            :href="DISCORD"
            target="_blank"
            class="inline-flex items-center gap-2 font-semibold px-5 py-3 rounded-md bg-yellow-400 hover:bg-yellow-300 text-gray-900 flex-shrink-0"
          >
            <i-simple-icons-discord />
            {{ lang === 'en' ? 'Join on Discord' : 'Únete en Discord' }}
          </a>
        </CardGeneric>

        <CardGeneric class="p-6 flex flex-col gap-2">
          <h2 class="text-lg font-semibold flex gap-2 items-center"><i-fluent-megaphone-24-regular />{{ lang === 'en' ? 'Aligned projects & events' : 'Proyectos y eventos afines' }}</h2>
          <p class="text-sm text-gray-700 dark:text-gray-200">
            {{ lang === 'en'
              ? 'Are you building a project or organizing an event that promotes open, inclusive or multilingual AI? Through SomosNLP we can support it and give it visibility in our community.'
              : '¿Estás desarrollando un proyecto u organizando un evento que impulsa una IA abierta, inclusiva o multilingüe? Desde SomosNLP podemos apoyarlo y darle visibilidad en nuestra comunidad.' }}
          </p>
        </CardGeneric>

        <CardGeneric class="p-6 flex flex-col gap-2">
          <h2 class="text-lg font-semibold flex gap-2 items-center"><i-fluent-globe-24-regular />{{ lang === 'en' ? 'Cultural data collection' : 'Recogida de datos culturales' }}</h2>
          <p class="text-sm text-gray-700 dark:text-gray-200">
            {{ lang === 'en'
              ? 'Interested in collecting exams and cultural knowledge in your language or region? We might create INCLUDE-3.0, so get in touch if you would like to contribute!'
              : '¿Te interesa recopilar exámenes y conocimiento cultural de tu lengua o región? Puede que creemos INCLUDE-3.0, ¡escríbeme si te gustaría contribuir!' }}
            <a href="https://huggingface.co/datasets/epfl-nlp/include-2.0" target="_blank" class="text-accent-500 hover:underline">{{ lang === 'en' ? 'See INCLUDE-2.0' : 'Ver INCLUDE-2.0' }}</a>.
          </p>
        </CardGeneric>

        <CardGeneric class="p-6 flex flex-col gap-2">
          <h2 class="text-lg font-semibold flex gap-2 items-center"><i-fluent-hat-graduation-24-regular />{{ lang === 'en' ? 'Students' : 'Estudiantes' }}</h2>
          <p class="text-sm text-gray-700 dark:text-gray-200">
            {{ lang === 'en'
              ? "Doing a Master's at EPFL, or interested in a (remote) internship at SomosNLP? I'm very happy to supervise or host you. We have limited capacity each semester, so reach out early!"
              : '¿Estudias un máster en EPFL o te interesan unas prácticas (en remoto) en SomosNLP? Estaré encantada de supervisarte o acogerte. Tenemos capacidad limitada cada semestre, ¡escríbeme con antelación!' }}
          </p>
        </CardGeneric>

        <CardGeneric class="p-6 flex flex-col gap-2">
          <h2 class="text-lg font-semibold flex gap-2 items-center"><i-fluent-mic-24-regular />{{ lang === 'en' ? 'Talks & media' : 'Charlas y medios' }}</h2>
          <p class="text-sm text-gray-700 dark:text-gray-200">
            {{ lang === 'en'
              ? 'I give keynotes, talks and workshops and join round tables, in Spanish and English, usually about responsible, multilingual and open-source AI.'
              : 'Doy keynotes, charlas y talleres y participo en mesas redondas, en español e inglés, normalmente sobre IA responsable, multilingüe y open-source.' }}
            <router-link to="/divulgation" class="text-accent-500 hover:underline">{{ lang === 'en' ? 'Past talks' : 'Charlas anteriores' }}</router-link>.
          </p>
        </CardGeneric>
      </div>
    </Container>
    <Container class="bg-accent-500 dark:bg-gray-800" style="background-image: url('https://mariagrandury.github.io/assets/map-image.png');
      background-repeat: no-repeat; background-size: contain; background-position: center;">
      <CardContact />
    </Container>
  </div>
</template>
