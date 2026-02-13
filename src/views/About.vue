<script setup lang="ts">
import CardOrg from '../components/CardOrg.vue';
import Container from '../components/Container.vue';
import { useHead } from '@vueuse/head'

useHead({
    title: 'María Grandury - About Me, Bio & Collaborations',
    meta: [
        { name: 'description', content: 'Hello! I\'m María, an NLP Researcher and the Founder @ SomosNLP.org | Here are my bio and the organizations I collaborate with' },
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
                    🚀 I'm a dedicated to advancing responsible, inclusive, and open-source Natural Language Processing (NLP).
                    <!-- , especially for the Spanish-speaking community. -->
                </h2>
                <h2 class="py-2">
                    💡 I'm a Researcher at the <strong>Polytechnical University of Madrid</strong>
                    <!-- https://portalcientifico.upm.es/es/ipublic/researcher/337642  -->
                    and the founder of <a href="https://somosnlp.org" target="_blank"
                    class="font-bold text-accent-500 dark:text-accent-300 hover:underline">SomosNLP</a>,
                    the largest open-source community of Spanish-speaking NLP practitioners. My research focuses on evaluating the capabilities of LLMs, with a particular emphasis on linguistic and cultural biases, climate impact and psycholinguistics.
                </h2>
                <h2 class="py-2">
                    🌎 I hold 2 Degrees in Mathematics and Physics and am pursuing a Master’s in Language Technologies. For my Master's thesis,
                     <!-- co-advised by Prof. Antoine Bosselut from EPFL and Prof. Julio Gonzalo from UNED, -->
                    I've joined the team of the culture-aware benchmark <a href="https://arxiv.org/abs/2411.19799" target="_blank" class="font-bold text-accent-500 dark:text-accent-300 hover:underline">INCLUDE</a> to expand it to more languages, particularly from Latin America, the Caribbean, and Spain.
                </h2>
                <h2 class="py-2">
                    🤗 I believe open-source drives AI development. I'm a 
                    <a href="https://huggingface.co/mariagrandury" target="_blank"
                        class="font-bold text-accent-500 dark:text-accent-300 hover:underline">Hugging Face Fellow</a>
                    and have contributed
                    to several international NLP research projects like BigScience, FineWeb, and BERTIN.
                    <!-- I'm also very aware of the gender gap in my field and I collaborate with various organizations & initiatives to increase female representation and promote inclusive and responsible AI.
                    I also collaborate with groups to increase the representation in AI of women and the LGBTQ+ community.
                    -->
                    I enjoy giving talks and workshops and joining round tables, usually about Responsible AI.
                </h2>
                <h2 class="py-2">
                    ⚡ I have 3 years of industry experience in AI startup labs. 
                    At <strong>Clibrain</strong>
                    I designed how to evaluate whether AI models truly understand and respect the rich linguistic and cultural nuances of Spanish.
                    At <strong>neurocat,</strong>
                    a Berlin-based startup, I developed explainability methods (XAI) and adversarial attacks to assess the trustworthiness of ML models.
                </h2>
                <h2 class="pb-12">
                    💚 Besides geeky things, I love hiking, backpacking, and dancing.
                </h2>

            </CardGeneric>
        </div>

        <div class="my-12">
            <h2 class="flex gap-2 items-center mb-8">
                <div class="font-semibold tracking-tight text-2xl">Education</div>
                <i-fluent-award-24-regular style="font-size: 2rem;" />
            </h2>
            <div class="flex flex-wrap gap-8 justify-center items-stretch">
                <div class="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md w-56 min-w-[11rem] flex-1 max-w-xs">
                    <img src="/images/logos/epfl.png" alt="EPFL Logo" class="h-16 mb-3" />
                    <div class="font-semibold text-lg text-center">PhD NLP</div>
                    <div class="text-xs text-gray-500 text-center mt-1">EPFL</div>
                </div>
                <div class="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md w-56 min-w-[11rem] flex-1 max-w-xs">
                    <img src="/images/logos/uned.png" alt="UNED Logo" class="h-16 mb-3" />
                    <div class="font-semibold text-lg text-center">MSc Language Technologies</div>
                    <div class="text-xs text-gray-500 text-center mt-1">UNED</div>
                </div>
                <div class="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md w-44 min-w-[9rem] flex-1 max-w-xs">
                    <img src="/images/logos/uniovi.png" alt="UniOvi Logo" class="h-14 mb-2" />
                    <div class="font-semibold text-md text-center">BSc Mathematics</div>
                    <div class="text-xs text-gray-500 text-center mt-1">University of Oviedo</div>
                </div>
                <div class="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md w-44 min-w-[9rem] flex-1 max-w-xs">
                    <img src="/images/logos/uniovi.png" alt="UniOvi Logo" class="h-14 mb-2" />
                    <div class="font-semibold text-md text-center">BSc Physics</div>
                    <div class="text-xs text-gray-500 text-center mt-1">University of Oviedo</div>
                </div>
                <div class="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md w-44 min-w-[9rem] flex-1 max-w-xs">
                    <img src="/images/logos/paris_saclay.png" alt="Paris Saclay Logo" class="h-14 mb-2" />
                    <div class="font-semibold text-md text-center">Erasmus</div>
                    <div class="text-xs text-gray-500 text-center mt-1">Paris-Saclay</div>
                </div>
            </div>
        </div>

        <div>
            <h2 class="flex gap-2 items-center">
                <div class="font-semibold tracking-tight text-2xl">Organizations</div>
                <i-fluent-color-24-regular style="font-size: 2rem;" />
            </h2>
            <p class="py-3">Organizations and networks I'm part of or I collaborate with.</p>
            <div class="lg:px-24 sm:px-12">
                <div class="grid py-8 gap-4 md:grid-cols-5 md:grid-cols[auto,1fr] sm:grid-cols-3">
                    <CardOrg name="SomosNLP" ext="png" url="https://somosnlp.org/">
                    </CardOrg>
                    <CardOrg name="BERTIN" ext="webp" url="https://huggingface.co/bertin-project">
                    </CardOrg>
                    <CardOrg name="BigScience" ext="png" url="https://bigscience.huggingface.co/">
                    </CardOrg>
                    <CardOrg name="BigCode" ext="png" url="https://www.bigcode-project.org/">
                    </CardOrg>
                    <CardOrg name="EleutherAI" ext="png" url="https://www.eleuther.ai/">
                    </CardOrg>
                    <CardOrg name="HF_Fellowship" ext="png" url="https://huggingface.co/mariagrandury/">
                    </CardOrg>
                    <CardOrg name="NovaTalent" ext="svg" dark="yes" url="https://www.novatalent.com/">
                    </CardOrg>
                    <CardOrg name="SpainAI" ext="png" dark="yes" url="https://www.spain-ai.com/">
                    </CardOrg>
                    <CardOrg name="SaturdaysAI" ext="png" url="https://saturdays.ai/">
                    </CardOrg>
                    <CardOrg name="TheGoodAI" ext="png" url="https://thegoodai.co/">
                    </CardOrg>
                    <CardOrg name="DiverTLes" ext="png" dark="yes" url="https://gplsi.dlsi.ua.es/pln/divertles/">
                    </CardOrg>
                    <CardOrg name="WAIR" ext="jpg" url="https://www.womeninairobotics.de/">
                    </CardOrg>
                    <CardOrg name="WomenTech" ext="png" url="https://www.womentech.net/">
                    </CardOrg>
                    <CardOrg name="WomenWhoCode" ext="jpg" url="https://www.womenwhocode.com/">
                    </CardOrg>
                    <CardOrg name="WAI" ext="jpeg" url="https://www.womeninai.co/">
                    </CardOrg>
                </div>
            </div>
        </div>

    </Container>
</template>
