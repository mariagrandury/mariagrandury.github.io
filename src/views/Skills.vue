<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar />
  </Container>
  <Container class="bg-white dark:bg-gray-900">
    <div>
      <h1 class="flex gap-2 items-center">
        <span class="font-semibold text-4xl tracking-tight">Skills</span>
        <i-fluent-color-24-regular style="font-size: 2rem;" />
      </h1>
      <h2 class="py-6">I'm passionate about what I do and always learning something new!</h2>
    </div>
    <div class="grid py-6 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <SkillCard
        title="Programming"
        text="Python: NumPy, Pandas, TensorFlow 2, Keras, Sklearn"
        color="text-purple-600 bg-purple-50 dark:text-white dark:bg-purple-600"
      >
        <i-ant-design-code-outlined />
      </SkillCard>
      <SkillCard
        title="Machine Learning"
        text="ML algorithms and metrics, quality and trustworthiness"
        color="text-blue-600 bg-blue-50 dark:text-white dark:bg-blue-600"
      >
        <i-fluent-bot-20-regular />
      </SkillCard>
      <SkillCard
        title="Deep Learning"
        text="DL.AI Specialization TF Professional Developer"
        color="text-pink-600 bg-pink-50 dark:text-white dark:bg-pink-600"
      >
        <i-fluent-brain-circuit-20-regular />
      </SkillCard>
      <SkillCard
        title="Research"
        text="XAI, AI Robustness, AI Ethics NLP: Transformers"
        color="text-teal-600 bg-teal-50 dark:text-white dark:bg-teal-600"
      >
        <i-ant-design-experiment-outlined />
      </SkillCard>
      <SkillCard
        title="Math & Stats"
        text="Double Degree in Mathematics and Physics: 5 years, 345 ECTS"
        color="text-green-600 bg-green-50 dark:text-white dark:bg-green-600"
      >
        <i-ant-design-function-outlined />
      </SkillCard>
      <SkillCard
        title="Software Engineering"
        text="Experience as Software Engineer, Git, Testing, Circle-CI, Code QA"
        color="text-indigo-600 bg-indigo-50 dark:text-white dark:bg-indigo-600"
      >
        <i-ant-design-code-sandbox-outlined />
      </SkillCard>
      <SkillCard
        title="DevOps / MLOps"
        text="Docker, MLflow, AWS: S3, Lambda, CloudFront, Sagemaker"
        color="text-orange-600 bg-orange-50 dark:text-white dark:bg-orange-600"
      >
        <i-clarity-network-settings-line />
      </SkillCard>
      <SkillCard
        title="Technical Communication"
        text="Data Visualization with Tableau"
        color="text-red-600 bg-red-50 dark:text-white dark:bg-red-600"
      >
        <i-fluent-chat-multiple-20-regular />
      </SkillCard>
    </div>
    <div class="flex my-6 justify-center">
      <a
        href="https://github.com/mariagrandury/mariagrandury/tree/main/Certificates"
        target="_blank"
        class="border-dashed rounded-md flex font-medium border-2 border-gray-200 p-6 gap-3 hover:border-transparent items-center hover:ring-4"
      >
        <i-carbon-certificate-check class="text-1.25rem" />
        <span>Check my certificates</span>
        <i-carbon-certificate-check class="text-1.25rem" />
      </a>
    </div>
  </Container>
</template>
