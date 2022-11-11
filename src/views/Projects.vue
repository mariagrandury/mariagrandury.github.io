<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'María Grandury - Open-Source NLP Research Projects',
  meta: [
    { name: 'description', content: 'Hello! I\'m María, an ML Research Engineer focused on NLP and the Founder @ SomosNLP.org | Here you can find my open-source NLP projects :)' },
    { property: 'og:title', content: 'María Grandury - Open-Source NLP Research Projects' },
    { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@mariagrandury' },
    { name: 'twitter:creator', content: '@mariagrandury' },
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
        <div class="font-semibold tracking-tight text-4xl">Open-Source NLP Research Projects</div>
        <i-fluent-design-ideas-24-regular style="font-size: 2rem;" />
      </h1>
      <h2 class="py-6">I'm a Machine Learning Research Engineer focused on NLP, XAI and Adversarial Robustness.</h2>
    </div>

    <div class="lg:px-24 sm:px-12">
      <div class="grid py-6 gap-x-6 gap-y-3 lg:grid-cols-2">
        <CardProject title="Hackathon of NLP in Spanish" :tags="['NLP', 'Somos NLP']"
          link="https://somosnlp.org/hackathon">
          <i-fluent-rocket-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              With more than 500 participants from 39 countries, it is the largest open-source hackathon of NLP in
              Spanish.
              The recorded events have already more than 5k visualizations!
              Organized by Somos NLP and sponsored by Hugging Face, Platzi and Paperspace.
            </div>
          </template>
        </CardProject>
        <CardProject title="BigScience Research Workshop" :tags="['NLP', 'Hugging Face', 'Research']"
          link="https://bigscience.huggingface.co/" color="text-pink-600 bg-pink-50 dark:text-white dark:bg-pink-600">
          <i-whh-flower />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">A one-year long international research workshop on
              large multilingual models and datasets. I was part of the data tooling working group. Here is the model
              paper
              <a target="_blank" href="https://arxiv.org/abs/2211.05100"
                class="text-accent-700 dark:text-accent-300 hover:underline">
                BLOOM: A 176B-Parameter Open-Access Multilingual Language Model.
              </a>
            </div>
          </template>
        </CardProject>
        <CardProject title="BERTIN" :tags="['NLP', 'Hugging Face', 'Research']"
          link="https://huggingface.co/bertin-project"
          color="text-green-900 bg-green-50 dark:text-white dark:bg-green-600">
          <i-fluent-document-settings-16-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              BERTIN is a series of RoBERTa-based models in Spanish trained using a novel sampling technique that we
              call "perplexity sampling". More detailed info can be found in the
              <a target="_blank" href="https://huggingface.co/bertin-project/bertin-roberta-base-spanish"
                class="text-accent-700 dark:text-accent-300 hover:underline">model card</a>
              and the paper
              <a target="_blank" href="https://arxiv.org/abs/2207.06814"
                class="text-accent-700 dark:text-accent-300 hover:underline">
                BERTIN: Efficient Pre-Training of a Spanish Language Model using Perplexity Sampling.
              </a>
            </div>
          </template>
        </CardProject>
        <CardProject title="Course: NLP de 0 a 100 con Hugging Face" :tags="['NLP', 'Somos NLP']"
          link="https://somosnlp.org/nlp-de-cero-a-cien"
          color="text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-500">
          <i-fluent-lightbulb-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              The first NLP course from zero to hero in Spanish. It's open-source and was organized
              by Somos NLP with the support of Spain AI. I taught the classes on sequential models
              and the Transformer architecture.
            </div>
          </template>
        </CardProject>
        <CardProject title="Pre-training GPT-2, T5 & Wav2Vec2 models in Spanish"
          :tags="['NLP', 'Hugging Face', 'HF Hackathon']" link="https://huggingface.co/bertin-project"
          color="text-orange-600 bg-orange-100 dark:text-white dark:bg-orange-500">
          <i-fluent-chat-12-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              A series of Spanish language models trained with Flax/Jax and using TPUs
              sponsored by Google during the Flax/Jax Community Week organised
              by Hugging Face in June 2021. Here are the model cards:
              <a target="_blank" href="https://huggingface.co/flax-community/gpt-2-spanish"
                class="text-accent-700 dark:text-accent-300 hover:underline">GPT-2 model</a>
              ,
              <a target="_blank" href="https://huggingface.co/flax-community/spanish-t5-small"
                class="text-accent-700 dark:text-accent-300 hover:underline">T5 model</a>
              and
              <a target="_blank" href="https://huggingface.co/flax-community/wav2vec2-spanish"
                class="text-accent-700 dark:text-accent-300 hover:underline">Wav2Vec2 model.</a>
            </div>
          </template>
        </CardProject>
        <CardProject title="WaiACCELERATE Program" :tags="['Entrepreneurship', 'Women in AI & Robotics']"
          link="https://womeninairobotics.de" color="text-purple-900 bg-purple-50 dark:text-white dark:bg-purple-600">
          <i-fluent-rocket-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">A program where we provide women entrepreneurs with the
              tools, knowledge, mentoring and network to successfully realize their startup/business idea in the AI
              sector.</div>
          </template>
        </CardProject>
        <CardProject title="Adding NLP datasets in Spanish" :tags="['NLP', 'Hugging Face', 'HF Hackathon']"
          link="https://huggingface.co/datasets?languages=languages:es&multilinguality=multilinguality:monolingual">
          <i-fluent-database-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Addition of 3 datasets in Spanish to the
              <a target="_blank" href="https://github.com/huggingface/datasets"
                class="text-accent-700 dark:text-accent-300 hover:underline">huggingface/datasets</a>
              library during the open-sprint organized by Hugging Face in Dec 2020. The datasets are
              <a target="_blank" href="https://huggingface.co/datasets/head_qa"
                class="text-accent-700 dark:text-accent-300 hover:underline">HEAD-QA</a>
              (a multi-choice HEAlthcare Dataset), the dataset of the
              <a target="_blank" href="https://huggingface.co/datasets/head_qa"
                class="text-accent-700 dark:text-accent-300 hover:underline">eHealth-KD</a>
              Challenge at IberLEF 2020, and the
              <a target="_blank" href="https://huggingface.co/datasets/head_qa"
                class="text-accent-700 dark:text-accent-300 hover:underline">Spanish Billion Words Corpus.</a>
            </div>
          </template>
        </CardProject>
        <CardProject title="Chatbot COVID-19"
          :tags="['Conversational AI', 'Backend', 'Frontend', 'DevOps', 'Math Thesis']"
          link="https://github.com/mariagrandury/chatbot-covid-backend"
          color="text-purple-900 bg-purple-50 dark:text-white dark:bg-purple-600">
          <i-fluent-bot-20-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Chatbot that understands and answers questions about the COVID-19: symptoms, prevention, regulation, the
              situation in Spain. Don't hesitate to chat with
              <a target="_blank" href="https://d3g60fts6ncstu.cloudfront.net/"
                class="text-accent-700 dark:text-accent-300 hover:underline">AURORA!</a>
            </div>
            <div class="text-sm text-gray-700 dark:text-white">
              The chatbot understands correctly on the 1st attempt 92% of the requests and
              helped 1500+ people during the first months of the pandemic.
              Collaboration with Accenture’s Gijón office.
            </div>
          </template>
        </CardProject>
        <CardProject title="NN  for the study of the Higgs Boson with data from the LHC"
          :tags="['Machine Learning', 'Physics Thesis']"
          color="text-green-900 bg-green-50 dark:text-white dark:bg-green-600">
          <i-carbon-network-4 />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Implementation of a Neural Network that predicts - with a correlation coefficient of 0.778 -
              characteristics of the Higgs Boson produced in the particle collider.
              Collaboration with the university's high energy particle research team.
            </div>
          </template>
        </CardProject>
        <CardProject title="Quality Analysis of ML Models" :tags="['Python Package', 'AI Performance', 'AI Robustness']"
          link="https://github.com/mariagrandury/ml-model-quality-analysis"
          color="text-pink-600 bg-pink-50 dark:text-white dark:bg-pink-600">
          <i-fluent-hd-20-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              PyPI package to perform quality analyses on ML models.
              It focuses on the three quality pillars: functionality, robustness and explainability.
            </div>
          </template>
        </CardProject>
        <CardProject title="The Annotated Transformer" :tags="['NLP', 'Transformers', 'Team Project']"
          link="https://github.com/somosnlp/the-annotated-transformer"
          color="text-blue-900 bg-blue-50 dark:text-white dark:bg-blue-600">
          <i-fluent-document-search-20-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Detailed and interactive explanation of the Transformer architecture.
              Based on the Harvard NLP notebook "The Annotated Transformer",
              where the paper "Attention Is All You Need" is explained and implemented.
            </div>
          </template>
        </CardProject>
        <CardProject title="TensorFlow Models" :tags="['NLP', 'Computer Vision', 'TensorFlow 2']"
          link="https://github.com/mariagrandury/tensorflow-models"
          color="text-orange-600 bg-orange-50 dark:text-white dark:bg-orange-600">
          <i-simple-icons-tensorflow />
        </CardProject>
        <CardProject title="Sarcarsm Detector" :tags="['NLP', 'TensorFlow 2', 'Docker', 'Flask']">
          <i-fluent-emoji-laugh-20-regular />
        </CardProject>
        <CardProject title="Punctuation and capitalization of Speech Recognition" :tags="['NLP', 'Speech-to-Text']"
          color="text-cyan-900 bg-cyan-50 dark:text-white dark:bg-cyan-600">
          <i-fluent-speaker-edit-20-regular />
        </CardProject>
        <CardProject title="Text To Image Model" :tags="['NLP', 'Computer Vision', 'BERT', 'BigGAN']"
          color="text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-500">
          <i-fluent-image-alt-text-20-regular />
        </CardProject>
        <CardProject title="Image Classification Web App" :tags="['Computer Vision', 'TensorFlow 2', 'Flask']"
          link="https://github.com/mariagrandury/image-classification-web-app"
          color="text-green-900 bg-green-50 dark:text-white dark:bg-green-600">
          <i-fluent-tab-desktop-image-20-regular />
        </CardProject>
        <!--
      <CardProject
        title="Viz For Social Good"
        :tags="['Data Visualization', 'Tableau']"
        link="https://public.tableau.com/profile/maria.grandury#!/vizhome/VizForSocialGood2021-01FondationFollereau/Dashboard"
      >
        <i-fluent-data-scatter-24-regular />
      </CardProject>
      -->
        <CardProject title="World Development Indicators - Operation Fistula"
          :tags="['Data Visualization', 'VizForSocialGood', 'Tableau']"
          link="https://public.tableau.com/profile/maria.grandury#!/vizhome/WorldDevelopmentIndicators-OperationFistula/Dashboard"
          color="text-purple-900 bg-purple-50 dark:text-white dark:bg-purple-600">
          <i-fluent-people-community-20-regular />
        </CardProject>
        <!--
      <CardProject
        title="Pink Smile"
        :tags="['Flask']"
        link="https://github.com/mariagrandury/pink-smile"
      >
        <i-fluent-emoji-20-regular />
      </CardProject>
      -->
      </div>
    </div>
  </Container>
</template>
