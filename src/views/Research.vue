<script setup lang="ts">
import { useHead } from "@vueuse/head";

useHead({
  title: "María Grandury - Research Interests",
  meta: [
    {
      name: "description",
      content:
        "Hello! I'm María, an NLP Researcher and the Founder @ SomosNLP.org | Here you can find out more about previous and current research interests",
    },
    {
      property: "og:title",
      content: "María Grandury - Research Interests",
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
          Research Interests
        </div>
        <i-fluent-design-ideas-24-regular style="font-size: 2rem" />
      </h1>
      <h2 class="py-6">
        Cultural knowledge is highly relevant for an LLM to understand a language. My main interest is to gain a deeper comprehension of the capabilities and limitations of LLMs since we cannot improve what we cannot measure. 
        At the Technical University of Madrid, I am currently doing research on LLM evaluation, psycholinguistics and climate impact.
        I would like to further explore cultural and linguistic bias evaluation and mitigation in LLMs with a more holistic approach to language understanding, e.g., at the text representation level or through reasoning.
      </h2>
      <p class="italic text-sm text-gray-500">
        Last update: January 2025 | For up-to-date information check my
        <a
          href="https://scholar.google.com/citations?user=3mc_-QsAAAAJ"
          target="_blank"
          class="text-accent-500 hover:underline"
          >Google Scholar</a
          >
          or
          <a
            href="https://www.semanticscholar.org/author/Mar%C3%ADa-Grandury/2176184513"
            target="_blank"
            class="text-accent-500 hover:underline"
            >Semantic Scholar</a
          > profiles
        !
      </p>
      <!-- ORCID https://orcid.org/my-orcid?orcid=0009-0009-4703-3348 -->
    </div>

    <div class="py-6 lg:px-24 sm:px-12">
      <h2 class="font-semibold tracking-tight text-2xl">Papers In Review</h2>
    </div>

    <div class="grid py-6 gap-y-3 lg:px-24 sm:px-12">
      <CardPaper
        title="La Leaderboard: A Large Language Model Leaderboard for Spanish Varieties and Languages of Spain and Latin America"
        authors="María Grandury, Javier Aula-Blasco, Júlia Falcão, Clémentine Fourrier, Miguel González, Gonzalo Martínez, Gonzalo Santamaría, and Alejandro Vaca"
        :tags="['LLM Evaluation', 'Leaderboard', 'Low-Resource NLP', 'Cultural NLP']"
        hf_link="https://huggingface.co/spaces/la-leaderboard/la-leaderboard"
        color="text-pink-600 bg-pink-50 dark:text-white dark:bg-pink-600"
        icon="i-fluent-star-28-regular"
      />
      <CardPaper
        title="The Case of Spanish as a Pluricentric Language: Challenging the Monolingual Bias in NLP to Improve Cultural Adequacy of LLMs"
        authors="María Grandury and Diana Galván"
        :tags="['Cultural Adequacy', 'Cultural NLP', 'Data Collection']"
        hf_link=""
        color="text-blue-600 bg-blue-50 dark:text-white dark:bg-blue-600"
        icon="i-fluent-star-28-regular"
      />
      <CardPaper
        title="Psycholinguistic Word Features: a New Approach for the Evaluation of LLMs Alignment with Humans"
        authors="Javier Conde, Miguel González Saiz, María Grandury, Gonzalo Martínez, Pedro Reviriego and Marc Brysbaert"
        :tags="['LLMs', 'Evaluation', 'Pyscholinguistics']"
        hf_link=""
        color="text-green-600 bg-green-50 dark:text-white dark:bg-green-600"
        icon="i-fluent-star-28-regular"
      />

      <p class="py-6">... plus psycholinguistics papers coming soon!</p>
    </div>

    <div class="py-6 lg:px-24 sm:px-12">
      <h2 class="font-semibold tracking-tight text-2xl">Published Papers</h2>
    </div>

    <div class="grid py-6 gap-y-3 lg:px-24 sm:px-12">
      <CardPaper
        title="Multiple Choice Questions: Reasoning Makes Large Language Models (LLMs) More Self-Confident Even When They Are Wrong"
        authors="Tairan Fu, Javier Conde, Gonzalo Martínez, María Grandury, Pedro Reviriego"
        :tags="['LLM Evaluation', 'MCQA']"
        arxiv_link="https://arxiv.org/abs/2501.09775"
        hf_link="https://huggingface.co/papers/2501.09775"
        color="text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-500"
        icon="i-fluent-rocket-24-regular"
        abstract="One of the most widely used methods to evaluate LLMs are Multiple Choice Question (MCQ) tests. MCQ benchmarks enable the testing of LLM knowledge on almost any topic at scale as the results can be processed automatically. To help the LLM answer, a few examples called few shots can be included in the prompt. Moreover, the LLM can be asked to answer the question directly with the selected option or to first provide the reasoning and then the selected answer, which is known as chain of thought. In addition to checking whether the selected answer is correct, the evaluation can look at the LLM-estimated probability of its response as an indication of the confidence of the LLM in the response. In this paper, we study how the LLM confidence in its answer depends on whether the model has been asked to answer directly or to provide the reasoning before answering. The results of the evaluation of questions on a wide range of topics in seven different models show that LLMs are more confident in their answers when they provide reasoning before the answer. This occurs regardless of whether the selected answer is correct. Our hypothesis is that this behavior is due to the reasoning that modifies the probability of the selected answer, as the LLM predicts the answer based on the input question and the reasoning that supports the selection made. Therefore, LLM estimated probabilities seem to have intrinsic limitations that should be understood in order to use them in evaluation procedures. Interestingly, the same behavior has been observed in humans, for whom explaining an answer increases confidence in its correctness."
      />

      <CardPaper
        title="Evaluating large language models with tests of spanish as a foreign language: Pass or fail?"
        authors="Marina Mayor-Rocher, Nina Melero, Elena Merino-Gómez, María Grandury, Javier Conde, and Pedro Reviriego"
        :tags="['LLM Evaluation', 'NLP in Spanish', 'Linguistics']"
        arxiv_link="https://arxiv.org/abs/2409.15334"
        hf_link="https://huggingface.co/papers/2409.15334"
        color="text-purple-900 bg-purple-50 dark:text-white dark:bg-purple-600"
        icon="i-fluent-checkbox-checked-24-regular"
        abstract="Large Language Models (LLMs) have been profusely evaluated on their ability to answer questions on many topics and their performance on different natural language understanding tasks. Those tests are usually conducted in English, but most LLM users are not native English speakers. Therefore, it is of interest to analyze how LLMs understand other languages at different levels: from paragraphs to morphems. In this paper, we evaluate the performance of state-of-the-art LLMs in TELEIA, a recently released benchmark with similar questions to those of Spanish exams for foreign students, covering topics such as reading comprehension, word formation, meaning and compositional semantics, and grammar. The results show that LLMs perform well at understanding Spanish but are still far from achieving the level of a native speaker in terms of grammatical competence."
      />

      <CardPaper
        title="The #Somos600M Project: Generating NLP resources that represent the diversity of the languages from LATAM, the Caribbean, and Spain"
        authors="María Grandury"
        venue="North American Chapter of the Association for Computational Linguistics Conference: LatinX in AI (LXAI) Research Workshop, 2024"
        :tags="['Instruction Data', 'LLM Evaluation', 'Multilingual NLP']"
        arxiv_link="https://arxiv.org/abs/2407.17479"
        hf_link="https://huggingface.co/papers/2407.17479"
        color="text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-500"
        icon="i-fluent-rocket-24-regular"
        abstract="We are 600 million Spanish speakers. We launched the #Somos600M Project because the diversity of the languages from LATAM, the Caribbean and Spain needs to be represented in Artificial Intelligence (AI) systems. Despite being the 7.5% of the world population, there is no open dataset to instruction-tune large language models (LLMs), nor a leaderboard to evaluate and compare them. In this paper, we present how we have created as an international open-source community the first versions of the instruction and evaluation datasets, indispensable resources for the advancement of Natural Language Processing (NLP) in our languages."
      />
      
      <CardPaper
        title="Spanish and LLM Benchmarks: Is MMLU Lost in Translation"
        authors="Irene Plaza, Nina Melero, Cristina del Pozo, Javier Conde, Pedro Reviriego, Marina Mayor-Rocher, and María Grandury"
        :tags="['Translation', 'NLP in Spanish', 'LLM Evaluation']"
        arxiv_link="https://arxiv.org/abs/2406.17789"
        hf_link="https://huggingface.co/papers/2406.17789"
        color="text-orange-600 bg-orange-100 dark:text-white dark:bg-orange-500"
        icon="i-fluent-question-24-regular"
        abstract="The evaluation of Large Language Models (LLMs) is a key element in their continuous improvement process and many benchmarks have been developed to assess the performance of LLMs in different tasks and topics. As LLMs become adopted worldwide, evaluating them in languages other than English is increasingly important. However, most LLM benchmarks are simply translated using an automated tool and then run in the target language. This means that the results depend not only on the LLM performance in that language but also on the quality of the translation. In this paper, we consider the case of the well-known Massive Multitask Language Understanding (MMLU) benchmark. Selected categories of the benchmark are translated into Spanish using Azure Translator and ChatGPT4 and run on ChatGPT4. Next, the results are processed to identify the test items that produce different answers in Spanish and English. Those are then analyzed manually to understand if the automatic translation caused the change. The results show that a significant fraction of the failing items can be attributed to mistakes in the translation of the benchmark. These results make a strong case for improving benchmarks in languages other than English by at least revising the translations of the items and preferably by adapting the tests to the target language by experts."
      />

      <CardPaper
        title="BLOOM: A 176B-Parameter Open-Access Multilingual Language Model"
        authors="Teven Le Scao, Angela Fan, Christopher Akiki, Ellie Pavlick, Suzana Ilić, Daniel Hesslow, Roman Castagné, Alexandra Sasha Luccioni, François Yvon, ..., María Grandury, ... and Thomas Wolf"
        :tags="['Foundation Model', 'Multilingual NLP']"
        arxiv_link="https://inria.hal.science/hal-03850124/"
        hf_link="https://huggingface.co/papers/2211.05100"
        color="text-pink-600 bg-pink-50 dark:text-white dark:bg-pink-600"
        icon="i-whh-flower"
        abstract="Large language models (LLMs) have been shown to be able to perform new tasks based on a few demonstrations or natural language instructions. While these capabilities have led to widespread adoption, most LLMs are developed by resource-rich organizations and are frequently kept from the public. As a step towards democratizing this powerful technology, we present BLOOM, a 176B-parameter open-access language model designed and built thanks to a collaboration of hundreds of researchers. BLOOM is a decoder-only Transformer language model that was trained on the ROOTS corpus, a dataset comprising hundreds of sources in 46 natural and 13 programming languages (59 in total). We find that BLOOM achieves competitive performance on a wide variety of benchmarks, with stronger results after undergoing multitask prompted finetuning. To facilitate future research and applications using LLMs, we publicly release our models and code under the Responsible AI License."
      />

      <CardPaper
        title="BERTIN: Efficient Pre-Training of a Spanish Language Model using Perplexity Sampling"
        authors="Javier De la Rosa, Eduardo G. Ponferrada, Manu Romero, Paulo Villegas, Pablo González de Prado Salas, and María Grandury"
        venue="Procesamiento del Lenguaje Natural, 68(0), 13–23, 2022"
        :tags="['Perplexity Sampling', 'GPU Poor', 'Foundation Model', 'NLP in Spanish']"
        arxiv_link="http://journal.sepln.org/sepln/ojs/ojs/index.php/pln/article/view/6403"
        hf_link="https://huggingface.co/papers/2207.06814"
        color="text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-500"
        icon="i-mdi-face-man"
        abstract="The pre-training of large language models usually requires massive amounts of resources, both in terms of computation and data. Frequently used web sources such as Common Crawl might contain enough noise to make this pretraining sub-optimal. In this work, we experiment with different sampling methods from the Spanish version of mC4, and present a novel data-centric technique which we name perplexity sampling that enables the pre-training of language models in roughly half the amount of steps and using one fifth of the data. The resulting models are comparable to the current state-of-the-art, and even achieve better results for certain tasks. Our work is proof of the versatility of Transformers, and paves the way for small teams to train their models on a limited budget."
      />
    </div>

    <div class="py-6 lg:px-24 sm:px-12">
      <h2 class="font-semibold tracking-tight text-2xl">Masterclasses</h2>
      <p class="py-6">I've always loved teaching and I'm grateful for these opportunities to share my research with the community!</p>
    </div>

    <div class="grid py-6 gap-y-3 lg:px-24 sm:px-12">
        <CardMediaMini
          talk="Synthetic Data Generation and LLM Evaluation"
          organizer="Universidad Nacional Autónoma de México (UNAM)"
          event="Universidad Nacional Autónoma de México (UNAM) | Bachelor's Degree in Data Science for Social Sciences and Humanities"
          event_link="https://www.acatlan.unam.mx/index.php?id=1805"
          image_link="images/events/241214_unam_header.png"
          recording_link=""
          language="Spanish"
          type="Masterclass"
          date="2024-12-14"
          location="Mexico (Remote)"
          :tags="['Synthetic Data', 'LLM Evaluation']"
        >
        <i-mdi-newspaper style="font-size: 1.25rem" />
        <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Diplomado "Introducción a la Ciencia de Datos: Herramientas para el Aprendizaje Automatizado en las Ciencias Sociales y Humanidades"
            </div>
          </template>
        </CardMediaMini>
        <CardMediaMini
          talk="NLP advanced techniques and applications. LLM alignment and evaluation."
          event="Universidad Internacional de Andalucía | Summer School 'Content Generation and Language Models'"
          event_link=""
          image_link="images/events/240819_unia.jpeg"
          recording_link=""
          language="Spanish"
          type="Summer School Masterclass"
          date="2024-08-19"
          location="Baeza, Spain"
          :tags="['AI Alignment', 'LLM Evaluation']"
        >
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Curso de verano
            </div>
          </template>
        </CardMediaMini>
        <CardMediaMini
          talk="I've trained my LM, now what?"
          event="Universidad Internacional de Andalucía | Summer School 'Applied Artificial Intelligence'"
          organizer="Universidad Internacional de Andalucía "
          event_link=""
          image_link="images/events/230822_curso_unia.jpeg"
          recording_link=""
          language="Spanish"
          type="Summer School Masterclass"
          date="2023-08-22"
          location="Baeza, Spain"
          :tags="['Bias', 'Explainability', 'Open-Source', '🇪🇸']">
          <i-tabler:external-link style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Universidad Internacional de Andalucía
            </div>
          </template>
        </CardMediaMini>
        
      </div>
  </Container>
</template>
