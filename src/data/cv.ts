// Content of the Overleaf CV (cv_research.tex), used by the /cv_overleaf view.
// Strings may contain simple HTML (<b>, <i>, <a>).

export interface CVEntry {
  start?: string;
  end: string;
  title: string;
  org: string;
  place: string;
  bullets: string[];
}

export interface CVDated {
  date: string;
  text: string;
}

const a = (href: string, label: string) => `<a href="${href}" target="_blank">${label}</a>`;

export const header = {
  firstName: "María",
  lastName: "Grandury",
  tagline: "Natural Language Processing Researcher",
};

export const education: CVDated[] = [
  {
    date: "2026",
    text: "PhD, <b>Computer Science</b>, École Polytechnique Fédérale de Lausanne (EPFL), Switzerland - Thesis (<b>Multilingual Multicultural LLM Evaluation</b>), advised by Assistant Prof. Antoine Bosselut.",
  },
  {
    date: "2025",
    text: "MS, <b>Language Technologies</b>, National University of Distance Education (UNED), Spain - Thesis (<b>LLM Evaluation</b>): <i>Multicultural LLM evaluation: The case of Spanish as a pluricentric language</i>, collaboration with EPFL.",
  },
  {
    date: "2020",
    text: "BS, <b>Mathematics</b>, Oviedo University, Spain - Thesis (<b>Algebra</b>): <i>Algebraic algorithms and their applications to Deep Learning</i>, implemented a COVID-19 chatbot with 92% 1st turn acc. used by 1500+ persons during the pandemic.",
  },
  {
    date: "2020",
    text: "BS, <b>Physics</b>, Oviedo University, Spain - Thesis (<b>Particle Physics</b>): <i>Study of the processes involving top quarks and the Higgs boson in the CMS detector at the Large Hadron Collider (LHC) at CERN using Neural Networks.</i>",
  },
  { date: "2019", text: "1-year exchange, Paris-Saclay University (prev. Paris-Sud), France" },
];

export const research: CVEntry[] = [
  {
    start: "Mar 2021",
    end: "Today",
    title: "Founder & President",
    org: "SomosNLP.org",
    place: "Non-profit, Spain & LATAM",
    bullets: [
      "Founded the <b>largest community of Spanish-speaking open-source NLP practitioners</b> with 2000+ members.",
      'Led the collaboration between 10 research groups to collect 60+ evaluation datasets in 4 languages to implement the <b>first open generative LLM leaderboard in the languages from LATAM and Spain</b>, "La Leaderboard".',
      "Led the organization of 5 editions of an international online hackathon focused on creating open-source Spanish NLP resources. In total: 2000+ registrations, 60+ speakers & mentors, 100+ datasets & models created.",
      "Led the creation of an open-source NLP from zero to hero course in Spanish with 45k visualizations.",
      "Inaugurated the <b>Hugging Face Fellowship</b>, awarded for these contributions to the open-source ecosystem.",
    ],
  },
  {
    start: "Jan 2026",
    end: "Jun 2026",
    title: "Researcher",
    org: "Spanish General Direction of Artificial Intelligence (DGIA)",
    place: "Part-time, Spain",
    bullets: ["Technical lead of the development of a portal for all AI resources, events, and communications in Spain."],
  },
  {
    start: "Nov 2025",
    end: "Jun 2026",
    title: "Researcher",
    org: "National University of Distance Education (UNED)",
    place: "Part-time, Spain",
    bullets: ["Lead a data collection initiative to evaluate the cultural adequacy of LLMs with Spanish-speaking countries."],
  },
  {
    start: "Sep 2024",
    end: "Nov 2025",
    title: "Researcher",
    org: "Technical University of Madrid (UPM)",
    place: "Part-time, Spain",
    bullets: [
      "Co-lead a 40.000 € project to evaluate the <b>climate impact of LLMs funded by COTEC #PIA Under 30</b>.",
      "Designed and analyzed methods to evaluate <b>LLM's Spanish proficiency and Spanish varieties adequacy</b>.",
      "Conducted <b>psycholinguistic</b> experiments to study the correlation between familiarity, synesthesia, iconicity, and anxiety in humans and LLMs together with Prof. Marc Brysbaert from Ghent University.",
      "Lead the collaboration with the National Program of Green Algorithms (PNAV) to define the <b>national climate impact standards and a quality seal</b>. Contributing to the organization of a 4-month GreenAI hackathon.",
      "Responsible for the <b>GenAI MOOC courses on ethics, alignment</b> with human values, and the Spanish SOTA.",
    ],
  },
  {
    start: "May 2025",
    end: "Jul 2025",
    title: "Visiting Student",
    org: "École Polytechnique Fédérale de Lausanne (EPFL)",
    place: "Switzerland",
    bullets: [
      "Co-created a +100 language-region pairs <b>multicultural benchmark</b>, leading the LATAM data collection.",
      'Implemented benchmarks to evaluate the open-source multilingual Large Language Model "Apertus".',
    ],
  },
];

