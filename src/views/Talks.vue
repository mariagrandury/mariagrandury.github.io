<!-- TODO: Update the links so they point to my playlist on YouTube.-->
<!-- https://www.youtube.com/watch?v=yvPLMc3-KnI&list=PLddDdy6XOPhzbVhWBOWuv3UOjOAyDioC9 -->

<template>
    <Container class="bg-white dark:bg-gray-900">
        <NavBar />
    </Container>
    <Container class="bg-white dark:bg-gray-900">
        <div>
            <h1 class="flex gap-2 items-center">
                <div class="font-semibold tracking-tight text-4xl">Talks</div>
                <i-fluent-chat-12-regular style="font-size: 2rem;" />
            </h1>
            <h2 class="py-6">I'm passionate about what I do and really enjoy divulgating!</h2>
        </div>
        <div class="grid py-6 gap-x-6 gap-y-3 lg:px-64 sm:px-32">
            <CardTalk
                talk="Charla Coloquio Tecnologías del Lenguaje en la Empresa"
                event="DiverTLes: Diversidad en Tecnologías del Lenguaje en España"
                event_link="https://gplsi.dlsi.ua.es/pln/divertles"
                image_link="https://pbs.twimg.com/media/FD7cQ5SXIAUwidT?format=jpg&name=900x900"
                recording_link="https://www.youtube.com/watch?v=yvPLMc3-KnI"
                :tags="['NLP', 'NLP in Production', 'Research']"
            >
                <template v-slot:abstract>
                    <div class="text-sm text-gray-700 dark:text-white">
                        Three professionals working in NLP in a company discuss how
                        they use NLP for real-world applications.
                        María works in Germany at neurocat, a startup specialized in
                        Explainable AI and Robustness that develops a tool to assess
                        the quality and trustworthiness of any ML model.
                        Muntsa works in France at Eloquant, a company that develops
                        software used to extract information from text and audio to
                        improve the customer relationship.
                        Melania works in Spain at Adecco Outsourcing and is currently
                        developing NLP solutions for Google products, mainly Google
                        Assistant but also Google Maps, Google Home and GMail.
                    </div>
                </template>
            </CardTalk>
            <CardTalk
                talk="IAs que hablan español"
                event="Saturdays.AI Podcast"
                event_link="https://saturdays.ai/podcast/"
                image_link="https://saturdays.ai/wp-content/uploads/2021/02/imagenpodcast.jpg"
                recording_link="https://www.youtube.com/watch?v=O5QkrbOrxd4"
                :tags="['My Story', 'NLP', 'AI Regulation']"
            >
                <template v-slot:abstract>
                    <div class="text-sm text-gray-700 dark:text-white">
                        Interview for the Saturdays.AI Podcast where I discuss with its
                        founder Miguel Guerrero how I became an ML Research Engineer, what
                        are we doing at BigScience, and how I founded NLP en ES amongst
                        other topics like privacy, AI regulation and why most of the
                        AI-related movies picture AI as "the bad guy".
                    </div>
                </template>
            </CardTalk>
            <CardTalk
                talk="Sequential Models & the Transformer Architecture"
                event="NLP de 0 a 100 con Hugging Face, NLP en ES"
                event_link="https://nlp-en-es.org/nlp-de-cero-a-cien"
                image_link="https://www.spain-ai.com/wp-content/uploads/2021/08/curso_npl.jpeg"
                recording_link="https://nlp-en-es.org/nlp-de-cero-a-cien/sesion-03"
                :tags="['NLP', 'Sequential Models', 'Transformers', 'NLP Demos']"
            >
                <template v-slot:abstract>
                    <div class="text-sm text-gray-700 dark:text-white">
                        Understand all the key concepts and architectures of state-of-the-art NLP and
                        apply them to common use cases using one of the most popular libraries in the
                        field: Hugging Face. Regardless of your current knowledge, you will finish the
                        course talking about Word Embeddings, Sequential Models, Attention Mechanisms,
                        Transformers and Language Modelling.
                    </div>
                </template>
            </CardTalk>
            <CardTalk
                talk="3 Engineering, Robotics & AI experts Taking Center Stage"
                event="Women in AI & Robotics, NASA JPL, UniBremen, DFKI"
                event_link="https://www.eventbrite.de/e/3-engineering-robotics-ai-experts-taking-center-stage-tickets-158193696605"
                recording_link="https://www.youtube.com/watch?v=f2f1RL3M6xc"
                image_link="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F138319729%2F521149865225%2F1%2Foriginal.20210610-175615?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=c9e5f7151f4e1ed882d042e0732ee943"
                :tags="['Women in Robotics', 'Women Engineers']"
            >
                <template v-slot:abstract>
                    <div class="text-sm text-gray-700 dark:text-white">
                        AI and Robotics go hand in hand, whether exploring space or enabling
                        humanoid robots to walk on the Moon. As a cutting edge branch of technology,
                        having women representation in AI and Robotics is extremely important - both
                        for the progress of the field and to encourage younger generations to join
                        in as well. Join us as our very own Maria Grandury, herself a Machine
                        Learning Research Engineer, interviews Sandra Hernandez, Systems Engineer
                        at NASA JPL, and Mihaela Popescu, Researcher at University of Bremen/DFKI
                        (German Research Center for Artificial Intelligence) and Bremen Women in AI
                        & Robotics core team member. Discover their journeys into the technical
                        world, their fascinating work at NASA and DFKI Robotics and their advice
                        for women who wish to enter STEM related fields.
                    </div>
                </template>
            </CardTalk>
            <CardTalk
                talk="Is Your ML Model Trustworthy?"
                event="MLOps World Conference 2021"
                event_link="https://mlopsworld.com/"
                recording_link="https://twitter.com/MLOpsWorld/status/1405179157265489927"
                image_link="https://mlopsworld.com/wp-content/uploads/2021/02/MLOps-2021.jpg"
                :tags="['MLOps', 'AI Robustness', 'AI Explainability']"
            >
                <template v-slot:abstract>
                    <div class="text-sm text-gray-700 dark:text-white">
                        In recent years, Machine Learning models and architectures have become
                        increasingly complex. This growing complexity makes it more difficult to
                        deliver high quality in terms of model performance, robustness and
                        explainability. The introduction of automated evaluations of the
                        trustworthiness of a model is one solution to guarantee that your clients
                        can rely on your model’s predictions. This talk will guide you through the
                        different AI quality pillars, their importance and how to evaluate them.
                    </div>
                </template>
            </CardTalk>
            <CardTalk
                talk="Hands-on NLP with Hugging Face"
                event="WomenTech Global Conference 2021"
                event_link="https://bigscience.huggingface.co/"
                image_link="https://www.womentech.net/sites/default/files/2020-09/WomenTech%20Network%20Global%20Conference%202021%20Cover.png"
                recording_link="https://www.womentech.net/speaker/Maria/Grandury/57995"
                :tags="['NLP', 'Transformers', 'Hugging Face']"
            >
                <template v-slot:abstract>
                    <div class="text-sm text-gray-700 dark:text-white">
                        Hands-on introduction to the state-of-the-art Hugging Face NLP libraries.
                        Natural Language Processing (NLP) has evolved greatly and become
                        increasingly popular in recent years, especially since the introduction in
                        2017 of the Transformer architecture. Thanks to the open-source Hugging
                        Face libraries, we all have access to cutting-edge NLP models that can be
                        easily used to address a wide range of tasks.
                    </div>
                </template>
            </CardTalk>
            <CardTalk
                talk="WAIR Kick-Off Event"
                event="Women in AI & Robotics"
                event_link="https://bigscience.huggingface.co/"
                recording_link="https://www.youtube.com/watch?v=in5tEluYTSs"
                image_link="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F133617035%2F521149865225%2F1%2Foriginal.20210428-092812?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=26c39b82ba4b431b8f1a66d5de1dec84"
                :tags="['Round table', 'Women in AI', 'Women in STEM']"
            >
                <i-fluent-community-20-regular />
                <template v-slot:abstract>
                    <div class="text-sm text-gray-700 dark:text-white">
                        The field of Artificial Intelligence and Robotics is challenging
                        and rapidly growing and yet women are under-represented. We are
                        on a mission to change that.
                        Come join us in this event where five of our members will talk
                        about what motivated to enter this field, their experiences,
                        challenges, support systems, sources of inspiration and what we
                        do at Women in AI & Robotics.
                    </div>
                </template>
            </CardTalk>
        </div>
    </Container>
</template>
