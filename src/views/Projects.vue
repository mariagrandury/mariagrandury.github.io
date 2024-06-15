<script setup lang="ts">
import { useHead } from "@vueuse/head";

useHead({
  title: "María Grandury - Open-Source AI Research Projects",
  meta: [
    {
      name: "description",
      content:
        "Hello! I'm María, an ML Research Engineer focused on NLP and the Founder @ SomosNLP.org | Here you can find my open-source AI projects",
    },
    {
      property: "og:title",
      content: "María Grandury - Open-Source NLP Research Projects",
    },
    {
      property: "og:image",
      content:
        "https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg",
    },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "@mariagrandury" },
    { name: "twitter:creator", content: "@mariagrandury" },
  ],
});
</script>

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div>
      <h1 class="flex gap-2 items-center">
        <div class="font-semibold tracking-tight text-4xl">
          Open-Source NLP Research Projects
        </div>
        <i-fluent-design-ideas-24-regular style="font-size: 2rem" />
      </h1>
      <h2 class="py-6">
        I'm a Machine Learning Research Engineer focused on NLP, specially on data and evaluations. And I always say yes to NLP in Spanish projects!
      </h2>
      <p class="italic">
        Last update: June 2024 | For up-to-date information check
        <a
          href="https://www.huggingface.co/mariagrandury/"
          target="_blank"
          class="text-accent-500 hover:underline"
          >my Hugging Face profile</a
        >!
      </p>
    </div>

    <div class="py-6 lg:px-24 sm:px-12">
      <CardProject
        title="SomosNLP"
        :tags="['My 💛 project']"
        link="https://somosnlp.org"
        color="text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-500"
      >
        <i-fluent-rocket-24-regular />
        <template v-slot:description>
          <div class="text-sm text-gray-700 dark:text-white">
            Did you know that we are 600 million Spanish-speaking individuals
            around the world? SomosNLP.org is an international community aiming
            to represent in AI the linguistic diversity of the languages spoken
            by all these persons.
          </div>
        </template>
      </CardProject>

      <div class="grid py-6 gap-x-6 gap-y-3 lg:grid-cols-2">
        <CardProject
          title="Open Leaderboard for the languages of Spain and LATAM [WIP]"
          :tags="['LLM Evaluation', 'NLP in Spanish']"
          link="https://somosnlp.org/somos600m"
          color="text-pink-600 bg-pink-50 dark:text-white dark:bg-pink-600"
        >
          <i-fluent-star-28-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Open leaderboard to evaluate LLM memorization, reasoning and linguistic capabilities in the languages of Spain, LATAM and the Caribbean. Developed as part of the #Somos600M Project thanks to the donation of high-quality datasets by IIC, LenguajeNaturalAI, UPM, HiTZ, and BSC.
              <br />
              <b>1st of July: Leaderboard v1 live!</b>
            </div>
          </template>
        </CardProject>
        <CardProject
          title="Validation of machine-translated evaluation datasets [WIP]"
          :tags="['Translation', 'Bias', 'NLP in Spanish']"
          link="https://somosnlp.org/somos600m"
          color="text-purple-900 bg-purple-50 dark:text-white dark:bg-purple-600"
        >
          <i-fluent-checkbox-checked-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Community effort to validate the machine-translated Spanish versions of 3 widely-used evaluation datasets (MMLU, RAC-C, and HellaSwag) and the prompt dataset from the Data Is Better Together (DIBT) initiative. Efforts co-organized by SomosNLP, Hugging Face & Argilla.
              <a
                target="_blank"
                href="https://huggingface.co/collections/somosnlp/creacion-de-corpus-en-comunidad-65f6715788a1b82645ba0ce2"
                class="text-accent-700 dark:text-accent-300 hover:underline"
              >
                Join us!
              </a>
            </div>
          </template>
        </CardProject>
        <CardProject
          title="Dataset collection campaign [WIP]"
          :tags="['Data', 'NLP in Spanish']"
          link="https://somosnlp.org/donatucorpus"
          color="text-orange-600 bg-orange-100 dark:text-white dark:bg-orange-500"
        >
          <i-fluent-book-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              At SomosNLP we are collecting datasets in the languages spoken in LATAM, the Caribbean and Spain.
              <a
                target="_blank"
                href="https://somosnlp.org/donatucorpus"
                class="text-accent-700 dark:text-accent-300 hover:underline"
              >
                Collaborate and help us collect diverse data!
              </a>
            </div>
          </template>
        </CardProject>
        <CardProject
          title="Hackathon SomosNLP 2024: #Somos600M"
          :tags="['Instruction-tuned LLMs', 'NLP in Spanish']"
          link="https://somosnlp.org/hackathon"
        >
          <i-fluent-rocket-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Third edition of the largest open-source hackathon of NLP in
              Spanish. This year's edition counted with +600 participants and 12
              amazing speakers.
              <br />
              Check the
              <!-- <a
                target="_blank"
                href="https://twitter.com/SomosNLP_/status/1648752306978971666"
                class="text-accent-700 dark:text-accent-300 hover:underline"
              >
                awarded projects
              </a>
              and the -->
              <a
                target="_blank"
                href="https://www.youtube.com/playlist?list=PLTA-KAy8nxaASMwEUWkkTfMaDxWBxn-8J"
                class="text-accent-700 dark:text-accent-300 hover:underline"
              >
                recorded talks and keynotes!
              </a>
            </div>
          </template>
        </CardProject>
        <CardProject
          title="Spanish NLP Initiatives [WIP]"
          :tags="['NLP in Spanish']"
          link="https://huggingface.co/spaces/somosnlp/spanish-nlp-initiatives"
          color="text-green-600 bg-green-50 dark:text-white dark:bg-green-600"
        >
          <i-fluent-list-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Discover the initiatives driving NLP advancements in Spanish and
              other low-resource languages spoken in LatAm and Spain.
            </div>
          </template>
        </CardProject>
        <CardProject
          title="Transparency Self-Assessment"
          :tags="['Responsible AI']"
          link="https://huggingface.co/spaces/mariagrandury/fmti-transparency-self-assessment"
          color="text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-500"
        >
          <i-fluent-lightbulb-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              This tool allows you to self-assess the transparency of your model
              development based on the Foundation Model Transparency Index 
              (FMTI) published by the Center for Research on Foundation Models.
            </div>
          </template>
        </CardProject>
        <CardProject
          title="Hackathon SomosNLP 2023: Los LLMs hablan español"
          :tags="['LLMs', 'NLP in Spanish']"
          link="https://somosnlp.org/hackathon"
        >
          <i-fluent-rocket-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Second edition of the largest open-source hackathon of NLP in
              Spanish. This year's edition counted with +500 participants, 17
              speakers, and 7 mentors.
              <br />
              Check the
              <a
                target="_blank"
                href="https://twitter.com/SomosNLP_/status/1648752306978971666"
                class="text-accent-700 dark:text-accent-300 hover:underline"
              >
                awarded projects
              </a>
              and the
              <a
                target="_blank"
                href="https://www.youtube.com/playlist?list=PLTA-KAy8nxaCDc0IJpLac-3csiAepV546"
                class="text-accent-700 dark:text-accent-300 hover:underline"
              >
                recorded talks and keynotes!
              </a>
            </div>
          </template>
        </CardProject>
        <CardProject
          title="Somos Mujeres NLP"
          :tags="['Women in AI', 'NLP']"
          link=""
          color="text-purple-900 bg-purple-50 dark:text-white dark:bg-purple-600"
        >
          <i-fluent-heart-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Organized two initiatives to promote both the work and research of
              women in NLP and also the projects that apply NLP to fight sexism.
            </div>
          </template>
        </CardProject>
        <CardProject
          title="NLP Course by Hugging Face"
          :tags="['NLP', 'Education']"
          link="https://huggingface.co/course/es/chapter1/1"
          color="text-orange-600 bg-orange-100 dark:text-white dark:bg-orange-500"
        >
          <i-fluent-hat-graduation-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Contributing to the translation of the NLP Course by Hugging Face
              to Spanish.
            </div>
          </template>
        </CardProject>
        <CardProject
          title="BigCode Project: LLMs for Code"
          :tags="['NLP', 'Research']"
          link="https://www.bigcode-project.org/docs/about/mission/"
          color="text-green-600 bg-green-50 dark:text-white dark:bg-green-600"
        >
          <i-fluent-settings-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Contributing to BigCode. Project in progress.
            </div>
          </template>
        </CardProject>
        <CardProject
          title="EleutherAI: Polyglot Romance"
          :tags="['NLP', 'Research', 'BERTIN Project']"
          link="https://www.eleuther.ai/"
          color="text-green-600 bg-green-50 dark:text-white dark:bg-green-600"
        >
          <i-fluent-speaker-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Contributing to EleutherAI's research project "Polyglot Romance".
              Project in progress.
            </div>
          </template>
        </CardProject>
        <CardProject
          title="Hackathon SomosNLP 2022: NLP en Español"
          :tags="['NLP in Spanish']"
          link="https://somosnlp.org/blog/hackathon-2022"
        >
          <i-fluent-rocket-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              With more than 500 participants from 39 countries, it is the
              largest open-source hackathon of NLP in Spanish. The
              <a
                target="_blank"
                href="https://www.youtube.com/playlist?list=PLTA-KAy8nxaAbVZ2lVcycHnJ2qEDip7hG"
                class="text-accent-700 dark:text-accent-300 hover:underline"
              >
                recorded talks and workshops
              </a>
              have already more than 5k visualizations! Organized by SomosNLP
              and sponsored by Hugging Face, Platzi and Paperspace. Check the
              <a
                target="_blank"
                href="https://somosnlp.org/blog/hackathon-2022"
                class="text-accent-700 dark:text-accent-300 hover:underline"
              >
                awarded projects!
              </a>
            </div>
          </template>
        </CardProject>
        <CardProject
          title="BigScience Research Workshop"
          :tags="['NLP', 'Hugging Face', 'Research']"
          link="https://bigscience.huggingface.co/"
          color="text-pink-600 bg-pink-50 dark:text-white dark:bg-pink-600"
        >
          <i-whh-flower />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              A one-year long international research workshop on large
              multilingual models and datasets. We created, among other cool
              things,
              <a
                target="_blank"
                href="https://arxiv.org/abs/2211.05100"
                class="text-accent-700 dark:text-accent-300 hover:underline"
              >
                ROOTS: A 1.6TB Composite Multilingual Dataset
              </a>
              that was then used to train
              <a
                target="_blank"
                href="https://arxiv.org/abs/2211.05100"
                class="text-accent-700 dark:text-accent-300 hover:underline"
              >
                BLOOM: A 176B-Parameter Open-Access Multilingual Language Model.
              </a>
            </div>
          </template>
        </CardProject>
        <CardProject
          title="BERTIN Project: Perplexity Sampling"
          :tags="['NLP', 'Hugging Face', 'Research']"
          link="https://huggingface.co/bertin-project"
          color="text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-500"
        >
          <i-mdi-face-man />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              BERTIN is a series of RoBERTa-based models in Spanish trained
              using a novel sampling technique that we call "perplexity
              sampling". More detailed info can be found in the
              <a
                target="_blank"
                href="https://huggingface.co/bertin-project/bertin-roberta-base-spanish"
                class="text-accent-700 dark:text-accent-300 hover:underline"
                >model card</a
              >
              and the paper
              <a
                target="_blank"
                href="https://arxiv.org/abs/2207.06814"
                class="text-accent-700 dark:text-accent-300 hover:underline"
              >
                BERTIN: Efficient Pre-Training of a Spanish Language Model using
                Perplexity Sampling.
              </a>
            </div>
          </template>
        </CardProject>
        <CardProject
          title="Course: NLP de 0 a 100 con Hugging Face"
          :tags="['NLP', 'Education']"
          link="https://somosnlp.org/nlp-de-cero-a-cien"
          color="text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-500"
        >
          <i-fluent-lightbulb-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              The first NLP course from zero to hero in Spanish. It's
              open-source and was organized by SomosNLP with the support of
              Spain AI. I taught the classes on sequential models and the
              Transformer architecture.
            </div>
          </template>
        </CardProject>
        <CardProject
          title="Pre-training GPT-2, T5 & Wav2Vec2 models in Spanish"
          :tags="['NLP', 'Hugging Face', 'HF Hackathon']"
          link="https://huggingface.co/bertin-project"
          color="text-orange-600 bg-orange-100 dark:text-white dark:bg-orange-500"
        >
          <i-fluent-chat-12-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              A series of Spanish language models trained with Flax/Jax and
              using TPUs sponsored by Google during the Flax/Jax Community Week
              organized by Hugging Face in June 2021. Here are the model cards:
              <a
                target="_blank"
                href="https://huggingface.co/flax-community/gpt-2-spanish"
                class="text-accent-700 dark:text-accent-300 hover:underline"
                >GPT-2 model</a
              >
              ,
              <a
                target="_blank"
                href="https://huggingface.co/flax-community/spanish-t5-small"
                class="text-accent-700 dark:text-accent-300 hover:underline"
                >T5 model</a
              >
              and
              <a
                target="_blank"
                href="https://huggingface.co/flax-community/wav2vec2-spanish"
                class="text-accent-700 dark:text-accent-300 hover:underline"
                >Wav2Vec2 model.</a
              >
            </div>
          </template>
        </CardProject>
        <CardProject
          title="WaiACCELERATE Program"
          :tags="['Entrepreneurship', 'Women in AI & Robotics']"
          link="https://womeninairobotics.de"
          color="text-purple-900 bg-purple-50 dark:text-white dark:bg-purple-600"
        >
          <i-fluent-rocket-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              A program where we provide women entrepreneurs with the tools,
              knowledge, mentoring and network to successfully realize their
              startup/business idea in the AI sector.
            </div>
          </template>
        </CardProject>
        <CardProject
          title="Making Spanish NLP datasets available in the HF Hub"
          :tags="['NLP', 'Hugging Face', 'HF Hackathon']"
          link="https://huggingface.co/datasets?languages=languages:es&multilinguality=multilinguality:monolingual"
        >
          <i-fluent-database-24-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Addition of 3 datasets in Spanish to the
              <a
                target="_blank"
                href="https://github.com/huggingface/datasets"
                class="text-accent-700 dark:text-accent-300 hover:underline"
                >huggingface/datasets</a
              >
              library during the open-sprint organized by Hugging Face in Dec
              2020. The datasets are
              <a
                target="_blank"
                href="https://huggingface.co/datasets/head_qa"
                class="text-accent-700 dark:text-accent-300 hover:underline"
                >HEAD-QA</a
              >
              (a multi-choice HEAlthcare Dataset), the dataset of the
              <a
                target="_blank"
                href="https://huggingface.co/datasets/head_qa"
                class="text-accent-700 dark:text-accent-300 hover:underline"
                >eHealth-KD</a
              >
              Challenge at IberLEF 2020, and the
              <a
                target="_blank"
                href="https://huggingface.co/datasets/head_qa"
                class="text-accent-700 dark:text-accent-300 hover:underline"
                >Spanish Billion Words Corpus.</a
              >
            </div>
          </template>
        </CardProject>
        <CardProject
          title="Quality Analysis of ML Models"
          :tags="['Python Package', 'AI Performance', 'AI Robustness']"
          link="https://github.com/mariagrandury/ml-model-quality-analysis"
          color="text-pink-600 bg-pink-50 dark:text-white dark:bg-pink-600"
        >
          <i-fluent-hd-20-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              PyPI package to perform quality analyses on ML models. It focuses
              on the three quality pillars: functionality, robustness and
              explainability.
            </div>
          </template>
        </CardProject>
        <CardProject
          title="Chatbot COVID-19"
          :tags="[
            'Conversational AI',
            'Backend',
            'Frontend',
            'DevOps',
            'Math Thesis',
          ]"
          link="https://github.com/mariagrandury/chatbot-covid-backend"
          color="text-purple-900 bg-purple-50 dark:text-white dark:bg-purple-600"
        >
          <i-fluent-bot-20-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Chatbot that understands and answers questions about the COVID-19:
              symptoms, prevention, regulation, the situation in Spain. Don't
              hesitate to chat with
              <a
                target="_blank"
                href="https://d3g60fts6ncstu.cloudfront.net/"
                class="text-accent-700 dark:text-accent-300 hover:underline"
                >AURORA!</a
              >
            </div>
            <div class="text-sm text-gray-700 dark:text-white">
              The chatbot understands correctly on the 1st attempt 92% of the
              requests and helped 1500+ people during the first months of the
              pandemic. Collaboration with Accenture’s Gijón office.
            </div>
          </template>
        </CardProject>
        <CardProject
          title="Neural Network for the study of the Higgs Boson with data from the LHC (CERN)"
          :tags="['Machine Learning', 'Physics Thesis']"
          color="text-green-900 bg-green-50 dark:text-white dark:bg-green-600"
        >
          <i-carbon-network-4 />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Implementation of a Neural Network that predicts - with a
              correlation coefficient of 0.778 - characteristics of the Higgs
              Boson produced in the particle collider. Collaboration with the
              university's high energy particle research team.
            </div>
          </template>
        </CardProject>
        <!-- <CardProject title="The Annotated Transformer" :tags="['NLP', 'Transformers', 'Team Project']"
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
        </CardProject> -->
        <!-- <CardProject title="World Development Indicators - Operation Fistula"
          :tags="['Data Visualization', 'VizForSocialGood', 'Tableau']"
          link="https://public.tableau.com/profile/maria.grandury#!/vizhome/WorldDevelopmentIndicators-OperationFistula/Dashboard"
          color="text-purple-900 bg-purple-50 dark:text-white dark:bg-purple-600">
          <i-fluent-people-community-20-regular />
          <template v-slot:description>
            <div class="text-sm text-gray-700 dark:text-white">
              Visualization for the #VizForSocialGood project to support the organization Operation Fistula on their
              "mission to end fistula for every woman everywhere".
            </div>
          </template>
        </CardProject> -->
      </div>
      <div class="flex my-6 justify-center">
        <a
          href="https://github.com/mariagrandury"
          target="_blank"
          class="
            flex
            font-medium
            p-6
            gap-3
            items-center
            border-dashed
            rounded-md
            border-2 border-gray-200
            hover:border-accent-400
          "
        >
          <div>More on GitHub</div>
        </a>
      </div>
    </div>
  </Container>
</template>