export const professional: CVEntry[] = [
  {
    start: "Jun 2023",
    end: "Nov 2023",
    title: "Machine Learning Engineer",
    org: "Clibrain",
    place: "Full-time, Madrid, Spain",
    bullets: [
      "<b>Designed the evaluation strategy of the startup</b> and transformed it into a proposal for a European project.",
      "Led the evaluation of the proprietary LLMs' performance and bias. Created a Spanish equivalent of MTBench.",
      "Designed and implemented the internal dataset collection, creation & annotation pipeline.",
      "Contributed as Advisor (Jun-Jul) to the development of LINCE, a state-of-the-art (Jun 2023) Spanish LLM.",
    ],
  },
  {
    start: "Feb 2021",
    end: "Jul 2023",
    title: "Research Engineer",
    org: "neurocat",
    place: "Full-time, Berlin, Germany",
    bullets: [
      "<b>Core maintainer of the startup's internal product for ML model robustness and explainability assessment.</b>",
      "Designed the product's support for NLP models and led agile sprints to implement it. Implemented SOTA explainability methods (e.g. SHAP) and adversarial attacks (e.g. backdoors) to assess NLP & CV models' safety.",
    ],
  },
  {
    start: "Apr 2020",
    end: "Jun 2020",
    title: "Machine Learning Engineer",
    org: "REDYTEL WIMAX",
    place: "Internship, Remote, Spain",
    bullets: [
      "Developed a <b>chatbot</b> on AWS that understands correctly on the 1st attempt 91% of the 500+ questions/month the clients ask it, reducing the calls to customer service by 25%. S3 database with clients from 1500+ towns.",
    ],
  },
  {
    start: "Jun 2019",
    end: "Aug 2019",
    title: "Software Engineer",
    org: "Stelliant",
    place: "Internship, Paris, France",
    bullets: [
      "Built an AWS serverless <b>chatbot</b> using Angular and Node.js that allows each client to access confidential information about the status of their case and attach documents. End-to-end agile project management.",
    ],
  },
  {
    start: "Jun 2018",
    end: "Jul 2018",
    title: "Data Analyst",
    org: "Sociedad Asturiana de Estudios Económicos e Industriales (SADEI)",
    place: "Internship, Oviedo, Spain",
    bullets: ["Created algorithms to analyze 78.000+ companies' data and <b>optimize</b> the commuting of their employees."],
  },
];

