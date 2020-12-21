<template>
  <div class="card shadow-default" id="card" v-if="index < amountOfCards">
    <NuxtLink
      :to="{ path: 'details', query: { id: code } }"
      class="card__information"
    >
      <div class="card__image" :style="flagImage"></div>
      <h3 class="name">{{ name }}</h3>
      <p class="information population">
        <b>Population:</b> {{ population | numFormat('0,0') }}
      </p>
      <p class="information region"><b>Region:</b> {{ region }}</p>
      <p class="information capital"><b>Capital:</b> {{ capital }}</p>
    </NuxtLink>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: [
    'flag',
    'name',
    'population',
    'region',
    'capital',
    'code',
    'index',
    'amountOfCards',
  ],

  computed: {
    flagImage() {
      return {
        'background-image': `url(${this.flag})`,
      }
    },
  },
})
</script>

<style>
.card {
  color: white;
  background: hsl(209, 23%, 22%);
  border-radius: 5px;
  justify-content: space-between;
  margin: 20px;
  transition: all 0.05s ease-in-out;
}

.card__image {
  width: 100%;
  height: 140px;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  justify-content: space-between;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.card:hover {
  transform: translateY(-8px);
}

.name {
  margin: 15px;
}

.information {
  margin-left: 15px;
  line-height: 1.2;
  font-size: 13px;
  font-weight: 300;
}

.information b {
  font-weight: 700;
}

.capital {
  margin-bottom: 40px;
}

@media only screen and (max-width: 768px) {
  .card {
    margin: 25px;
  }
}

@media only screen and (max-width: 640px) {
  .card {
    margin: 25px;
  }
}
</style>
