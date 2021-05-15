<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div>
      <h1 class="flex items-center gap-2">
        <span class="text-4xl font-semibold">Projects</span>
        <i-fluent-design-ideas-24-regular style="font-size: 2rem;" />
      </h1>
      <h2 class="py-6">
        I'm really interested in NLP and XAI, especially applied to Healthcare
        and Biomedicine.
      </h2>
    </div>
    <div class="py-6 grid gap-x-6 gap-y-3 lg:grid-cols-2">
      <Project
        title="Chatbot COVID-19"
        :tags="['Conversational AI', 'Backend', 'Frontend', 'DevOps']"
        link="https://github.com/mariagrandury/chatbot-covid-backend"
      >
        <i-fluent-bot-20-regular />
        <template v-slot:description>
          <p class="text-sm text-gray-700 dark:text-white">
            Chatbot that understands and answers questions about the COVID-19: symptoms, prevention, regulation, the situation in Spain. Don't hesitate to chat with
            <a
              target="_blank"
              href="https://d3g60fts6ncstu.cloudfront.net/"
              class="underline text-accent-700 dark:text-accent-300"
            >AURORA!</a>
          </p>
        </template>
      </Project>
      <Project
        title="Neural Network for the study of the Higgs Boson with data from the LHC"
        :tags="['Machine Learning', 'Physics']"
      >
        <i-carbon-network-4 />
      </Project>
      <Project
        title="Quality Analysis of ML Models"
        :tags="['Python Package', 'AI Performance', 'AI Robustness']"
        link="https://github.com/mariagrandury/ml-model-quality-analysis"
      >
        <i-fluent-hd-20-regular />
      </Project>
      <Project
        title="The Annotated Transformer"
        :tags="['NLP', 'Transformers', 'PyTorch', 'TensorFlow 2']"
        link="https://github.com/nlp-en-es/the-annotated-transformer"
      >
        <i-fluent-document-search-20-regular />
      </Project>
      <Project
        title="TensorFlow Models"
        :tags="['NLP', 'Computer Vision', 'TensorFlow 2']"
        link="https://github.com/mariagrandury/tensorflow-models"
      >
        <i-simple-icons-tensorflow />
      </Project>
      <Project title="Sarcarsm Detector" :tags="['NLP', 'TensorFlow 2', 'Docker', 'Flask']">
        <i-fluent-emoji-laugh-20-regular />
      </Project>
      <Project title="Punctuation and capitalization of Speech Recognition" :tags="['NLP']">
        <i-fluent-speaker-edit-20-regular />
      </Project>
      <Project title="Text To Image Model" :tags="['NLP', 'Computer Vision', 'BERT', 'BigGAN']">
        <i-fluent-image-alt-text-20-regular />
      </Project>
      <Project
        title="Image Classification Web App"
        :tags="['Computer Vision', 'TensorFlow 2', 'Flask']"
        link="https://github.com/mariagrandury/image-classification-web-app"
      >
        <i-fluent-tab-desktop-image-20-regular />
      </Project>
      <Project
        title="Viz For Social Good"
        :tags="['Data Visualization', 'Tableau']"
        link="https://public.tableau.com/profile/maria.grandury#!/vizhome/VizForSocialGood2021-01FondationFollereau/Dashboard"
      >
        <i-fluent-people-community-20-regular />
      </Project>
      <Project
        title="World Development Indicators - Operation Fistula"
        :tags="['Data Visualization', 'Tableau']"
        link="https://public.tableau.com/profile/maria.grandury#!/vizhome/WorldDevelopmentIndicators-OperationFistula/Dashboard"
      >
        <i-fluent-data-scatter-24-regular />
      </Project>
      <Project
        title="Pink Smile"
        :tags="['Flask']"
        link="https://github.com/mariagrandury/pink-smile"
      >
        <i-fluent-emoji-20-regular class="text-pink-500" />
      </Project>
    </div>
  </Container>
</template>