// pub/publications_titles.tex (* first author)
export const publicationsSelected: string[] = [
  "<b>*</b> La Leaderboard: A LLM Leaderboard for Spanish Varieties and Languages of Spain and Latin America. <b>ACL Main</b>, 2025.",
  "<b>*</b> INCLUDE-2.0: Disentangling Knowledge Gaps in Multilingual LLM Evaluation. <b>EMNLP Main</b>, 2026.",
  "<b>*</b> Spanish as a Pluricentric Lang.: Challenging the Monolingual Bias in NLP to Improve Cultural Adequacy. <i>COLM-MELT</i>, 2025.",
  "<b>*</b> The #Somos600M Project: NLP resources that represent the diversity of the languages from LATAM. <i>NAACL-LXAI</i>, 2024.",
  "Adding LLMs to the psycholinguistic norming toolbox. <i>Behavior Research Methods, 58, 253</i>, 2026.",
  "Measuring what Matters: Construct Validity in Large Language Model Benchmarks. <i>NeurIPS</i>, 2025.",
  "It's the same but not the same: Do LLMs distinguish Spanish varieties? <i>Procesamiento del Lenguaje Natural, 75, 137-146</i>, 2025.",
  "Spanish and LLM Benchmarks: Is MMLU lost in translation? <i>GACLM</i>, 2025.",
  "Kaleidoscope: In-language Exams for Massively Multilingual Vision Evaluation, <i>ICLR</i>, 2026.",
  "Evaluating large language models with tests of Spanish as a foreign language: Pass or fail? <i>Applied Linguistics</i>, 2026.",
  "Publications presenting pretrained LLMs: Apertus (ACL 2026), BLOOM (2022), BERTIN (SEPLN 2022)",
];

