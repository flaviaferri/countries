<template>
  <div class="flagGame">
    <game
      :flag="country.flag"
      :name="country.name"
      :name2="country2.name"
      :name3="country3.name"
    ></game>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Game from '~/components/Game.vue'

export default Vue.extend({
  data() {
    return {
      country: [],
      country2: [],
      country3: [],
    }
  },
  methods: {
    getCountry() {
      return axios
        .get(`https://restcountries.eu/rest/v2/all`)
        .then((response) => {
          this.country =
            response.data[Math.floor(Math.random() * response.data.length)]
          this.country2 =
            response.data[Math.floor(Math.random() * response.data.length)]
          this.country3 =
            response.data[Math.floor(Math.random() * response.data.length)]
        })
    },

    /*     const rightAnswer = 'name',

    generateSortList() {
      const names = ['name', 'name2', 'name3']
      return */
  },

  mounted() {
    this.getCountry()
  },
})
</script>

<style></style>
