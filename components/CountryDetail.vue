<template>
  <div class="countryDetail" id="countryDetail">
    <a class="button back" @click="$router.go(-1)"> Back</a>
    <div class="country-content">
      <div class="flag-wrapper">
        <img :src="flag" alt="name" class="flag" />
      </div>

      <div class="country-info">
        <h2 class="country-info__name">{{ name }}</h2>

        <div class="country-information">
          <div class="country-information__column">
            <p><b>Native Name:</b> {{ nativeName }}</p>
            <p><b>Population:</b> {{ population | numFormat('0,0') }}</p>
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
        <div class="information__border" v-if="borders && borders.length > 0">
          <b>Border Countries:</b>
          <div class="border-buttons">
            <NuxtLink
              v-for="border in borders"
              :key="border"
              :to="{ path: 'details', query: { id: border } }"
            >
              <div class="button border-country">
                {{ border }}
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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

.back {
  width: 90px;
  height: 25px;
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
  color: white;
}

.country-information__column {
  justify-content: space-between;
  padding-right: 40px;
}

.information__border {
  color: white;
  justify-content: end;
}

.border-country {
  margin: 5px 10px 5px 0px;
  padding: 0 17px;
  height: 25px;
}

@media only screen and (max-width: 768px) {
  .country-info__name {
    margin-top: 15px;
  }

  .countryDetail {
    width: 100%;
  }

  .country-info {
    padding-left: 0;
  }

  .country-content {
    display: flex;
    flex-direction: column;
  }

  .country-information__column {
    margin-right: 60px;
  }

  .flag {
    width: 100%;
    max-height: 100%;
  }
}

@media only screen and (max-width: 640px) {
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
