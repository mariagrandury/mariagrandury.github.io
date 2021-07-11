<template>
  <Container class="bg-white dark:bg-gray-900">
    <NavBar class="container mx-auto" />
  </Container>
  <Container>
    <h1 class="flex mb-12 gap-2 items-center">
      <div class="font-semibold tracking-tight text-4xl">My Story</div>
      <i-fluent-earth-24-regular style="font-size: 2rem" />
      <i-fluent-rocket-24-regular style="font-size: 2rem" />
    </h1>
    <div class="grid gap-x-8 gap-y-12 md:grid-cols-[auto,1fr]">
      <CVItem
        location="neurocat GmbH"
        title="I'm starting a new adventure"
        timeline="2021 - present"
      >
        I've relocated to Berlin and joined
        <a
          target="_blank"
          title="Company Website"
          href="https://www.neurocat.ai/"
        >neurocat</a>
        as an ML Research Engineer!
        I'm also a core member of
        <a
          target="_blank"
          title="Company Website"
          href="https://www.womeninai.co/"
        >Women in AI & Robotics</a>
        and I volunteer for
        <a
          target="_blank"
          title="Company Website"
          href="https://www.vizforsocialgood.com/"
        >#VizForSocialGood.</a>
        Moreover, I've recently founded the community
        <a
          target="_blank"
          title="LinkedIn Page"
          href="https://www.linkedin.com/company/nlp-en-es"
        >NLP en Español 🤗!</a>
      </CVItem>
      <CVItem location="REDYTEL" title="It was a crazy year" timeline="2020">
        I wrote my 2 theses and graduated! I developed a chatbot for
        <a
          target="_blank"
          title="Check the Chatbot"
          href="https://www.redytel.info"
        >REDYTEL,</a>
        another that answers questions about
        <a
          target="_blank"
          title="Check the Chatbot"
          href="https://d3g60fts6ncstu.cloudfront.net/"
        >COVID-19,</a>
        learned how to use
        <a
          target="_blank"
          title="Tableau Public Profile"
          href="https://public.tableau.com/profile/maria.grandury#!/"
        >Tableau,</a>
        and passed the
        <a
          target="_blank"
          title="Certificate"
          href="https://www.coursera.org/account/accomplishments/professional-cert/6UPJWYBM8DSH"
        >TensorFlow Developer Certification.</a>
        At the end of the year I started contributing to
        <a
          target="_blank"
          title="Check one of my Contributions"
          href="https://huggingface.co/datasets/spanish_billion_words"
        >Hugging Face</a>
        and was selected to join
        <a
          target="_blank"
          title="Membership Certificate"
          href="https://github.com/mariagrandury/mariagrandury/blob/main/Certificates/Award%20-%20Nova%20Talent%20Membership%20Certificate.pdf"
        >Nova Talent!</a>
      </CVItem>
      <CVItem location="Stelliant" title="I broke into AI" timeline="2019">
        I took the DeepLearning.AI
        <a
          target="_blank"
          title="Certificate"
          href="https://www.coursera.org/account/accomplishments/specialization/XJYYZ8PCKKBP"
        >DL Specialization</a>
        as a recommendation from a teacher I had during my
        <a
          target="_blank"
          title="Magistère de Physique Fondamentale - Program Website"
          href="http://www.magistere-physique.universite-paris-saclay.fr/spip.php?article49&lang=fr"
        >exchange year in Paris.</a>
        I got an internship as a Software Engineer at
        <a
          target="_blank"
          title="Company Website"
          href="https://www.stelliant.com/"
        >Stelliant,</a>
        where I developed my first chatbot.
      </CVItem>
      <CVItem location="SADEI" title="I was really into Stats" timeline="2018">
        It was my 3rd year learning statistics and
        <br />I got an internship as a Data Analyst at
        <a
          target="_blank"
          title="Company Website"
          href="http://www.sadei.es/es/portal.do"
        >SADEI,</a>
        the company responsible for compiling the statistics of the north of Spain.
      </CVItem>
      <CVItem
        location="University of Oviedo"
        title="I started my Math studies"
        timeline="2015 - 2018"
      >
        I graduated High School as an honor student and started a
        <a
          target="_blank"
          title="Courses"
          href="assets/img/story/double-degree.pdf"
        >Double Degree</a>
        in Mathematics and Physics at the University of Oviedo.
      </CVItem>
      <CVItem
        location="Spanish Real Academy of Science"
        title="I officially became a geek"
        timeline="2011 - 2015"
      >
        I was selected for a 4-years program of the Spanish Real Academy of Science that
        stimulates the mathematical talent of
        <br />young students,
        <a
          target="_blank"
          title="Project Website"
          href="https://www.estalmat.org/estalmat/"
        >ESTALMAT.</a>
      </CVItem>
    </div>
  </Container>
</template>
