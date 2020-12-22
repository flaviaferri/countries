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

<script>
import Vue from 'vue'
import axios from 'axios'
import Game from '~/components/Game.vue'
import CountriesApi from '~/services/api/CountriesApi'

export default Vue.extend({
  data() {
    return {
      country: [],
      country2: [],
      country3: [],
    }
  },
  methods: {
    getAllCountries() {
      return CountriesApi.getAllCountries().then((data) => {
        this.country = data[Math.floor(Math.random() * data.length)]
        this.country2 = data[Math.floor(Math.random() * data.length)]
        this.country3 = data[Math.floor(Math.random() * data.length)]
      })
    },
  },

  mounted() {
    this.getAllCountries()
  },
})
</script>
