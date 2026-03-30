<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import CardOrg from '../components/CardOrg.vue';
import Container from '../components/Container.vue';
import { useHead } from '@vueuse/head'
import { parseEntitiesCSV, type Entity } from '../utils/csvParser';

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

const bioLanguage = ref<'en' | 'es'>('en');
const nextBioLanguageLabel = computed(() => (bioLanguage.value === 'en' ? 'ES' : 'EN'));

const entities = ref<Entity[]>([]);

onMounted(async () => {
    try {
        const response = await fetch('/data/entities.csv');
        entities.value = parseEntitiesCSV(await response.text());
    } catch (error) {
        console.error('Error loading entities:', error);
    }
});

const educationEntities = computed(() => entities.value.filter((entity) => entity.type === 'education'));
const affiliationEntities = computed(() => entities.value.filter((entity) => entity.type === 'affiliation'));
const organizationEntities = computed(() => entities.value.filter((entity) => entity.type === 'org'));
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
            <CardGeneric class="relative px-12 my-12">
                <template v-if="bioLanguage === 'en'">
                <h2 class="pt-12">
                    🚀 I'm dedicated to advancing responsible, inclusive, and open-source Natural Language Processing (NLP).
                </h2>
                <h2 class="py-2">
                    💡 I'm a <strong>PhD student at EPFL</strong> and the founder of
                    <a href="https://somosnlp.org" target="_blank"
                        class="font-bold text-accent-500 dark:text-accent-300 hover:underline">SomosNLP</a>,
                the largest open-source community of Spanish-speaking NLP practitioners. My research focuses on evaluating the multilingual capabilities of LLMs, with a particular emphasis on linguistic and cultural biases, climate impact and psycholinguistics.
                </h2>
                <h2 class="py-2">
                    🌎 I hold degrees in Mathematics and Physics, and completed an MSc in Language Technologies.
                </h2>
                <h2 class="py-2">
                    🤗 I'm a
                    <a href="https://huggingface.co/mariagrandury" target="_blank"
                        class="font-bold text-accent-500 dark:text-accent-300 hover:underline">Hugging Face Fellow</a>
                    and have contributed to projects like BigScience, FineWeb and BERTIN.
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
                </template>

                <template v-else>
                    <h2 class="pt-12">
                        🚀 Mi misión es impulsar un Procesamiento del Lenguaje Natural (PLN) responsable, inclusivo y open-source.
                    </h2>
                    <h2 class="py-2">
                        💡 Soy estudiante de <strong>doctorado en EPFL</strong> y la fundadora de
                        <a href="https://somosnlp.org" target="_blank"
                            class="font-bold text-accent-500 dark:text-accent-300 hover:underline">SomosNLP</a>,
                        la mayor comunidad open-source de PLN para personas hispanohablantes. Mi investigación se centra en evaluar las capacidades multilingües de los LLMs, con especial atención en los sesgos lingüísticos y culturales, el impacto climático y la psicolingüística.
                    </h2>
                    <h2 class="py-2">
                        🌎 Soy graduada en Matemáticas y Física, y tengo un máster en Tecnologías del Lenguaje.
                    </h2>
                    <h2 class="py-2">
                        🤗 Soy
                        <a href="https://huggingface.co/mariagrandury" target="_blank"
                            class="font-bold text-accent-500 dark:text-accent-300 hover:underline">Hugging Face Fellow</a>
                        y he contribuido a proyectos como BigScience, FineWeb y BERTIN.
                        Disfruto impartiendo charlas, talleres y participando en mesas redondas, normalmente sobre IA Responsable.
                    </h2>
                    <h2 class="py-2">
                        ⚡ Tengo 3 años de experiencia en startups de IA.
                        En <strong>Clibrain</strong> diseñé evaluaciones para analizar si los modelos de IA entienden y respetan los matices lingüísticos y culturales del español.
                        En <strong>neurocat</strong>, startup con base en Berlín, desarrollé métodos de explicabilidad (XAI) y ataques adversarios para evaluar la fiabilidad de modelos de ML.
                    </h2>
                    <h2 class="pb-12">
                        💚 Además de todo lo friki, me encanta hacer rutas, viajar con mi mochila y bailar.
                    </h2>
                </template>

                <button
                    type="button"
                    class="absolute bottom-6 right-6 border border-gray-200 rounded-md px-3 py-1 text-xs hover:ring ring-accent-500 dark:border-gray-700"
                    @click="bioLanguage = bioLanguage === 'en' ? 'es' : 'en'"
                >
                    {{ nextBioLanguageLabel }}
                </button>
            </CardGeneric>
        </div>

        <div class="my-12">
            <h2 class="flex gap-2 items-center mb-8">
                <div class="font-semibold tracking-tight text-2xl">Education</div>
                <span style="font-size: 1.5rem;"><i-fluent-book-24-regular /></span>
            </h2>
            <div class="grid py-8 gap-4 md:grid-cols-5 sm:grid-cols-2">
                <CardOrg
                    v-for="entity in educationEntities"
                    :key="`education-${entity.name}-${entity.title}`"
                    :name="entity.name"
                    :title="entity.title"
                    :year_start="entity.year_start"
                    :year_end="entity.year_end"
                    :logo="entity.logo"
                    :url="entity.url"
                    :showTitleDefault="true"
                />
            </div>
        </div>

        <div class="my-12">
            <h2 class="flex gap-2 items-center mb-8">
                <div class="font-semibold tracking-tight text-2xl">Affiliations</div>
                <i-fluent-people-team-24-regular style="font-size: 2rem;" />
            </h2>
            <div class="grid py-8 gap-4 md:grid-cols-3 sm:grid-cols-2">
                <CardOrg
                    v-for="entity in affiliationEntities"
                    :key="`affiliation-${entity.name}-${entity.title}`"
                    :name="entity.name"
                    :title="entity.title"
                    :year_start="entity.year_start"
                    :year_end="entity.year_end"
                    :logo="entity.logo"
                    :url="entity.url"
                    :showTitleDefault="true"
                />
            </div>
        </div>

        <div>
            <h2 class="flex gap-2 items-center">
                <div class="font-semibold tracking-tight text-2xl">Organizations</div>
                <i-fluent-color-24-regular style="font-size: 2rem;" />
            </h2>
            <p class="py-3">Organizations and networks I'm part of or I collaborate with.</p>
            <div class="lg:px-24 sm:px-12">
                <div class="grid py-8 gap-4 md:grid-cols-5 sm:grid-cols-3">
                    <CardOrg
                        v-for="entity in organizationEntities"
                        :key="`org-${entity.name}-${entity.title}`"
                        :name="entity.name"
                        :title="entity.title"
                        :year_start="entity.year_start"
                        :year_end="entity.year_end"
                        :logo="entity.logo"
                        :url="entity.url"
                        :showTitleDefault="false"
                    />
                </div>
            </div>
        </div>

    </Container>
</template>
