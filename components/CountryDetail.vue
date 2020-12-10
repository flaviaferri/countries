<template>
  <div class="countryDetail" id="countryDetail">
    <a class="back-button" @click="$router.go(-1)"> Back</a>

    <div class="country-content">
      <div class="flag-wrapper">
        <img :src="flag" alt="name" class="flag" />
      </div>

      <div class="country-info">
        <h2 class="country-info__name">{{ name }}</h2>

        <div class="country-information">
          <div class="country-information__column">
            <p><b>Native Name:</b> {{ nativeName }}</p>
            <p><b>Population:</b> {{ population }}</p>
            <p><b>Region:</b> {{ region }}</p>
            <p><b>Sub Region:</b> {{ subregion }}</p>
            <p><b>Capital:</b> {{ capital }}</p>
          </div>

          <div class="country-information__column">
            <p>
              <b>Top Level Domain:</b>
              <span v-for="domain in topLevelDomain" :key="domain">
                {{ domain }}
              </span>
            </p>
            <p v-for="currencie in currencies" :key="currencie.name">
              <b>Currencies:</b> {{ currencie.name }}
            </p>
            <p>
              <b>Languages:</b>
              <span v-for="language in languages" :key="language.name">
                {{ language.name }}
              </span>
            </p>
          </div>
        </div>
        <p class="information__border">
          <b>Border Countries:</b>
          <div class="border-buttons">
          <NuxtLink
            class="border-button-country"
            v-for="border in borders"
            :key="border"
            :to="{ path: 'details', query: { id: border } }"
          >
            {{ border }}
          </NuxtLink>
          </div>

        </p>
      </div>
    </div>
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
})
</script>

<style scoped>
.country-content {
  display: flex;
  flex-direction: row;
}

.country-info {
  padding-left: 40px;
}

.back-button {
  width: 90px;
  height: 25px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  outline: none;
  background-color: hsl(209, 23%, 22%);
  border-radius: 2px;
  border-style: none;
  -webkit-box-shadow: 5px 10px 20px -4px rgba(0, 0, 0, 0.33);
  box-shadow: 5px 10px 20px -4px rgba(0, 0, 0, 0.33);
}

a {
  color: white;
  opacity: 80%;
  cursor: pointer;
  text-decoration: none;
}

b {
  font-weight: 600;
}

.flag {
  width: 440px;
  max-height: 300px;
}

.country-information {
  display: inline-flex;
  color: white;
  font-size: small;
}

.country-info__name {
  margin-top: 0;
}

.country-information__column {
  justify-content: space-between;
  padding-right: 40px;
}

.information__border {
  color: white;
  justify-content: end;
}
.border-button-country {
  margin: 5px 10px 5px 0px;
  background-color: hsl(209, 23%, 22%);
  box-shadow: 5px 10px 20px -4px rgba(0, 0, 0, 0.33);
  border-style: solid 2px;
  padding: 0 17px;
  height: 25px;
  display: inline-flex;
  align-items: center;
}

@media only screen and (max-width: 800px) {
   .country-info__name {
    margin-top: 15px;
  }

    .countryDetail {
    width: 100%;
  
  }

  .country-info{
    padding-left: 0;
  }

  .country-content {
    display: flex;
    flex-direction: column;
  }

  .country-information__column{
    margin-right: 60px;
  }   

  .flag {
    width: 100%;
    max-height: 100%;
  }
}

@media only screen and (max-width: 375px) {

  .country-info__name {
    margin-top: 15px;
  }

  .countryDetail {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .country-content {
    display: flex;
    flex-direction: column;
  }

  .country-information {
    display: block;
  }

  .country-info {
    padding: 0;
    flex-direction: row;
  }

  .country-information__column {
    margin-top: 30px;
  }

  .flag {
    width: 100%;
  }
  .information__border {
    display: flex;
    flex-direction: column;
  }
  .border-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

}
</style>
