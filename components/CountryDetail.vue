<template>
  <div class="countryDetail" id="countryDetail">
    <img :src="flag" alt="" />
    <h3 class="name">{{ name }}</h3>
    <p class="information"><b>Native Name:</b> {{ nativeName }}</p>
    <p class="information"><b>Population:</b> {{ population }}</p>
    <p class="information"><b>Region:</b> {{ region }}</p>
    <p class="information"><b>Sub Region:</b> {{ subregion }}</p>
    <p class="information"><b>Capital:</b> {{ capital }}</p>
    <p class="information">
      <b>Top Level Domain:</b>
      <span v-for="domain in topLevelDomain" :key="domain">
        {{ domain }}
      </span>
    </p>
    <p
      v-for="currencie in currencies"
      :key="currencie.name"
      class="information"
    >
      <b>Currencies:</b> {{ currencie.name }}
    </p>
    <p class="information">
      <b>Languages:</b>
      <span v-for="language in languages" :key="language.name">
        {{ language.name }}
      </span>
    </p>
    <p class="information">
      <b>Border Countries:</b>
      <button v-for="border in borders" :key="border">
        <NuxtLink :to="{ path: 'details', query: { id: border } }">
          {{ border }}
        </NuxtLink>
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  props: [
    'flag',
    'name',
    'nativeName',
    'population',
    'region',
    'subregion',
    'capital',
    'topLevelDomain',
    'code',
    'currencies',
    'languages',
    'borders',
  ],
  //   mounted() {
  //     axios
  //       .get(`https://restcountries.eu/rest/v2/alpha/${this.$route.query.id}`)
  //       .then((response) => (this.borders = response.data))
  //   },
})
</script>

<style></style>
