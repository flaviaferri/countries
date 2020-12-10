<template>
  <div class="container">
    <div class="about-card">
      <h3 class="about-title">About</h3>
      <p class="about-text">
        This site was built with a goal to provide the overview and source of
        flags of the world. <br />

        <br />
        Here you will find information such as flag, population, region,
        capital, border countries, among other information. <br />

        <br />
        We also have a game where you can practice and increase your knowledge
        about flag countries
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.about-card {
  color: white;
  width: 50%;
  background: hsl(209, 23%, 22%);
  -webkit-box-shadow: 5px 5px 17px -7px #000000;
  box-shadow: 5px 5px 17px -7px #000000;
  border-radius: 5px;
  justify-content: space-between;
  margin: 20px;
  padding: 20px;
}

.about-title {
  color: white;
  font-weight: 600;
}

.about-text {
  margin-top: 40px;
  color: white;
}
@media only screen and (max-width: 768px) {
  .about-card {
    width: 100%;
  }
}
</style>
