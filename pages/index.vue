<template>
  <div class="container">
    <div class="search">
      <search></search>
      <filter-region></filter-region>
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
import Search from '~/components/Search.vue'

export default Vue.extend({
  components: { FilterRegion, Search },
  data() {
    return {
      countries: [],
    }
  },

  mounted() {
    axios
      .get('https://restcountries.eu/rest/v2/region/europe')
      .then((response) => (this.countries = response.data))
  },
})
</script>

<style>
.container {
  margin: 50px;
}
.search {
  display: flex;
  justify-content: space-between;
}
.cards {
  margin: 20px -20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
