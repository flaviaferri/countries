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

    <button class="button see-all-button" @click="handleButtonClick">
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
import CountriesApi from '~/services/api/CountriesApi'

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
      return CountriesApi.getCountries(region).then((data) => {
        this.countries = data
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  margin-left: -20px;
  margin-right: -20px;
}

/* Tablet */
@media only screen and (max-width: 768px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Mobile large */
@media only screen and (max-width: 640px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile small */
@media only screen and (max-width: 480px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* Filters */
.filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* Tablet */
@media only screen and (max-width: 768px) {
  .filters {
    flex-direction: row;
  }
}

.filters__selectors {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}

/* Mobile large */
@media only screen and (max-width: 640px) {
  .filters__selectors {
    justify-content: flex-start;
  }
}

.see-all-button {
  width: 200px;
  height: 25px;
  display: flex;
  margin: auto;
}
</style>