// pub/publications_apa.tex (APA style)
export const publicationsFull: string[] = [
  `<b>Grandury, M.</b>, Aula-Blasco, J., Falcão, J., Fourrier, C., Saiz, M.G., Martínez, G., Gómez, G.S., ... (2025). La Leaderboard: A Large Language Model Leaderboard for Spanish Varieties and Languages of Spain and Latin America. In <i>Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)</i>, pages 32482–32524, Vienna, Austria. ${a("https://aclanthology.org/2025.acl-long.1561", "aclanthology.org/2025.acl-long.1561")}`,
  `<b>Grandury, M.</b> (2025). Master's Thesis: "Multicultural LLM Evaluation: The Case of Spanish as a Pluricentric Language". Universidad Nacional de Educación a Distancia (UNED). ${a("https://hdl.handle.net/20.500.14468/31642", "hdl.handle.net/20.500.14468/31642")}`,
  `<b>Grandury, M.</b> & Galvan-Sosa, D. (2025). The Case of Spanish as a Pluricentric Language: Challenging the Monolingual Bias in NLP to Improve Cultural Adequacy of LLMs. <i>1st Workshop on Multilingual and Equitable Language Technologies (MELT) at the Conference on Language Modeling (COLM)</i>. Spotlight paper. ${a("https://melt-workshop.github.io/papers", "melt-workshop.github.io/papers")}`,
  `Jumelet, J., Fourtassi, A., Haga, A., Bunzeck, B., Shandilya, B., Galvan-Sosa, D., ... <b>Grandury, M.</b>, ... Bisazza, A., Warstadt, A., & Choshen, L. (2025). BabyBabelLM: A Multilingual Benchmark of Developmentally Plausible Training Data. <i>European Association for Computational Linguistics, Rabat, Morocco.</i> ${a("https://arxiv.org/abs/2510.10159", "arxiv.org/abs/2510.10159")}`,
  `Bean, A., Othniel, R., Romanou, A., Hafner, F., Mayne, H. ... <b>Grandury, M.</b> ... Mahdi, A. (2025). Measuring what Matters: Construct Validity in Large Language Model Benchmarks. <i>Neural Information Processing Systems.</i> ${a("https://neurips.cc/virtual/2025/poster/121477", "neurips.cc/virtual/2025/poster/121477")}`,
  `Martínez, G., Mayor-Rocher, M., Huertas, C.P., Melero, N., <b>Grandury, M.</b>, & Reviriego, P. (2025). Spanish is not just one: A dataset of Spanish dialect recognition for LLMs. <i>Data in Brief, 63</i>. ${a("https://sciencedirect.com/science/article/pii/S2352340925008108", "sciencedirect.com/science/article/pii/S2352340925008108")}`,
  `Mayor-Rocher, M., Pozo, C., Melero, N., Martínez, G., <b>Grandury, M.</b> & Reviriego, P. (2025). It's the same but not the same: Do LLMs distinguish Spanish varieties? <i>Procesamiento del Lenguaje Natural, 75</i>, 137-146. ${a("http://journal.sepln.org/sepln/ojs/ojs/index.php/pln/article/view/6744", "journal.sepln.org/sepln/ojs/ojs/index.php/pln/article/view/6744")}`,
  `Hernández-Cano, A., Hägele, A., Huang, A.H., Romanou, A., Solergibert, A., Pásztor, B., Messmer, B. ... <b>Grandury, M.</b> ... Bosselut, A., Jaggi, M., & Schlag, I. (2025). Apertus: Democratizing Open and Compliant LLMs for Global Language Environments. ${a("https://arxiv.org/abs/2509.14233", "arxiv.org/abs/2509.14233")}`,
  `Conde, J., <b>Grandury, M.</b>, Fu, T., Arriaga, C., Martínez, G., Clark, T., Trott, S., Green, C., Reviriego, P., & Brysbaert, M. (2025). Adding LLMs to the psycholinguistic norming toolbox: A practical guide to getting the most out of human ratings. <i>Behavior Research Methods, 58, 253.</i> ${a("https://doi.org/10.3758/s13428-026-03129-3", "doi.org/10.3758/s13428-026-03129-3")}`,
  `Conde, J., González, M., <b>Grandury, M.</b>, Martínez, G., Reviriego, P., & Brysbaert, M. (2025). Psycholinguistic Word Features: a New Approach for the Evaluation of LLMs Alignment with Humans. In <i>Proceedings of the Fourth Workshop on Generation, Evaluation and Metrics (GEM²)</i>, pages 8–17, Vienna, Austria. ${a("https://aclanthology.org/2025.gem-1.2", "aclanthology.org/2025.gem-1.2")}`,
  `Salazar, I., Fernández Burda, M., Bin Islam, S., Soltani Moakhar, A., Singh, S., Farestam, F., Romanou, A., ... <b>Grandury, M.</b> ... (2025). Kaleidoscope: In-language Exams for Massively Multilingual Vision Evaluation. <i>The Fourteenth International Conference on Learning Representations, Rio de Janeiro, Brazil</i>. ${a("https://arxiv.org/abs/2504.07072", "arxiv.org/abs/2504.07072")}`,
  `Fu, T., Conde, J., Martínez, G., <b>Grandury, M.</b>, & Reviriego, P. (2025). Multiple Choice Questions: Reasoning makes Large Language Models (LLMs) more self-confident even when they are wrong. ${a("https://arxiv.org/abs/2501.09775", "arxiv.org/abs/2501.09775")}`,
  `<b>Grandury, M.</b> (2024). The #Somos600M Project: Generating NLP resources that represent the diversity of the languages from LATAM, the Caribbean, and Spain. <i>NAACL: LatinX in AI (LXAI) Research Workshop 2024, Mexico City, Mexico</i>. ${a("https://research.latinxinai.org/papers/naacl/2024/pdf/Maria_Grandury.pdf", "research.latinxinai.org/papers/naacl/2024")}`,
  `Mayor-Rocher, M., Melero, N., Merino-Gómez, E., <b>Grandury, M.</b>, Conde, J., & Reviriego, P. (2024). Evaluating large language models with tests of Spanish as a foreign language: Pass or fail? ${a("https://arxiv.org/abs/2409.15334", "arxiv.org/abs/2409.15334")}`,
  `Plaza, I., Melero, N., del Pozo, C., Conde, J., Reviriego, P., Mayor-Rocher, M., & <b>Grandury, M.</b> (2024). Spanish and LLM Benchmarks: Is MMLU lost in translation? In <i>Proceedings of the 2nd International Generative AI and Computational Language Modelling Conference (GACLM)</i>. ${a("https://arxiv.org/abs/2406.17789", "arxiv.org/abs/2406.17789")}`,
  `Le Scao, T., Fan, A., Akiki, C., Pavlick, E., Ilić, S., Hesslow, D., Luccioni, A. S., Yvon, F., ... <b>Grandury, M.</b>, ... Wolf, T. (2023). BLOOM: A 176B-parameter open-access multilingual language model. ${a("https://arxiv.org/abs/2211.05100", "arxiv.org/abs/2211.05100")}`,
  `De la Rosa, J., Ponferrada, E. G., Romero, M., Villegas, P., González de Prado Salas, P., & <b>Grandury, M.</b> (2022). BERTIN: Efficient pre-training of a Spanish language model using perplexity sampling. <i>Procesamiento del Lenguaje Natural, 68</i>(0), 13–23. ${a("http://journal.sepln.org/sepln/ojs/ojs/index.php/pln/article/view/6403", "journal.sepln.org/sepln/ojs/ojs/index.php/pln/article/view/6403")}`,
];

