<template>
  <div class="container">
    <div>
      <filter-region @changed="getCountries"></filter-region>
    </div>

    <div class="cards">
      <card
        v-for="country in countries"
        :key="country.alpha2Code"
        :flag="country.flag"
        :name="country.name"
        :code="country.alpha2Code"
        :population="country.population"
        :region="country.region"
        :capital="country.capital"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Card from '~/components/Card.vue'
import FilterRegion from '~/components/FilterRegion.vue'

export default Vue.extend({
  components: { FilterRegion },
  data() {
    return {
      countries: [],
    }
  },
  methods: {
    getCountries(region) {
      return axios
        .get(`https://restcountries.eu/rest/v2/region/${region}`)
        .then((response) => (this.countries = response.data))
    },
  },

  mounted() {
    this.getCountries('Europe')
  },
})
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -20px;
  margin-right: -20px;
}
</style>
