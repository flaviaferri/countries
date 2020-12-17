<template>
  <div class="container">
    <div class="filters">
      <h2 class="title">{{ selectedRegion }} countries</h2>
      <div class="filters__selectors">
        <sort-countries
          :default="sortBy"
          @changed="setFilterMethod"
        ></sort-countries>
        <filter-region
          :default="selectedRegion"
          @changed="setSelectedRegion"
        ></filter-region>
      </div>
    </div>

    <div class="cards">
      <card
        v-for="(country, index) in listOfCountries"
        :key="country.alpha2Code"
        :flag="country.flag"
        :name="country.name"
        :code="country.alpha2Code"
        :population="country.population"
        :region="country.region"
        :capital="country.capital"
        :index="index"
        :amountOfCards="amountOfCards"
      />
    </div>

    <button class="seeAllButton" @click="handleButtonClick">
      <span v-if="amountOfCards === countries.length">Show less countries</span>
      <span v-else>See all countries</span>
    </button>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Card from '~/components/Card.vue'
import FilterRegion from '~/components/FilterRegion.vue'
import SortCountries from '~/components/SortCountries.vue'

const CARDS_TO_BE_SHOW = 10

export default Vue.extend({
  components: { FilterRegion, SortCountries },
  data() {
    return {
      countries: [],
      amountOfCards: CARDS_TO_BE_SHOW,
      sortBy: 'Ascending Name',
      selectedRegion: 'Europe',
    }
  },

  computed: {
    listOfCountries: function () {
      return this.sortList()
    },
  },

  methods: {
    setAmountOfCards(amountOfCards) {
      this.amountOfCards = amountOfCards
    },

    setFilterMethod(sortBy) {
      this.sortBy = sortBy
    },

    setSelectedRegion(region) {
      this.selectedRegion = region
      this.getCountries(region)
    },

    sortList() {
      if (this.sortBy === 'Biggest Population') {
        return this.countries.sort(this.sortByBiggestPopulation)
      }

      if (this.sortBy === 'Smallest Population') {
        return this.countries.sort(this.sortBySmallestPopulation)
      }

      if (this.sortBy === 'Descending Name') {
        return this.countries.sort(this.sortByDescName)
      }

      return this.countries.sort(this.sortByAscName)
    },

    sortByBiggestPopulation(countryA, countryB) {
      if (countryA.population > countryB.population) return -1
      if (countryB.population > countryA.population) return 1

      return 0
    },

    sortBySmallestPopulation(countryA, countryB) {
      if (countryA.population > countryB.population) return 1
      if (countryB.population > countryA.population) return -1

      return 0
    },

    sortByDescName(countryA, countryB) {
      return countryB.name.localeCompare(countryA.name)
    },

    sortByAscName(countryA, countryB) {
      return countryA.name.localeCompare(countryB.name)
    },

    handleButtonClick() {
      if (this.amountOfCards !== this.countries.length) {
        this.setAmountOfCards(this.countries.length)
        return
      }

      return this.setAmountOfCards(CARDS_TO_BE_SHOW)
    },
    getCountries(region) {
      return axios
        .get(`https://restcountries.eu/rest/v2/region/${region}`)
        .then((response) => {
          this.countries = response.data
          this.setAmountOfCards(CARDS_TO_BE_SHOW)
        })
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
.filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filters__selectors {
  display: flex;
  justify-content: flex-end;
}

.seeAllButton {
  color: white;
  text-decoration: none;
  width: 25%;
  height: 25px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  outline: none;
  background-color: hsl(209, 23%, 22%);
  border-radius: 2px;
  -webkit-box-shadow: 5px 10px 20px -4px rgba(0, 0, 0, 0.33);
  box-shadow: 5px 10px 20px -4px rgba(0, 0, 0, 0.33);
}
</style>