// talks/talks_selected.tex
export const talksSelected: string[] = [
  '<b>Swiss Embassy in Spain</b>, <i>"Why and how to develop open-source multilingual AI" @EUNIC Science Day</i>, talk, Jun 2026',
  '<b>Basque Government</b>, talk, <i>"Sovereign AI in Switzerland: What is possible today. The case of Apertus."</i>, Jun 2026',
  '<b>Secretaría de Estado de Digitalización e IA</b> (SEDIA), round table, <i>"Challenges of Ethical and Cultural Alignment"</i>, Mar 2026',
  '<b>Secretaría de Estado de Digitalización e Inteligencia Artificial</b> (SEDIA), round table, <i>"Aterrizando la IA a la realidad"</i>, Dec 2025',
  '<b>Ministerio de Cultura | XI Encuentro de Cultura y Ciudadanía</b>, <i>"Intersecciones críticas: IA, sesgos y subjetividades"</i>, Oct 2025',
  '<b>Galician Supercomputing Center</b> (CESGA), 8h workshop, <i>"Fundamentals of NLP for small business CTOs"</i>, Sep 2025',
  '<b>National University of Asunción, Paraguay</b> (UNA), 25h undergrad module, <i>"Deep Learning for NLP"</i>, Sep 2025',
  '<b>Ministry of Culture, Spain</b>, round table moderator, <i>"Critical intersection: AI, biases, and subjectivity"</i>, Sep 2025.',
  '<b>International University of Andalucía</b> (UNIA), 5h summer school workshop, <i>"Responsible NLP"</i>, Aug 2023-25',
  '<b>National Center of Artificial Intelligence</b> (CENIA), 4h undergrad masterclass, <i>"RLHF & Model Alignment"</i>, Apr 2025',
  '<b>University of Chile</b> (UChile), talk, <i>"How to impulse the development of LLMs in Spanish"</i>, Apr 2025',
  '<b>Mohamed bin Zayed University of Artificial Intelligence</b> (MBZUAI), talk, <i>"Promoting inclusive NLP"</i>, Feb 2025',
  '<b>National Autonomous University of Mexico</b> (UNAM), 5h undergrad masterclass, <i>"LLM evaluation & synthetic data"</i>, Dec 2024',
  "<b>Université Côte d'Azur</b>, EFELIA hackathon opening keynote, <i>\"Open-Source Responsible AI with Hugging Face\"</i>, Nov 2024",
  '<b>University of Puerto Rico</b>, <i>"Open-source and linguistic diversity in AI: Impulsing the future of Spanish from university"</i>, Mar 2024',
];

