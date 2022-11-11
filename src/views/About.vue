<script setup lang="ts">
import CardOrg from '../components/CardOrg.vue';
import Container from '../components/Container.vue';
import { useHead } from '@vueuse/head'

useHead({
    title: 'María Grandury - About Me, Bio & Collaborations',
    meta: [
        { name: 'description', content: 'Hello! I\'m María, an ML Research Engineer focused on NLP and the Founder @ SomosNLP.org | Here are my bio and the organizations I collaborate with :)' },
        { property: 'og:title', content: 'María Grandury - About Me, Bio & Collaborations' },
        { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@mariagrandury' },
        { name: 'twitter:creator', content: '@mariagrandury' },
    ],
})
</script>

<template>
    <Container class="bg-white dark:bg-gray-900">
        <NavBar class="container mx-auto" />
    </Container>
    <Container>
        <h1 class="flex mb-12 gap-2 items-center">
            <div class="font-semibold tracking-tight text-4xl">About Me</div>
            <!-- <i-fluent-earth-24-regular style="font-size: 2rem" /> -->
            <i-fluent-rocket-24-regular style="font-size: 2rem" />
        </h1>

        <div class="lg:px-24 sm:px-12">
            <CardGeneric class="px-12 my-12">
                <h2 class="pt-12">
                    I'm half Spanish half French and I live in Berlin.
                    I hold two degrees in Mathematics and Physics and I'm currently working at
                    <a href="https://neurocat.ai" target="_blank"
                        class="text-accent-500 dark:text-accent-300 hover:underline">neurocat</a>
                    where I contribute to the core of
                    <a href="https://aidkit.ai" target="_blank"
                        class="text-accent-500 dark:text-accent-300 hover:underline">aidkit,</a>
                    an ML Quality Ops platform that assess the vulnerabilities of CV & NLP models
                    thanks to adversarial attacks and explainability techniques.
                </h2>
                <h2 class="py-2">
                    I believe that NLP research is too focused on English and neglects the particular
                    difficulties of other languages so I founded
                    <a href="https://somosnlp.org" target="_blank"
                        class="text-accent-500 dark:text-accent-300 hover:underline">Somos NLP,</a>
                    a community of Spanish-speaking NLP professionals democratizing and advancing
                    the state-of-the-art of NLP in Spanish.
                </h2>
                <h2 class="pb-12">
                    I'm also very aware of the gender gap in my field and I'm part of the Core Team
                    of
                    <a href="https://womeninairobotics.de" target="_blank"
                        class="text-accent-500 dark:text-accent-300 hover:underline">Women in AI & Robotics</a>
                    to increase female representation and promote inclusive and responsible AI.
                </h2>
            </CardGeneric>
        </div>

        <div>
            <h2 class="flex gap-2 items-center">
                <div class="font-semibold tracking-tight text-2xl">Organisations</div>
                <i-fluent-color-24-regular style="font-size: 2rem;" />
            </h2>
            <p class="py-3">Organizations and networks I'm part of or I collaborate with.</p>
            <div class="lg:px-24 sm:px-12">
                <div class="grid py-8 gap-4 md:grid-cols-5 md:grid-cols[auto,1fr] sm:grid-cols-3">
                    <CardOrg name="SomosNLP" ext="svg" url="https://somosnlp.org/">
                    </CardOrg>
                    <CardOrg name="BERTIN" ext="webp" url="https://huggingface.co/bertin-project">
                    </CardOrg>
                    <CardOrg name="BigScience" ext="png" url="https://bigscience.huggingface.co/">
                    </CardOrg>
                    <!-- <CardOrg name="BigCode" ext="png" url="https://www.bigcode-project.org/">
                    </CardOrg>
                    <CardOrg name="EleutherAI" ext="png" url="https://www.eleuther.ai/">
                    </CardOrg> -->
                    <CardOrg name="HF_Fellowship" ext="png" url="https://somosnlp.org/">
                    </CardOrg>
                    <CardOrg name="NovaTalent" ext="svg" dark="yes" url="https://www.novatalent.com/">
                    </CardOrg>
                    <CardOrg name="SpainAI" ext="png" dark="yes" url="https://www.spain-ai.com/">
                    </CardOrg>
                    <CardOrg name="SaturdaysAI" ext="png" url="https://saturdays.ai/">
                    </CardOrg>
                    <CardOrg name="DiverTLes" ext="png" dark="yes" url="https://gplsi.dlsi.ua.es/pln/divertles/">
                    </CardOrg>
                    <CardOrg name="WAIR" ext="jpg" url="https://www.womeninairobotics.de/">
                    </CardOrg>
                    <!-- <CardOrg image="WomenTech" ext="png" url="https://www.womentech.net/">
                    </CardOrg> -->
                    <CardOrg name="WAI" ext="jpeg" url="https://www.womeninai.co/">
                    </CardOrg>
                </div>
            </div>
        </div>

    </Container>
</template>
