<template>
  <div class="container">
    <country-detail
      :flag="countryDetail.flag"
      :name="countryDetail.name"
      :nativeName="countryDetail.nativeName"
      :code="countryDetail.alpha2Code"
      :population="countryDetail.population"
      :region="countryDetail.region"
      :subregion="countryDetail.subregion"
      :capital="countryDetail.capital"
      :topLevelDomain="countryDetail.topLevelDomain"
      :currencies="countryDetail.currencies"
      :languages="countryDetail.languages"
      :borders="countryDetail.borders"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import CountryDetail from '~/components/CountryDetail.vue'
export default Vue.extend({
  components: { CountryDetail },

  data() {
    return {
      countryDetail: {},
    }
  },
  methods: {
    getCountry() {
      return axios
        .get(`https://restcountries.eu/rest/v2/alpha/${this.$route.query.id}`)
        .then((response) => (this.countryDetail = response.data))
    },
  },
  mounted() {
    this.getCountry()
  },
  watch: {
    '$route.params': function () {
      this.getCountry()
    },
  },
})
</script>

<style></style>