// talks/talks_full.tex, plus the 2026 talks of the selected list
export const talksFull: string[] = [
  ...talksSelected.slice(0, 3),
  '<b>Secretaría de Estado de Digitalización e Inteligencia Artificial</b> (SEDIA), round table, <i>"Aterrizando la IA a la realidad"</i>, Dec 2025',
  '<b>Ministerio de Cultura | XI Encuentro de Cultura y Ciudadanía</b>, radio interview, <i>"Cultura en las Ondas"</i>, Oct 2025',
  `<b>Galician Supercomputing Center</b> (CESGA), 2h workshop part of the AI Hackathon EuroCC2, <i>"Fundamentals of NLP for small businesses"</i>, Sep 2025 ${a("https://cesga.es/hackathon-eurocc2-de-ia-para-pymes", "(event website)")}`,
  `<b>National University of Asunción, Paraguay</b> (UNA), 20h undergrad module in NLP Degree, <i>"Deep Learning for NLP"</i>, Sep 2025 ${a("https://pol.una.py/extension/formacion-continua/diplomados/diplomado-en-procesamiento-de-lenguaje-natural-e-inteligencia-artificial", "(course website)")}`,
  `<b>Ministerio de Cultura</b>, XI Encuentro de Cultura y Ciudadanía, round table moderator, <i>"Intersecciones críticas: inteligencia artificial, sesgos y subjetividades"</i>, Barcelona (ES), Sep 2025 ${a("https://espaciovirtual.culturayciudadania.es/programa/", "(event program)")}`,
  `<b>Secretaría General Iberoamericana</b> (SEGIB) & <b>Maldita.es</b>, Pabellón Iberoamericano, Feria del Libro, round table: <i>"LLM Grooming: Cómo se está intentando engañar a la IA en español"</i>, Madrid (ES), Jun 2025 ${a("https://exteriores.gob.es/es/PoliticaExterior/Documents/250527_Programa%20Pabell%c3%b3n%20Iberoamericano.pdf", "(event program)")}`,
  `<b>International University of Andalucía</b> (UNIA), 2.5h workshop <i>"Natural Language Processing"</i> at the Summer School <i>"Fundamentos de Inteligencia Artificial: Modelos Generativos y Aplicaciones Avanzadas"</i>, Baeza (ES), Aug 2025 ${a("https://unia.es/estudios-y-acceso/oferta-academica/cursos-de-verano/fundamentos-de-inteligencia-artificial-modelos-generativos-y-aplicaciones-avanzadas", "(course website)")}`,
  '<b>National Center of Artificial Intelligence</b> (CENIA), 4h undergrad masterclass, <i>"RLHF & Model Alignment"</i>, Apr 2025',
  '<b>University of Chile</b> (UChile), talk, <i>"How to impulse the development of LLMs in Spanish"</i>, Santiago de Chile (CL), Apr 2025',
  '<b>Mohamed bin Zayed University of Artificial Intelligence</b> (MBZUAI), talk, <i>"Promoting inclusive NLP: Why and how to engage the community"</i>, Abu Dhabi (AE), Feb 2025',
  '<b>European Language Data Space</b>, 5-min presentation, <i>"Workshop on the Linguistic and Cultural Evaluation of LLMs"</i>, Dec 2024',
  '<b>National Autonomous University of Mexico</b> (UNAM), 5h undergrad masterclass, <i>"Evaluación de LLMs, generación sintética de datos y adaptación de modelos de lenguaje para seguir instrucciones"</i>, as part of the Module <i>"Temas selectos para el análisis de datos"</i>, from the Degree <i>"Introducción a la Ciencia de Datos: Herramientas para el Aprendizaje Automatizado en las Ciencias Sociales y Humanidades"</i>, Dec 2024',
  `<b>Cadena SER</b>, radio interview: <i>"Entrevista con María Grandury, experta en IA: la IA no piensa, eso es marketing"</i> (in English, <i>"Interview with María Grandury, AI expert: AI doesn't think, that's marketing"</i>), Ponferrada (ES), Nov 2024 ${a("https://cadenaser.com/castillayleon/2024/11/13/maria-grandury-experta-en-ia-la-inteligencia-artificial-no-piensa-eso-es-marketing-radio-bierzo/", "(radio recording)")}`,
  "<b>Université Côte d'Azur</b>, EFELIA hackathon opening keynote, <i>\"Open-Source Responsible AI with Hugging Face\"</i>, Nov 2024",
  '<b>International University of Andalucía</b> (UNIA), 2.5h workshop, <i>"Evaluación y alineación de LLMs generativos"</i> (in English <i>"LLM evaluation and alignment"</i>) and 1.25h workshop <i>"Técnicas avanzadas y aplicaciones de PLN: cuantización, extracción de información de documentos y RAG"</i> at the Summer School <i>"Introducción práctica a la Inteligencia Artificial: generación de contenido y modelos de lenguaje"</i>, Baeza (ES), Aug 2024',
  `<b>Women in Data Science Zurich</b>, round table: <i>"Machines that reflect us: Building AI systems responsibly"</i> and mentorship session: <i>"Open-Source LLMs and the Hugging Face ecosystem"</i>, Zurich (CH), Jun 2024 ${a("https://linkedin.com/posts/eribertsou_datascience-ai-womenintech-activity-7204860688698122240-yl8u", "(linkedin post)")}`,
  `<b>Datathon contra el Bullying</b>, Argentina, opening talk: <i>"Cómo podemos desarrollar IA con impacto social"</i>, May 2024 ${a("https://youtu.be/fH0C-Ez08Q0", "(youtube recording)")}`,
  `<b>El País</b>, interview article: <i>"La larga marcha de un grupo de voluntarios por lograr un modelo de lenguaje hispano"</i> (in English: <i>The long march of a group of volunteers to create an Hispanic language model</i>), May 2024 ${a("https://elpais.com/tecnologia/2024-05-10/la-larga-marcha-de-un-grupo-de-voluntarios-por-lograr-un-chatgpt-hispano-un-modelo-entrenado-en-espanol-seria-increible.html", "(news article)")}`,
  `<b>Hackathon #Somos600M</b>, opening keynote: <i>"Proyecto #Somos600M: Impulsando la diversidad lingüística en IA"</i> (in English, <i>"Impulsing linguistic diversity in AI"</i>), Mar 2024 ${a("https://youtube.com/watch?v=QCNPVy3QWFs", "(youtube recording)")}`,
  `<b>University of Puerto Rico</b> (UPR), talk at the 1st AI Congress in Puerto Rico: <i>"Código Abierto y Diversidad Lingüística en IA: Impulsando el Futuro del Español desde la Universidad"</i> (in English, <i>Open-Source and Linguistic Diversity in AI: Impulsing the Future of Spanish from University</i>), San Juan (PR), Mar 2024 ${a("https://adistancia.upr.edu/primercongresointeligenciaartificial/", "(event program)")}`,
  `<b>Discovering Tech Stories</b>, podcast interview: <i>"Impulsar la IA inclusiva, responsable y open source"</i> (in English, <i>"How to promote inclusive, responsible, and open-source AI"</i>), Jan 2024 ${a("https://youtube.com/live/XYnd6Cbow7U", "(youtube recording)")}`,
  `<b>European Commission & Panodyssey</b>, round table: <i>"The impact of Generative AI in the European creative industry"</i>, Madrid (ES), Nov 2023 ${a("https://youtube.com/watch?v=D-veeDedXJ8", "(youtube recording)")}`,
  '<b>Google DevFest Cloud Madrid</b>, workshop: <i>"Innovación y responsabilidad en LMs: Cómo cumplir con el EU AI Act, mitigar sesgos y reducir el impacto climático"</i>, Madrid (ES), Nov 2023',
  `<b>IE University</b>, AI event opening keynote: <i>"Responsible AI as a key driver for the future of robotics & Humanities"</i>, Madrid, Oct 2023 ${a("https://linkedin.com/posts/mariagrandury_trustworthyai-responsibleai-aiinspanish-activity-7128788336776744960-bgY0", "(post)")}`,
  '<b>International University of Andalucía</b> (UNIA), 2h30 workshop <i>"Mi modelo ya está entrenado, ¿y ahora qué? Transparencia, explicabilidad, sesgos e impacto ambiental"</i> (in English, <i>"I\'ve trained my language model, now what? AI ethics considerations"</i>) at the Summer School <i>"Inteligencia artificial aplicada: diseño gráfico, comercio electrónico y videojuegos"</i>, Baeza (ES), Aug 2023',
  '<b>IE Center for the Governance of Change & Clibrain</b>, round table: <i>"IA y Español"</i>, featuring Guillermo Escribano, María Grandury, and Alfonso Ureña López on the economic and cultural importance of Spanish in AI, Madrid (ES), May 2023',
  '<b>Women Who Code CONNECT Empower</b>, workshop: <i>"Bias detection and mitigation in Language Models"</i>, Mar 2023',
  '<b>Pangea AI & Languages</b>, podcast interview: <i>"Interview with María Grandury: Artificial Intelligence and NLP"</i>, Dec 2022',
  `<b>Primer foro del PERTE de la Nueva Economía de la Lengua</b>, round table: <i>"El estado del arte de la industria de PLN en nuestro país y fuera"</i>, Valencia (ES), Oct 2022 ${a("https://youtube.com/watch?v=XdHnsBbXbWc", "(youtube recording)")}`,
  '<b>AI The New Sexy</b>, podcast interview: <i>"PLN con SomosNLP y Hugging Face"</i>, Feb 2022',
  `<b>Diversidad en Tecnologías del Lenguaje en España</b> (DiverTLes), round table: <i>"Tecnologías del Lenguaje en la Empresa"</i>, Dec 2021 ${a("https://youtube.com/watch?v=yvPLMc3-KnI", "(youtube recording)")}`,
  `<b>Saturdays.AI</b>, podcast interview: <i>"IAs que hablan español"</i>, Nov 2021 ${a("https://youtube.com/watch?v=O5QkrbOrxd4", "(youtube recording)")}`,
];

