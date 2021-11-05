<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div>
      <h1 class="flex gap-2 items-center">
        <div class="font-semibold tracking-tight text-4xl">Projects</div>
        <i-fluent-design-ideas-24-regular style="font-size: 2rem;" />
      </h1>
      <h2 class="py-6">
        I'm really interested in NLP and XAI, especially applied to Healthcare
        and Biomedicine.
      </h2>
    </div>
    <div class="grid py-6 gap-x-6 gap-y-3 lg:grid-cols-2">
      <ProjectCard
        title="BigScience Research Workshop"
        :tags="['NLP', 'Hugging Face', 'Team Project']"
        link="https://bigscience.huggingface.co/"
      >
        <i-whh-flower />
        <template v-slot:description>
          <div
            class="text-sm text-gray-700 dark:text-white"
          >BigScience is a one-year long research workshop on large multilingual models and datasets. I'm part of the data tooling working group.</div>
        </template>
      </ProjectCard>
      <ProjectCard
        title="BERTIN Project"
        :tags="['NLP', 'Hugging Face', 'Team Project']"
        link="https://huggingface.co/bertin-project"
      >
        <i-mdi-face-man />
        <template v-slot:description>
          <div class="text-sm text-gray-700 dark:text-white">
            BERTIN is a series of RoBERTa-based models in Spanish. More detailed info can be found in this
            <a
              target="_blank"
              href="https://huggingface.co/bertin-project/bertin-roberta-base-spanish"
              class="text-accent-700 underline dark:text-accent-300"
            >model card.</a>
          </div>
        </template>
      </ProjectCard>
      <ProjectCard
        title="Pre-training GPT-2, T5 & Wav2Vec2 models in Spanish"
        :tags="['NLP', 'Hugging Face', 'Team Project']"
        link="https://huggingface.co/bertin-project"
      >
        <i-fluent-chat-12-regular />
        <template v-slot:description>
          <div class="text-sm text-gray-700 dark:text-white">
            A series of Spanish language models trained with Flax and using TPUs
            sponsored by Google during the Flax/Jax Community Week organised
            by Hugging Face in June 2021. Here are the model cards:
            <a
              target="_blank"
              href="https://huggingface.co/flax-community/gpt-2-spanish"
              class="text-accent-700 underline dark:text-accent-300"
            >GPT-2 model</a>
            ,
            <a
              target="_blank"
              href="https://huggingface.co/flax-community/spanish-t5-small"
              class="text-accent-700 underline dark:text-accent-300"
            >T5 model</a>
            and
            <a
              target="_blank"
              href="https://huggingface.co/flax-community/wav2vec2-spanish"
              class="text-accent-700 underline dark:text-accent-300"
            >Wav2Vec2 model.</a>
          </div>
        </template>
      </ProjectCard>
      <ProjectCard
        title="Adding NLP datasets in Spanish"
        :tags="['NLP', 'Hugging Face']"
        link="https://huggingface.co/datasets?languages=languages:es&multilinguality=multilinguality:monolingual"
      >
        <i-fluent-database-24-regular />
        <template v-slot:description>
          <div class="text-sm text-gray-700 dark:text-white">
            Addition of 3 datasets in Spanish to the
            <a
              target="_blank"
              href="https://github.com/huggingface/datasets"
              class="text-accent-700 underline dark:text-accent-300"
            >huggingface/datasets</a>
            library during the open-sprint organized by Hugging Face in Dec 2020. The datasets are
            <a
              target="_blank"
              href="https://huggingface.co/datasets/head_qa"
              class="text-accent-700 underline dark:text-accent-300"
            >HEAD-QA</a>
            (a multi-choice HEAlthcare Dataset), the dataset of the
            <a
              target="_blank"
              href="https://huggingface.co/datasets/head_qa"
              class="text-accent-700 underline dark:text-accent-300"
            >eHealth-KD</a>
            Challenge at IberLEF 2020, and the
            <a
              target="_blank"
              href="https://huggingface.co/datasets/head_qa"
              class="text-accent-700 underline dark:text-accent-300"
            >Spanish Billion Words Corpus.</a>
          </div>
        </template>
      </ProjectCard>
      <ProjectCard
        title="Chatbot COVID-19"
        :tags="['Conversational AI', 'Backend', 'Frontend', 'DevOps']"
        link="https://github.com/mariagrandury/chatbot-covid-backend"
      >
        <i-fluent-bot-20-regular />
        <template v-slot:description>
          <div class="text-sm text-gray-700 dark:text-white">
            Chatbot that understands and answers questions about the COVID-19: symptoms, prevention, regulation, the situation in Spain. Don't hesitate to chat with
            <a
              target="_blank"
              href="https://d3g60fts6ncstu.cloudfront.net/"
              class="text-accent-700 underline dark:text-accent-300"
            >AURORA!</a>
          </div>
          <div class="text-sm text-gray-700 dark:text-white">
            The chatbot understands correctly on the 1st attempt 92% of the requests and
            helped 1500+ people during the first months of the pandemic.
            Collaboration with Accenture’s Gijón office.
          </div>
        </template>
      </ProjectCard>
      <ProjectCard
        title="NN  for the study of the Higgs Boson with data from the LHC"
        :tags="['Machine Learning', 'Physics Thesis']"
      >
        <i-carbon-network-4 />
        <template v-slot:description>
          <div class="text-sm text-gray-700 dark:text-white">
            Implementation of a Neural Network that predicts - with a correlation coefficient of 0.778 -
            characteristics of the Higgs Boson produced in the particle collider.
            Collaboration with the university's high energy particle research team.
          </div>
        </template>
      </ProjectCard>
      <ProjectCard
        title="Quality Analysis of ML Models"
        :tags="['Python Package', 'AI Performance', 'AI Robustness']"
        link="https://github.com/mariagrandury/ml-model-quality-analysis"
      >
        <i-fluent-hd-20-regular />
        <template v-slot:description>
          <div class="text-sm text-gray-700 dark:text-white">
            PyPi package to perform quality analyses on ML models.
            It focuses on the three quality pillars: functionality, robustness and explainability.
          </div>
        </template>
      </ProjectCard>
      <ProjectCard
        title="The Annotated Transformer"
        :tags="['NLP', 'Transformers', 'PyTorch', 'TensorFlow 2']"
        link="https://github.com/nlp-en-es/the-annotated-transformer"
      >
        <i-fluent-document-search-20-regular />
        <template v-slot:description>
          <div class="text-sm text-gray-700 dark:text-white">
            Detailed and interactive explanation of the Transformer architecture.
            Based on the Harvard NLP notebook "The Annotated Transformer",
            where the paper "Attention Is All You Need" is explained and implemented.
          </div>
        </template>
      </ProjectCard>
      <ProjectCard
        title="TensorFlow Models"
        :tags="['NLP', 'Computer Vision', 'TensorFlow 2']"
        link="https://github.com/mariagrandury/tensorflow-models"
      >
        <i-simple-icons-tensorflow />
      </ProjectCard>
      <ProjectCard title="Sarcarsm Detector" :tags="['NLP', 'TensorFlow 2', 'Docker', 'Flask']">
        <i-fluent-emoji-laugh-20-regular />
      </ProjectCard>
      <ProjectCard
        title="Punctuation and capitalization of Speech Recognition"
        :tags="['NLP', 'Speech-to-Text']"
      >
        <i-fluent-speaker-edit-20-regular />
      </ProjectCard>
      <ProjectCard title="Text To Image Model" :tags="['NLP', 'Computer Vision', 'BERT', 'BigGAN']">
        <i-fluent-image-alt-text-20-regular />
      </ProjectCard>
      <ProjectCard
        title="Image Classification Web App"
        :tags="['Computer Vision', 'TensorFlow 2', 'Flask']"
        link="https://github.com/mariagrandury/image-classification-web-app"
      >
        <i-fluent-tab-desktop-image-20-regular />
      </ProjectCard>
      <!--
      <ProjectCard
        title="Viz For Social Good"
        :tags="['Data Visualization', 'Tableau']"
        link="https://public.tableau.com/profile/maria.grandury#!/vizhome/VizForSocialGood2021-01FondationFollereau/Dashboard"
      >
        <i-fluent-data-scatter-24-regular />
      </ProjectCard>
      -->
      <ProjectCard
        title="World Development Indicators - Operation Fistula"
        :tags="['Data Visualization', 'VizForSocialGood', 'Tableau']"
        link="https://public.tableau.com/profile/maria.grandury#!/vizhome/WorldDevelopmentIndicators-OperationFistula/Dashboard"
      >
        <i-fluent-people-community-20-regular />
      </ProjectCard>
      <!--
      <ProjectCard
        title="Pink Smile"
        :tags="['Flask']"
        link="https://github.com/mariagrandury/pink-smile"
      >
        <i-fluent-emoji-20-regular />
      </ProjectCard>
      -->
    </div>
  </Container>
</template>
