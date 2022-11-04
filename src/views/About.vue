<script setup lang="ts">
import { ref } from 'vue'
import CardOrg from '../components/CardOrg.vue';

const memberships = ref([
    "AIGuild.png",
    "NovaTalent.png",
    "ACM.png",
    "VFSG.jpeg",
    "WomenTech.png",
    "WomenWhoCode.jpg",
    "WomenInAI.PNG",
    "Banda.jpg"
])
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
        <CardGeneric class="px-12 m-12">
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

        <div>
            <h2 class="flex gap-2 items-center">
                <div class="font-semibold tracking-tight text-2xl">Organisations</div>
                <i-fluent-color-24-regular style="font-size: 2rem;" />
            </h2>
            <p class="py-3">Organizations and networks I'm part of or I collaborate with.</p>
            <div class="sm:px-26">
                <div class="grid py-8 gap-4 sm:grid-cols-5 sm:grid-rows-[auto,1fr]">
                    <!-- TODO: Add BigScience, BigCode, BERTIN, EleutherAI -->
                    <!-- If 3 rows => grid-rows-[auto,1fr,1fr] -->
                    <CardOrg class="col-span-1" name="Somos NLP" img="NLPenES.png" url="https://somosnlp.org/">
                    </CardOrg>
                    <CardOrg class="col-span-1" name="Women in AI & Robotics" img="WAIR.jpg"
                        url="https://www.womeninairobotics.de/">
                    </CardOrg>
                    <CardOrg v-for="membership in memberships" :name="membership" :img="membership" />
                </div>
            </div>
        </div>

        <!--
        <div>
            <h2 class="flex gap-2 items-center">
                <div class="font-semibold tracking-tight text-2xl">Volunteering</div>
                <i-fluent-color-24-regular style="font-size: 2rem;" />
            </h2>
            <div class="sm:px-26">
                <div class="grid gap-4 sm:grid-cols-3">
                    <CardGeneric class="p-4">
                        <div class="font-medium">Sacred Heart</div>
                        <div>Sancti Spiritus, CUBA</div>
                    </CardGeneric>
                    <CardGeneric class="p-4">
                        <div class="font-medium">L'Arche Asha Niketan</div>
                        <div>Asansol and Kolkata, INDIA</div>
                    </CardGeneric>
                    <CardGeneric class="p-4">
                        <div class="font-medium">One World Institute</div>
                        <div>Lillehammer, NORWAY</div>
                    </CardGeneric>
                </div>
            </div>
        </div>
        -->

    </Container>
</template>
