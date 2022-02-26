

<template>
  <div class="min-h-screen grid grid-rows-[auto,1fr]">
    <Container class="bg-[#fffd] dark:bg-[#0002]">
      <NavBar />
    </Container>
    <Container
      class="bg-accent-500 dark:bg-gray-800"
      style="background-image: url('https://mariagrandury.github.io/assets/map-image.png');
      background-repeat: no-repeat; background-size: contain"
    >
      <CardContact />
    </Container>
  </div>
</template>
