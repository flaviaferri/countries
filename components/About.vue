<template>
  <div class="container">
    <div class="about-card shadow-default">
      <h3 class="about-title">About</h3>
      <p class="about-text">
        This site was built with a goal to provide an overview and source of
        flags of the world.
      </p>

      <p class="about-text">
        Here you will find information such as flag, population, region,
        capital, border countries, among other information.
      </p>

      <p class="about-text">
        We also have a game where you can practice and increase your knowledge
        about flag countries.
      </p>

      <p class="about-text">
        The informations are being fetched from a open source
        <a href="https://restcountries.eu/">API Rest Coutries</a>.
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Container */
.container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

/* Link style */
a {
  text-decoration: underline;
}

/* About card */
.about-card {
  width: 50%;
  background: hsl(209, 23%, 22%);
  border-radius: 5px;
  justify-content: space-between;
  margin: 20px;
  padding: 20px;
}

@media only screen and (max-width: 768px) {
  .about-card {
    width: 100%;
  }
}

.about-title {
  font-weight: 600;
}

.about-text {
  margin-top: 40px;
}
</style>
