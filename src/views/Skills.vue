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
    </div>
    <h2 class="flex gap-2 items-center">
      <div class="font-semibold tracking-tight text-4xl">Skills</div>
      <i-fluent-color-24-regular style="font-size: 2rem;" />
    </h2>
    <div class="grid py-6 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <CardSkill title="Programming" text="Python: NumPy, Pandas, TensorFlow 2, Keras, Sklearn"
        color="text-purple-600 bg-purple-50 dark:text-white dark:bg-purple-600">
        <i-ant-design-code-outlined />
      </CardSkill>
      <CardSkill title="Machine Learning" text="ML algorithms and metrics, quality and trustworthiness"
        color="text-blue-600 bg-blue-50 dark:text-white dark:bg-blue-600">
        <i-fluent-bot-20-regular />
      </CardSkill>
      <CardSkill title="Deep Learning" text="DL.AI Specialization, TF Professional Developer"
        color="text-pink-600 bg-pink-50 dark:text-white dark:bg-pink-600">
        <i-fluent-brain-circuit-20-regular />
      </CardSkill>
      <CardSkill title="Research" text="XAI, AI Robustness, NLP: Text Attacks, Transformers, Sampling"
        color="text-teal-600 bg-teal-50 dark:text-white dark:bg-teal-600">
        <i-ant-design-experiment-outlined />
      </CardSkill>
      <CardSkill title="Math & Stats" text="Double Degree in Mathematics and Physics: 5 years, 345 ECTS"
        color="text-green-600 bg-green-50 dark:text-white dark:bg-green-600">
        <i-ant-design-function-outlined />
      </CardSkill>
      <CardSkill title="Software Engineering" text="Experience as Software Engineer, Git, Testing, Code QA, Design"
        color="text-indigo-600 bg-indigo-50 dark:text-white dark:bg-indigo-600">
        <i-ant-design-code-sandbox-outlined />
      </CardSkill>
      <CardSkill title="DevOps / MLOps" text="Docker, MLflow, AWS: S3, Lambda, CloudFront, Sagemaker"
        color="text-orange-600 bg-orange-50 dark:text-white dark:bg-orange-600">
        <i-clarity-network-settings-line />
      </CardSkill>
      <CardSkill title="Technical Communication" text="Data Visualization with Tableau"
        color="text-red-600 bg-red-50 dark:text-white dark:bg-red-600">
        <i-fluent-chat-multiple-20-regular />
      </CardSkill>
    </div>
    <div class="flex my-6 justify-center">
      <a href="https://github.com/mariagrandury/mariagrandury/tree/main/Certificates" target="_blank"
        class="flex font-medium p-6 gap-3 items-center border-dashed rounded-md border-2 border-gray-200 hover:border-accent-400">
        <i-carbon-certificate-check class="text-1.25rem" />
        <div>Check my certificates</div>
        <i-carbon-certificate-check class="text-1.25rem" />
      </a>
    </div>


    <h2 class="flex gap-2 items-center">
      <div class="font-semibold tracking-tight text-4xl py-12">Professional Experience</div>
      <i-fluent-color-24-regular style="font-size: 2rem;" />
    </h2>
    <div class="sm:px-32">
      <div class="grid gap-x-8 gap-y-12 md:grid-cols-[auto,1fr]">
        <CVItem location="neurocat GmbH" title="I'm starting a new adventure" timeline="2021 - present">
          I've relocated to Berlin and joined
          <a target="_blank" title="Company Website" href="https://www.neurocat.ai/">neurocat</a>
          as an ML Research Engineer!
          I'm also a core member of
          <a target="_blank" title="Company Website" href="https://www.womeninai.co/">Women in AI & Robotics</a>
          and I volunteer for
          <a target="_blank" title="Company Website" href="https://www.vizforsocialgood.com/">#VizForSocialGood.</a>
          Moreover, I've recently founded the community
          <a target="_blank" title="LinkedIn Page" href="https://www.linkedin.com/company/somosnlp">Somos NLP 🤗!</a>
        </CVItem>
        <CVItem location="REDYTEL" title="It was a crazy year" timeline="2020">
          I wrote my 2 theses and graduated! I developed a chatbot for
          <a target="_blank" title="Check the Chatbot" href="https://www.redytel.info">REDYTEL,</a>
          another that answers questions about
          <a target="_blank" title="Check the Chatbot" href="https://d3g60fts6ncstu.cloudfront.net/">COVID-19,</a>
          learned how to use
          <a target="_blank" title="Tableau Public Profile"
            href="https://public.tableau.com/profile/maria.grandury#!/">Tableau,</a>
          and passed the
          <a target="_blank" title="Certificate"
            href="https://www.coursera.org/account/accomplishments/professional-cert/6UPJWYBM8DSH">TensorFlow Developer
            Certification.</a>
          At the end of the year I started contributing to
          <a target="_blank" title="Check one of my Contributions"
            href="https://huggingface.co/datasets/spanish_billion_words">Hugging Face</a>
          and was selected to join
          <a target="_blank" title="Membership Certificate"
            href="https://github.com/mariagrandury/mariagrandury/blob/main/Certificates/Award%20-%20Nova%20Talent%20Membership%20Certificate.pdf">Nova
            Talent!</a>
        </CVItem>
        <CVItem location="Stelliant" title="I broke into AI" timeline="2019">
          I took the DeepLearning.AI
          <a target="_blank" title="Certificate"
            href="https://www.coursera.org/account/accomplishments/specialization/XJYYZ8PCKKBP">DL Specialization</a>
          as a recommendation from a teacher I had during my
          <a target="_blank" title="Magistère de Physique Fondamentale - Program Website"
            href="http://www.magistere-physique.universite-paris-saclay.fr/spip.php?article49&lang=fr">exchange year in
            Paris.</a>
          I got an internship as a Software Engineer at
          <a target="_blank" title="Company Website" href="https://www.stelliant.com/">Stelliant,</a>
          where I developed my first chatbot.
        </CVItem>
        <CVItem location="SADEI" title="I was really into Stats" timeline="2018">
          It was my 3rd year learning statistics and
          <br />I got an internship as a Data Analyst at
          <a target="_blank" title="Company Website" href="http://www.sadei.es/es/portal.do">SADEI,</a>
          the company responsible for compiling the statistics of the north of Spain.
        </CVItem>
        <CVItem location="University of Oviedo" title="I started my Math studies" timeline="2015 - 2018">
          I graduated High School as an honor student and started a
          <a target="_blank" title="Courses" href="assets/img/story/double-degree.pdf">Double Degree</a>
          in Mathematics and Physics at the University of Oviedo.
        </CVItem>
        <CVItem location="Spanish Real Academy of Science" title="I officially became a geek" timeline="2011 - 2015">
          I was selected for a 4-years program of the Spanish Real Academy of Science that
          stimulates the mathematical talent of
          <br />young students,
          <a target="_blank" title="Project Website" href="https://www.estalmat.org/estalmat/">ESTALMAT.</a>
        </CVItem>
      </div>
    </div>
  </Container>
</template>
