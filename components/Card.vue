<template>
  <div class="country" id="country" v-if="index < amountOfCards">
    <NuxtLink
      :to="{ path: 'details', query: { id: code } }"
      class="card__information"
    >
      <div class="country__image" :style="flagImage"></div>
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
.country {
  color: white;
  width: 20%;
  background: hsl(209, 23%, 22%);
  -webkit-box-shadow: 5px 5px 17px -7px #000000;
  box-shadow: 5px 5px 17px -7px #000000;
  border-radius: 5px;
  justify-content: space-between;
  margin: 20px;
  transition: all 0.05s ease-in-out;
}

.country__image {
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

.country:hover {
  transform: translateY(-8px);
}

.card__information {
  color: white;
  text-decoration: none;
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
  .country {
    width: 40%;
    margin: 25px;
  }
}

@media only screen and (max-width: 640px) {
  .country {
    margin: 25px;
    width: 100%;
  }
}
</style>