// extra/extra_2x2.tex
export const achievements: string[] = [
  "<b>40.000€ COTEC #PIA Under 30 Fund</b>, co-lead, 2024-25",
  "<b>Hugging Face Fellowship</b>, open-source contrib., 2021-",
  "<b>Fatima Fellowship</b>, open research program, 2024-25",
  "<b>15.600€ Spanish Entrepreneurship Fund</b>, 2024-26",
  'Interviewed by Spain\'s #1 newspaper "El País", 2024-',
  'Interviewed by Spain\'s #1 radio "Cadena SER", 2024',
  "Nova, Global Top Talent Network, 2020 -",
  "<b>Honour Mention BS Mathematics Thesis</b>, 9.5/10, 2020",
  "High School, highest distinction, GPA: 9.7/10, 2011-15",
  "Music Conservatory, GPA: 8/10, 1st oboe, 2005-15",
  "Internationales Preisträgerprogramm - IPP, 2014",
  "ESTALMAT Mathematical Talent Stimulation, 2009-13",
];

export const openSource: string[] = [
  "<b>INCLUDE Benchmark</b>, Spain & LATAM Lang. Lead, 2025",
  "<b>LATAM-GPT</b>, latamgpt.org, Researcher, contributing to the data, alignment and evaluation teams, 2024 -",
  "<b>FineWeb2</b>, Spain & LATAM Language Lead, 2025",
  "<b>Data is Better Together</b>, Spain & LATAM Lead, 2024 -",
  "AYA by Cohere For AI, Spanish Ambassador, 2024",
  "The Great Spanish Instructions Dataset, 2024",
  "Spanish NLP Collections, hf.co/somosnlp, 2024 -",
  "<b>Foundation Model Transparency Assessment</b>, 2024",
  "Hugging Face NLP course, Org & Translator, 2023-24",
  "<b>BigScience</b>, Data team, Researcher, 2021-22",
  "BERTIN, Core team, Researcher, 2021-22",
];

export const volunteering: string[] = [
  "<b>EACL</b> Diversity & Inclusion Chair, Aug-Apr 2025",
  "<b>ACL & COLM</b> Birds-of-a-Feather Organizer, 2025",
  "30x speaker, mentor or hackathon judge, 2021 - Today",
  "Reviewer: ARR, Journal Royal Society Open Science",
];

export const languages: string[] = [
  "Spanish: C2, Native",
  "English: C2, TOEFL: 114/120 (Dec 2024)",
  "French: C1, Official School of Languages",
  "German: B1, Official School of Languages",
];

// extra/skills.tex
export const skills: { label: string; text: string }[] = [
  { label: "ML Libraries", text: "TensorFlow 2, Keras, Scikit-Learn, PyTorch, Hugging Face Ecosystem (transformers, datasets, tokenizers, evaluate), pandas, numpy" },
  { label: "Programming Languages", text: "Python, R, Matlab, SQL, VueJS" },
  { label: "Visual Analytics", text: "Tableau, Microsoft Excel VBA, matplotlib, seaborn, ggplot" },
  { label: "MLOps", text: "mlflow, AWS, Azure ML, Docker" },
  { label: "Software Engineering", text: "Git, CI/CD, pytest, MySQL, PostgreSQL" },
];
