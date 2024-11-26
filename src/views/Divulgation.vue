<script setup lang="ts">
import { useHead } from "@vueuse/head";

useHead({
  title: "María Grandury - NLP Divulgation: Talks, Interviews & Articles",
  meta: [
    {
      name: "description",
      content:
        "Hello! I'm María, an NLP Researcher and the Founder @ SomosNLP.org | Here you can find my talks and other divulgation content",
    },
    {
      property: "og:title",
      content: "María Grandury - NLP Divulgation: Talks, Interviews & Articles",
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
          Talks, Interviews & Articles
        </div>
        <i-fluent-chat-12-regular style="font-size: 2rem" />
      </h1>
      <h2 class="py-6">
        I'm passionate about what I do and really enjoy divulgating! Reach out
        if you would like me to give a keynote, talk or workshop!
      </h2>
    </div>
    <div>
      <p class="italic">
        Last update: November 2024 | For up-to-date information check
        <a
          href="https://www.linkedin.com/in/mariagrandury/"
          target="_blank"
          class="text-accent-500 hover:underline"
          >my LinkedIn profile</a
        >!
      </p>
    </div>
    <div class="lg:px-24 sm:px-12">
      <!-- <h2 class="py-6 text-2xl">Upcoming talk - Join us!</h2>
      <CardMediaSummary
          talk="Técnicas avanzadas y aplicaciones de NLP. Alineamiento y evaluación de LLMs."
          event="Curso de verano de IA, UNIA (Baeza) | 2x Workshops"
          event_link=""
          image_link="images/events/240819_unia.jpeg"
          recording_link=""
          :tags="['Summer School', 'NLP', '🇪🇸']"
        >
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Curso de verano
            </div>
          </template>
        </CardMediaSummary>
      -->
      <br />
      <br /> 

      <div class="grid py-6 gap-x-6 gap-y-3 lg:grid-cols-2">
        <CardMediaSummary
          talk="Lottery and Artificial Intelligence: AI cannot predict the winning ticket and it's not a matter of time"
          event="Radio Televisión Española (RTVE) | Article (Featured)"
          event_link="https://www.linkedin.com/posts/mariagrandury_ia-activity-7265744033543569408-mZ5l?utm_source=share&utm_medium=member_desktop"
          image_link="images/events/241122_loteria_rtve.jpeg"
          recording_link="https://www.rtve.es/rtve/20241122/loteria-navidad-2024-por-que-chatgpt-no-puede-predecir-ganador/16331285.shtml"
          :tags="['Radio', 'NLP', '🇪🇸']"
        >
        <i-mdi-newspaper style="font-size: 1.25rem" />
        <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Artículo de Radio Televisión Española: Lotería de Navidad e Inteligencia Artificial: la IA no puede predecir el número ganador y no es cuestión de tiempo
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="Interview with María Grandury: AI does not think, that's marketing"
          event="Cadena SER, Radio Bierzo | Interview"
          event_link="https://www.linkedin.com/posts/mariagrandury_mi-primera-entrevista-en-la-radio-siempre-activity-7262818610593550336-EsLS"
          image_link="images/events/241113_entrevista_radio_bierzo.jpg"
          recording_link="https://cadenaser.com/castillayleon/2024/11/13/maria-grandury-experta-en-ia-la-inteligencia-artificial-no-piensa-eso-es-marketing-radio-bierzo/"
          :tags="['Radio', 'NLP', '🇪🇸']"
        >
          <i-mdi-microphone style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Entrevista en Radio Bierzo
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="AI Value Chain Workshop: Fostering Responsible Innovation in Open-Source AI. Led by: Laura Galindo-Romero (Meta)"
          event="AI Policy Summit 2024, RegHorizon & ETH | Invitation-Only Workshop"
          event_link="https://reghorizon.com/ai-policy-summit-2024/"
          image_link="images/events/241101_ai_policy_summit.jpg"
          recording_link=""
          :tags="['AI Policy', 'Open-Source', '🇪🇸']"
        >
          <!-- <i-mdi-youtube style="font-size: 1.25rem" /> -->
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Curso de verano
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="Técnicas avanzadas y aplicaciones de NLP. Alineamiento y evaluación de LLMs."
          event="Curso de verano de IA, UNIA (Baeza) | 2x Workshops"
          event_link=""
          image_link="images/events/240819_unia.jpeg"
          recording_link=""
          :tags="['Summer School', 'NLP', '🇪🇸']"
        >
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Curso de verano
            </div>
          </template>
        </CardMediaSummary>

        <CardMediaSummary
          talk="European LLM Multilingual Evaluation Expert Workshop"
          event="European Commission & European Language Data Space | Invitation-Only Discussion"
          event_link="https://ec.europa.eu/newsroom/lds/items/839625/en"
          image_link="images/events/240702_european_language_data_space.jpeg"
          recording_link=""
          :tags="['Responsible AI', 'Explainable AI', '🇬🇧']">
          <i-tabler:external-link style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white"></div>
          </template>
        </CardMediaSummary>

        <CardMediaSummary
          talk="Machines that reflect us: Building AI systems responsibly"
          event="Women in Data Science Zurich | Round Table"
          event_link="https://www.wids.ch/"
          image_link="images/events/240607_wids_pic.jpeg"
          recording_link=""
          :tags="['Responsible AI', 'Explainable AI', '🇬🇧']">
          <i-tabler:external-link style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white"></div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="Open-Source LLMs and the Hugging Face ecosystem"
          event="Women in Data Science Zurich | Mentorship Session"
          event_link="https://www.wids.ch/"
          image_link="images/events/240607_wids.jpeg"
          recording_link=""
          :tags="['Open Source', 'LLMs', '🇬🇧']">
          <i-tabler:external-link style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white"></div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="Cómo podemos desarrollar IA con impacto social"
          event="Datathon contra el Bullying, Río Cuarto, Argentina | Talk"
          event_link=""
          image_link="images/events/240513_datathon.jpeg"
          recording_link=""
          :tags="['AI for Good', '🇪🇸']">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Datathon Argentina
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="SomosNLP: La larga marcha de un grupo de voluntarios por lograr un modelo de lenguaje hispano"
          event="El País | Newspaper Interview"
          event_link="https://www.linkedin.com/posts/mariagrandury_la-larga-marcha-de-un-grupo-de-voluntarios-activity-7202311429297692672-F-oA"
          image_link="images/events/240512_elpais.jpg"
          recording_link="https://www.linkedin.com/posts/mariagrandury_la-larga-marcha-de-un-grupo-de-voluntarios-activity-7202311429297692672-F-oA"
          :tags="['AI in Spanish', '🇪🇸']">
          <i-mdi-newspaper style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              El País
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="Proyecto #Somos600M: Impulsando la diversidad lingüística en IA"
          event="Hackathon #Somos600M | Keynote"
          event_link="https://www.youtube.com/watch?v=QCNPVy3QWFs&list=PLTA-KAy8nxaASMwEUWkkTfMaDxWBxn-8J"
          image_link="images/events/240313_somos600m.png"
          recording_link="https://www.youtube.com/watch?v=QCNPVy3QWFs&list=PLTA-KAy8nxaASMwEUWkkTfMaDxWBxn-8J"
          :tags="['NLP in Spanish', 'Open-Source', '🇪🇸']">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Hackathon #Somos600M
            </div>
          </template>
        </CardMediaSummary>
        <!-- TODO recording + pic speaking -->
        <CardMediaSummary
          talk="Código Abierto y Diversidad Lingüística en IA: Impulsando el Futuro del Español desde la Universidad"
          event="I Congreso de IA en la Educación Superior, Universidad de Puerto Rico | Talk"
          event_link="https://adistancia.upr.edu/inteligencia_artificial/"
          image_link="images/events/240301_upr.jpeg"
          recording_link="" 
          :tags="['Open-Source', 'Responsible AI', '🇪🇸']">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              La actual revolución de la inteligencia artificial demanda una
              reflexión profunda sobre la importancia del código abierto y la
              diversidad. En esta charla, descubriremos cómo los proyectos de
              código abierto están impulsando este avance y destacaremos la
              relevancia de la diversidad lingüística en la IA, enfocándonos en
              el español, una lengua con una riqueza extraordinaria Discutiremos
              la necesidad de recursos abiertos de alta calidad para el español
              y cómo esto puede ser impulsado desde las universidades, haciendo
              hincapié en cómo la integración de proyectos en los currículos
              universitarios no solo enriquece la educación, sino que también
              prepara a las nuevas generaciones para contribuir de manera
              significativa y responsable al desarrollo de la IA.
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="How to promote inclusive, responsible and open-source AI"
          event="Discovering Tech Stories #123 | Podcast Interview"
          event_link="https://www.youtube.com/watch?v=XYnd6Cbow7U"
          image_link="images/events/240131_techientrevista.jpeg"
          recording_link="https://www.youtube.com/watch?v=XYnd6Cbow7U"
          :tags="['Career', 'Open-Source', '🇪🇸']">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Techientrevista Opground
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="The impact of Generative AI in the European creative industry"
          event="EFE, Panodyssey, European Commission | Round Table"
          event_link="https://efecomunica.efe.com/factor-humano-ia-evitar-riesgos/"
          image_link="images/events/231114_efe_camera.png"
          recording_link="https://www.youtube.com/watch?v=GdwXx3wmWBw"
          :tags="['Responsible AI', 'AI Risks', '🇪🇸']">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">EFE</div>
          </template>
        </CardMediaSummary>
        <!-- TODO link? https://www.youtube.com/watch?v=3ezogDsebUg -->
        <CardMediaSummary talk="Women Entrepreneurs"
            event="UU Prize @ European Parliament Madrid | Round Table"
            event_link=""
            image_link="images/events/231101_parlamento_madrid.jpeg"
            recording_link=""
            :tags="['Responsible AI', 'Linguistic diversity', '🇪🇸']">
            <i-tabler:external-link style="font-size: 1.25rem;" />
            <template v-slot:abstract>
                <div class="text-sm text-gray-700 dark:text-white">
                    Parlamento Europeo Madrid
                </div>
            </template>
        </CardMediaSummary>
        <!-- TODO PIC Twitter -->
        <CardMediaSummary
          talk="Innovación y responsabilidad en LMs: Cómo cumplir con el EU AI Act, mitigar sesgos y reducir el impacto climático"
          event="Google DevFest Cloud Madrid | Workshop"
          event_link=""
          image_link="images/events/231125_devfest_cartel.png"
          recording_link=""
          :tags="['EU AI Act', 'Explainability', 'Bias', '🇪🇸']">
          <i-tabler:external-link style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Google DevFest Cloud Madrid
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="Responsible AI as a key driver for the future of robotics & Humanities"
          event="IE University Robotics & AI Club, OdiseIA | Keynote"
          event_link="https://www.linkedin.com/posts/mariagrandury_trustworthyai-responsibleai-aiinspanish-activity-7128788336776744960-bgY0"
          image_link="images/events/231024_bias_everywhere.jpg"
          recording_link="https://www.linkedin.com/posts/mariagrandury_trustworthyai-responsibleai-aiinspanish-activity-7128788336776744960-bgY0"
          :tags="['Responsible AI', '🇬🇧']">
          <i-tabler:external-link style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Organized by IE University Robotics & AI Club and OdiseIA, in
              collaboration with IE Center for the Governance of Change, IE Arts
              & Humanities.
            </div>
          </template>
        </CardMediaSummary>
        <!-- TODO link? https://www.youtube.com/watch?v=3ezogDsebUg -->
        <CardMediaSummary talk="Women Entrepreneurs"
            event="UU Prize @ European Parliament Brussels | Round Table"
            event_link=""
            image_link="images/events/230923_parlamento_bruselas.jpeg"
            recording_link=""
            :tags="['Responsible AI', 'Linguistic diversity', '🇪🇸']">
            <i-tabler:external-link style="font-size: 1.25rem;" />
            <template v-slot:abstract>
                <div class="text-sm text-gray-700 dark:text-white">
                    Parlamento Europeo Bruselas
                </div>
            </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="I've trained my LM, now what?"
          event="Summer course at the Universidad Internacional de Andalucía | Workshop"
          event_link=""
          image_link="images/events/230822_curso_unia.jpeg"
          recording_link=""
          :tags="['Bias', 'Explainability', 'Open-Source', '🇪🇸']">
          <i-tabler:external-link style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Universidad Internacional de Andalucía
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="IA y Español"
          event="IE Center for the Governance of Change y Clibrain | Round Table"
          event_link="https://www.eventbrite.com/e/entradas-inteligencia-artificial-y-espanol-637934588527"
          image_link="images/events/230529_mesa_redonda.png"
          recording_link="https://www.youtube.com/live/epPXlt520Eo?si=5hm5ARxnl_QD1Dqu&t=30667"
          :tags="['AI in Spanish', 'NLP', '🇪🇸']">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Acto de clausura del Hackathon organizado por IE Center for the
              Governance of Change y Clibrain. El evento incluirá una mesa
              redonda de expertos: Guillermo Escribano, director general del
              español en el mundo en el MAUEC, María Grandury, fundadora de
              SomosNLP.org, y Alfonso Ureña López, presidente en Sociedad
              Española para el Procesamiento del Lenguaje Natural (SEPLN), nos
              hablarán sobre la importancia del español como lengua nativa del
              IA, las implicaciones económicas y culturales de su uso, y la
              forma de paliar el actual retraso con respecto al inglés. El panel
              estará moderado por David Villalon, Co-Founder de Clibrain.
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="Hackathon SomosNLP 2023: Los LLMs hablan español"
          event="SomosNLP | Organizer, Host & Speaker"
          event_link="https://somosnlp.org/hackathon"
          image_link="images/projects/230320_hackathon_llms.jpg"
          recording_link="https://www.youtube.com/playlist?list=PLTA-KAy8nxaCDc0IJpLac-3csiAepV546"
          :tags="['NLP in Spanish', 'Open-Source', 'Hackathon', '🇪🇸']">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              The democratization of NLP in Spanish is the main goal of our
              community and one of the best ways to advance towards this goal is
              to create more NLP resources in our language. With this hackathon
              we encourage you to join our effort. We invite you to train and
              put into production a Spanish NLP model.
              <br />
              <br />
              <a
                href="https://somosnlp.org/hackathon"
                target="_blank"
                class="text-accent-500 hover:underline"
                >¡Organizamos el mayor hackathon open-source de PLN en
                español!</a
              >
            </div>
          </template>
        </CardMediaSummary>
        <!-- <CardTalkDetailed
          talk="Hackathon SomosNLP 2023: Los LLMs hablan español"
          event="SomosNLP | Hackathon | Organizer, Host & Speaker"
          event_link="https://somosnlp.org/hackathon"
          image_link="images/projects/230320_hackathon_llms.jpg"
          recording_link="https://www.youtube.com/playlist?list=PLTA-KAy8nxaCDc0IJpLac-3csiAepV546"
          :tags="['NLP in Spanish', 'Open-Source', 'Hackathon', '🇪🇸']"
        >
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
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
        </CardTalkDetailed> -->
        <CardMediaSummary
          talk="Customer service in times of ChatGPT"
          event="BBVA Spark | Blog Article (Featured)"
          event_link="https://www.bbvaspark.com/contenido/en/news/customer-service-in-times-of-chatgpt-these-startups-boost-your-business-with-conversational-ai/"
          image_link="images/events/230314_bbva_post.jpg"
          recording_link=""
          :tags="['ChatGPT', '🇬🇧']">
          <i-mdi-newspaper style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              BBVA Spart Blog article
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="Bias detection and mitigation in Language Models"
          event="Women Who Code CONNECT Empower 2023 | Workshop"
          event_link="https://hopin.com/events/connect-2023/registration"
          image_link="images/events/230302_wwc_connect.png"
          recording_link=""
          :tags="['Bias in NLP', 'Open-Source', '🇪🇸']">
          <i-tabler:external-link style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              WomenWhoCodeCONNECT
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="Interview With María Grandury on Artificial Intelligence and NLP"
          event="Pangeanic Blog | Interview"
          event_link="https://blog.pangeanic.com/interview-with-mar%C3%ADa-grandury-on-artificial-intelligence-and-nlp"
          image_link="images/events/221221_podcast_pangeanic.png"
          recording_link="https://blog.pangeanic.com/interview-with-mar%C3%ADa-grandury-on-artificial-intelligence-and-nlp"
          :tags="['NLP in Spanish', 'Open-Source', '🇬🇧']">
          <i-mdi:fountain-pen-tip style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              At the young age of 25, María Grandury has already made a name for
              herself in the field of Artificial Intelligence in Spain.
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="¡A por el 2023! De dónde venimos y a dónde vamos"
          event="SomosNLP | Blog Post"
          event_link="https://somosnlp.org/blog/a-por-el-2023"
          image_link="images/logos/SomosNLP.svg"
          recording_link="https://somosnlp.org/blog/a-por-el-2023"
          :tags="['NLP in Spanish', 'Open-Source', '🇪🇸']">
          <i-mdi:fountain-pen-tip style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Almost two years ago I was looking for resources to implement an
              NLP project in Spanish and I couldn't find anything. I created a
              Slack group with a couple of people who had encountered the same
              problem; I never imagined that group would become what SomosNLP is
              today.
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="Hola María, ¿hablamos de NLP?"
          event="Pangea AI & Languages | Podcast Interview"
          event_link="https://www.youtube.com/@mariagrandury"
          image_link="images/events/221221_podcast_pangeanic.png"
          recording_link="https://open.spotify.com/episode/6uQbVuo35PvSmHkM5XffrB"
          :tags="['NLP in Spanish', 'Podcast', '🇪🇸']">
          <i-mdi-spotify style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              María Grandury es muy joven pero ya se ha hecho un hueco dentro
              del ámbito de la Inteligencia Artificial en España. Tiene 25 años
              y hace solo dos, en plena pandemia, estaba finalizando sus
              estudios de doble grado de Matemática y Física. Durante los años
              de carrera tuvo la oportunidad de realizar un Erasmus en París y
              fue uno de sus profesores el que le brindó la ocasión de acercarse
              al mundo de la Inteligencia Artificial.
              <a
                href="https://blog.pangeanic.com/es/entrevista-a-mar%C3%ADa-grandury-sobre-inteligencia-artificial-y-pln"
                target="_blank"
                class="text-accent-500 hover:underline"
              >
                Entrevista ES
              </a>
              <a
                href="https://blog.pangeanic.com/interview-with-mar%C3%ADa-grandury-on-artificial-intelligence-and-nlp"
                target="_blank"
                class="text-accent-500 hover:underline"
              >
                Entrevista EN
              </a>
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="El estado del arte de la industria de PLN en nuestro país y fuera"
          event="Primer foro del PERTE de la Nueva Economía de la Lengua | Round Table"
          event_link="https://twitter.com/PERTE_Lengua/status/1567902042353442816?s=20&t=kR1vwhuxmGig2UrbH4WvDw"
          image_link="images/events/220928_perte_sota_nlp.jfif"
          recording_link="https://www.youtube.com/watch?v=XdHnsBbXbWc&t=7370s"
          :tags="['NLP', 'SOTA NLP', 'Round Table', '🇪🇸']">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              El PERTE de la Nueva economía de la Lengua es una oportunidad para
              aprovechar el potencial del español y de las lenguas cooficiales
              como factor de crecimiento económico y competitividad
              internacional en áreas como la inteligencia artificial, la
              traducción, el aprendizaje, la divulgación cultural, la producción
              audiovisual, la investigación y la ciencia.
              <br />
              <br />
              <a
                href="https://www.youtube.com/watch?v=XdHnsBbXbWc&t=5593s"
                target="_blank"
                class="text-accent-500 hover:underline"
              >
                1. ¿Cómo se puede avanzar el estado del arte del NLP en español?
              </a>
              <br />
              <a
                href="https://www.youtube.com/watch?v=XdHnsBbXbWc&t=7370s"
                target="_blank"
                class="text-accent-500 hover:underline"
              >
                2. ¿Cuál crees que sería el proyecto más importante a nivel
                internacional que deberíamos implementar?
              </a>
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="Hackathon Objetivos de Desarrollo Sostenibles"
          event="SomosNLP | Hackathon | Organizer, Host & Speaker"
          event_link="https://somosnlp.org/blog/hackathon-2022"
          image_link="images/projects/hackathon_pln_es_3.png"
          recording_link="https://www.youtube.com/playlist?list=PLTA-KAy8nxaAbVZ2lVcycHnJ2qEDip7hG"
          :tags="['NLP in Spanish', 'Open-Source', 'Hackathon', '🇪🇸']">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              The democratization of NLP in Spanish is the main goal of our
              community and one of the best ways to advance towards this goal is
              to create more NLP resources in our language. With this hackathon
              we encourage you to join our effort. We invite you to train and
              put into production a Spanish NLP model.
              <br />
              <br />
              <a
                href="https://somosnlp.org/blog/hackathon-2022"
                target="_blank"
                class="text-accent-500 hover:underline"
                >¡Organizamos el mayor hackathon open-source de PLN en
                español!</a
              >

              With more than 500 participants from 39 countries, it is the
              largest open-source hackathon of NLP in Spanish. The recorded
              events have already more than 5k visualizations! Organized by
              SomosNLP and sponsored by Hugging Face, Platzi and Paperspace.
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="PLN con SomosNLP y Hugging Face"
          event="AI The New Sexy | Podcast Interview"
          event_link="https://open.spotify.com/episode/38Y2K2gAe8IujRZOMjv1BH?si=S8VO6ifPT4WYWLbSLr91tg"
          image_link="images/logos/AITheNewSexy.jpeg"
          recording_link="https://open.spotify.com/episode/38Y2K2gAe8IujRZOMjv1BH?si=S8VO6ifPT4WYWLbSLr91tg"
          :tags="['NLP in Spanish', 'Career', 'Open-Source', 'Interview', '🇪🇸']">
          <i-mdi-spotify style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              AI The New Sexy is a podcast where you can find information about
              Artificial Intelligence and its impact on everyday life and on
              business. In this episode we interview María Grandury, founder of
              SomosNLP (formerly NLP en ES), an open community for
              Spanish-speaking professionals and researchers advancing and
              democratizing NLP in their language.
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="Tecnologías del Lenguaje en la Empresa"
          event="DiverTLes: Diversidad en Tecnologías del Lenguaje en España | Round Table"
          event_link="https://gplsi.dlsi.ua.es/pln/divertles"
          image_link="images/events/211130_divertles.jfif"
          recording_link="https://www.youtube.com/watch?v=yvPLMc3-KnI"
          :tags="['NLP', 'NLP in Production', 'Research', 'Round Table', '🇪🇸']">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Three professionals working in NLP in a company discuss how they
              use NLP for real-world applications. María works in Germany at
              neurocat, a startup specialized in Explainable AI and Robustness
              that develops a tool to assess the quality and trustworthiness of
              any ML model. Muntsa works in France at Eloquant, a company that
              develops software used to extract information from text and audio
              to improve the customer relationship. Melania works in Spain at
              Adecco Outsourcing and is currently developing NLP solutions for
              Google products, mainly Google Assistant but also Google Maps,
              Google Home and GMail.
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="IAs que hablan español"
          event="Saturdays.AI | Podcast Interview"
          event_link="https://saturdays.ai/2022/01/27/3x07-maria-grandury-ai-que-hablan-espanol/"
          image_link="images/logos/SaturdaysAIPodcast.jpg"
          recording_link="https://www.youtube.com/watch?v=O5QkrbOrxd4"
          :tags="['My Story', 'NLP', 'AI Regulation', 'Interview', '🇪🇸']">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Interview for the Saturdays.AI Podcast where I discuss with its
              founder Miguel Guerrero how I became an ML Research Engineer, what
              are we doing at BigScience
              <a
                href="https://bigscience.huggingface.co/"
                target="_blank"
                class="text-accent-500 hover:underline"
                >BigScience,
              </a>
              and how I founded
              <a
                href="https://somosnlp.org"
                target="_blank"
                class="text-accent-500 hover:underline"
              >
                SomosNLP,
              </a>
              amongst other topics like privacy, AI regulation and why most of
              the AI-related movies picture AI as "the bad guy".
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="II. Sequential Models"
          event="NLP de 0 a 100 con Hugging Face | Course by SomosNLP & Spain AI"
          event_link="https://somosnlp.org/nlp-de-cero-a-cien"
          image_link="images/events/210713_nlp_de_cero_a_cien.jpeg"
          recording_link="https://somosnlp.org/nlp-de-cero-a-cien/sesion-03"
          :tags="[
            'NLP',
            'Sequential Models',
            'Transformers',
            'NLP Demos',
            'Course',
            '🇪🇸',
          ]">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Understand all the key concepts and architectures of
              state-of-the-art NLP and apply them to common use cases using one
              of the most popular libraries in the field: Hugging Face.
              Regardless of your current knowledge, you will finish the course
              talking about Word Embeddings, Sequential Models, Attention
              Mechanisms, Transformers and Language Modelling.
              <br />
              <br />
              This course was organized by
              <a
                href="https://somosnlp.org"
                target="_blank"
                class="text-accent-500 hover:underline"
              >
                SomosNLP
              </a>
              with the support of
              <a
                href="https://www.spain-ai.com/"
                target="_blank"
                class="text-accent-500 hover:underline"
              >
                Spain AI.
              </a>
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="III. The Transformer Architecture"
          event="NLP de 0 a 100 con Hugging Face | Course by SomosNLP & Spain AI"
          event_link="https://somosnlp.org/nlp-de-cero-a-cien"
          image_link="images/events/210713_nlp_de_cero_a_cien.jpeg"
          recording_link="https://somosnlp.org/nlp-de-cero-a-cien/sesion-03"
          :tags="[
            'NLP',
            'Sequential Models',
            'Transformers',
            'NLP Demos',
            'Course',
            '🇪🇸',
          ]">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Understand all the key concepts and architectures of
              state-of-the-art NLP and apply them to common use cases using one
              of the most popular libraries in the field: Hugging Face.
              Regardless of your current knowledge, you will finish the course
              talking about Word Embeddings, Sequential Models, Attention
              Mechanisms, Transformers and Language Modelling.
              <br />
              <br />
              This course was organized by
              <a
                href="https://somosnlp.org"
                target="_blank"
                class="text-accent-500 hover:underline"
              >
                SomosNLP
              </a>
              with the support of
              <a
                href="https://www.spain-ai.com/"
                target="_blank"
                class="text-accent-500 hover:underline"
              >
                Spain AI.
              </a>
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="3 Engineering, Robotics & AI experts Taking Center Stage"
          event="Women in AI & Robotics, NASA JPL, UniBremen, DFKI | Round Table"
          event_link="https://www.eventbrite.de/e/3-engineering-robotics-ai-experts-taking-center-stage-tickets-158193696605"
          recording_link="https://www.youtube.com/watch?v=f2f1RL3M6xc"
          image_link="images/events/210622_wair_3_engineers.avif"
          :tags="['Women in Robotics', 'Women Engineers', 'Round Table', '🇬🇧']">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              AI and Robotics go hand in hand, whether exploring space or
              enabling humanoid robots to walk on the Moon. As a cutting edge
              branch of technology, having women representation in AI and
              Robotics is extremely important - both for the progress of the
              field and to encourage younger generations to join in as well.
              <br />
              <br />
              Join us as our very own Maria Grandury, herself a Machine Learning
              Research Engineer, interviews Sandra Hernandez, Systems Engineer
              at NASA JPL, and Mihaela Popescu, Researcher at University of
              Bremen/DFKI (German Research Center for Artificial Intelligence)
              and Bremen Women in AI & Robotics core team member. Discover their
              journeys into the technical world, their fascinating work at NASA
              and DFKI Robotics and their advice for women who wish to enter
              STEM related fields.
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="Is Your ML Model Trustworthy?"
          event="MLOps World Conference 2021 | Workshop"
          event_link="https://mlopsworld.com/"
          recording_link="https://twitter.com/MLOpsWorld/status/1405179157265489927"
          image_link="images/events/210614_mlops_world.jpg"
          :tags="['MLOps', 'AI Robustness', 'AI Explainability', 'Talk', '🇬🇧']">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              In recent years, Machine Learning models and architectures have
              become increasingly complex. This growing complexity makes it more
              difficult to deliver high quality in terms of model performance,
              robustness and explainability. The introduction of automated
              evaluations of the trustworthiness of a model is one solution to
              guarantee that your clients can rely on your model’s predictions.
              This talk will guide you through the different AI quality pillars,
              their importance and how to evaluate them.
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="Hands-on NLP with Hugging Face"
          event="WomenTech Global Conference 2021 | Workshop"
          event_link="https://bigscience.huggingface.co/"
          image_link="images/events/210610_wtn.png"
          recording_link="https://www.womentech.net/speaker/Maria/Grandury/57995"
          :tags="['NLP', 'Transformers', 'Hugging Face', 'Workshop', '🇬🇧']">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Hands-on introduction to the state-of-the-art Hugging Face NLP
              libraries. Natural Language Processing (NLP) has evolved greatly
              and become increasingly popular in recent years, especially since
              the introduction in 2017 of the Transformer architecture. Thanks
              to the open-source Hugging Face libraries, we all have access to
              cutting-edge NLP models that can be easily used to address a wide
              range of tasks.
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="Meet 8 International Inspirational Women on March 8"
          event="Women in AI & Robotics | Blog Post"
          event_link="https://medium.com/womeninairobotics/inspirational-women-in-ai-85b80cb4999f"
          recording_link="https://medium.com/womeninairobotics/inspirational-women-in-ai-85b80cb4999f"
          image_link="images/events/210308_meet_8_women.png"
          :tags="['Women in AI', 'Women in Robotics', '🇬🇧']">
          <i-mdi-medium style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              Blog article published on the Medium account of Women in AI &
              Robotics about 8 international inspirational women working in the
              fields of AI & Robotics.
            </div>
          </template>
        </CardMediaSummary>
        <CardMediaSummary
          talk="WAIR Kick-Off Event"
          event="Women in AI & Robotics | Round Table"
          event_link="https://bigscience.huggingface.co/"
          recording_link="https://www.youtube.com/watch?v=in5tEluYTSs"
          image_link="images/events/210506_wair_kick_off.avif"
          :tags="['Women in AI', 'Women in STEM', 'Round Table', '🇬🇧']">
          <i-mdi-youtube style="font-size: 1.25rem" />
          <template v-slot:abstract>
            <div class="text-sm text-gray-700 dark:text-white">
              The field of Artificial Intelligence and Robotics is challenging
              and rapidly growing and yet women are under-represented. We are on
              a mission to change that. Come join us in this event where five of
              our members will talk about what motivated to enter this field,
              their experiences, challenges, support systems, sources of
              inspiration and what we do at Women in AI & Robotics.
            </div>
          </template>
        </CardMediaSummary>
      </div>
      <div class="flex my-6 justify-center">
        <a
          href="https://www.youtube.com/channel/UCGaFn8AWNgmtLyNi0hwvhHw"
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
          <div>More on YouTube</div>
        </a>
      </div>
    </div>
  </Container>
</template>
