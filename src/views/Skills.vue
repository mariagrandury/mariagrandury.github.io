<!--
<script setup lang="ts">
import { ref } from 'vue'

const memberships = ref([
  "ACM.png", "AIGuild.png", "Banda.jpg",
  "NovaTalent.png", "VFSG.jpeg", "WomenTech.png",
  "WomenWhoCode.jpg", "WomenInAI.PNG"
])
</script>
-->

<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div>
      <h1 class="flex mb-12 gap-2 items-center">
        <div class="font-semibold tracking-tight text-4xl">About Me</div>
        <!-- <i-fluent-earth-24-regular style="font-size: 2rem" /> -->
        <i-fluent-rocket-24-regular style="font-size: 2rem" />
      </h1>
      <CardGeneric class="px-12 m-12">
        <h2 class="pt-12">
          I'm originally from Spain and have two degrees in Mathematics and Physics. After
          graduating I moved to Berlin and I'm currently working at
          <a
            href="https://neurocat.ai"
            target="_blank"
            class="text-accent-700 dark:text-accent-300 hover:underline"
          >neurocat</a>
          where I contribute to the core of
          <a
            href="https://aidkit.ai/"
            target="_blank"
            class="text-accent-700 dark:text-accent-300 hover:underline"
          >aidkit,</a>
          an AI Quality and Trustworthiness evaluation tool.
        </h2>
        <h2 class="py-2">
          I believe that NLP research is too focused on English and neglects the particular
          difficulties of other languages so I founded
          <a
            href="https://nlp-en-es.org"
            target="_blank"
            class="text-accent-700 dark:text-accent-300 hover:underline"
          >“NLP en ES 🤗”</a>
          a community of Spanish-speaking NLP professionals accelerating the development
          of state-of-the-art NLP in Spanish.
        </h2>
        <h2 class="pb-12">
          I'm also very aware of the gender gap in my field and I'm part of the Core Team
          of
          <a
            href="https://womeninairobotics.de"
            target="_blank"
            class="text-accent-700 dark:text-accent-300 hover:underline"
          >Women in AI & Robotics</a>
          to increase female representation and promote inclusive and responsible AI.
        </h2>
      </CardGeneric>
    </div>
    <h1 class="flex gap-2 items-center">
      <div class="font-semibold tracking-tight text-4xl">Skills</div>
      <i-fluent-color-24-regular style="font-size: 2rem;" />
    </h1>
    <div class="grid py-6 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <CardSkill
        title="Programming"
        text="Python: NumPy, Pandas, TensorFlow 2, Keras, Sklearn"
        color="text-purple-600 bg-purple-50 dark:text-white dark:bg-purple-600"
      >
        <i-ant-design-code-outlined />
      </CardSkill>
      <CardSkill
        title="Machine Learning"
        text="ML algorithms and metrics, quality and trustworthiness"
        color="text-blue-600 bg-blue-50 dark:text-white dark:bg-blue-600"
      >
        <i-fluent-bot-20-regular />
      </CardSkill>
      <CardSkill
        title="Deep Learning"
        text="DL.AI Specialization, TF Professional Developer"
        color="text-pink-600 bg-pink-50 dark:text-white dark:bg-pink-600"
      >
        <i-fluent-brain-circuit-20-regular />
      </CardSkill>
      <CardSkill
        title="Research"
        text="XAI, AI Robustness, NLP: Text Attacks, Transformers, Sampling"
        color="text-teal-600 bg-teal-50 dark:text-white dark:bg-teal-600"
      >
        <i-ant-design-experiment-outlined />
      </CardSkill>
      <CardSkill
        title="Math & Stats"
        text="Double Degree in Mathematics and Physics: 5 years, 345 ECTS"
        color="text-green-600 bg-green-50 dark:text-white dark:bg-green-600"
      >
        <i-ant-design-function-outlined />
      </CardSkill>
      <CardSkill
        title="Software Engineering"
        text="Experience as Software Engineer, Git, Testing, Code QA, Design"
        color="text-indigo-600 bg-indigo-50 dark:text-white dark:bg-indigo-600"
      >
        <i-ant-design-code-sandbox-outlined />
      </CardSkill>
      <CardSkill
        title="DevOps / MLOps"
        text="Docker, MLflow, AWS: S3, Lambda, CloudFront, Sagemaker"
        color="text-orange-600 bg-orange-50 dark:text-white dark:bg-orange-600"
      >
        <i-clarity-network-settings-line />
      </CardSkill>
      <CardSkill
        title="Technical Communication"
        text="Data Visualization with Tableau"
        color="text-red-600 bg-red-50 dark:text-white dark:bg-red-600"
      >
        <i-fluent-chat-multiple-20-regular />
      </CardSkill>
    </div>
    <div class="flex my-6 justify-center">
      <a
        href="https://github.com/mariagrandury/mariagrandury/tree/main/Certificates"
        target="_blank"
        class="flex font-medium p-6 gap-3 items-center border-dashed rounded-md border-2 border-gray-200 hover:border-accent-400"
      >
        <i-carbon-certificate-check class="text-1.25rem" />
        <div>Check my certificates</div>
        <i-carbon-certificate-check class="text-1.25rem" />
      </a>
    </div>
    <!--
    <div>
      <h1 class="font-medium text-2xl underline">Organisations</h1>
      <div class="grid py-8 gap-4 sm:grid-cols-4 sm:grid-rows-[auto,1fr,1fr]">
        <CardOrg class="col-span-2" img="NLPenES.png" url="https://nlp-en-es.org/">
          <h1 class="font-medium">NLP en ES 🤗</h1>
          <h2>Founder</h2>
        </CardOrg>
        <CardOrg class="col-span-2" img="WAIR.jpg" url="https://www.womeninairobotics.de/">
          <h1 class="font-medium">Women in AI & Robotics</h1>
          <h2>Core Team Volunteer</h2>
        </CardOrg>
        <CardOrg v-for="membership in memberships" :img="membership" />
      </div>
      <h1 class="font-medium mb-8 text-2xl underline">Volunteering</h1>
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
    -->
  </Container>
</template>
