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
        </template>
      </ProjectCard>
      <ProjectCard
        title="Neural Network for the study of the Higgs Boson with data from the LHC"
        :tags="['Machine Learning', 'Physics']"
      >
        <i-carbon-network-4 />
      </ProjectCard>
      <ProjectCard
        title="Quality Analysis of ML Models"
        :tags="['Python Package', 'AI Performance', 'AI Robustness']"
        link="https://github.com/mariagrandury/ml-model-quality-analysis"
      >
        <i-fluent-hd-20-regular />
      </ProjectCard>
      <ProjectCard
        title="The Annotated Transformer"
        :tags="['NLP', 'Transformers', 'PyTorch', 'TensorFlow 2']"
        link="https://github.com/nlp-en-es/the-annotated-transformer"
      >
        <i-fluent-document-search-20-regular />
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
      <ProjectCard title="Punctuation and capitalization of Speech Recognition" :tags="['NLP']">
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
      <ProjectCard
        title="Viz For Social Good"
        :tags="['Data Visualization', 'Tableau']"
        link="https://public.tableau.com/profile/maria.grandury#!/vizhome/VizForSocialGood2021-01FondationFollereau/Dashboard"
      >
        <i-fluent-people-community-20-regular />
      </ProjectCard>
      <ProjectCard
        title="World Development Indicators - Operation Fistula"
        :tags="['Data Visualization', 'Tableau']"
        link="https://public.tableau.com/profile/maria.grandury#!/vizhome/WorldDevelopmentIndicators-OperationFistula/Dashboard"
      >
        <i-fluent-data-scatter-24-regular />
      </ProjectCard>
      <ProjectCard
        title="Pink Smile"
        :tags="['Flask']"
        link="https://github.com/mariagrandury/pink-smile"
      >
        <i-fluent-emoji-20-regular />
      </ProjectCard>
    </div>
  </Container>
</template>
