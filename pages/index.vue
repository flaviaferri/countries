<template>
  <div class="container">
    <div class="country">
      <img src="~/assets/images/brazilFlag.jpg" alt="" />
      <h3 class="name">{{ name }}</h3>
      <p class="information population"><b>Population:</b> {{ population }}</p>
      <p class="information region"><b>Region:</b> {{ region }}</p>
      <p class="information capital"><b>Capital:</b> {{ capital }}</p>
    </div>

    <select name="region" id="region">
      Filter by Region
      <ul>
        <li>Africa</li>
        <li>America</li>
        <li>Asia</li>
        <li>Europe</li>
        <li>Oceania</li>
      </ul>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      name: 'Brazil',
      population: '206.135.893',
      region: 'Americas',
      capital: 'Brasilia',
    }
  },
})
</script>

<style>
.container {
  margin: 40px;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.country {
  background: white;
  -webkit-box-shadow: 2px 10px 23px -6px rgba(160, 160, 160, 0.45);
  box-shadow: 2px 10px 23px -6px rgba(160, 160, 160, 0.45);
}

.name {
  margin: 15px;
}

.information {
  margin-left: 15px;
  line-height: 1.7;
  font-size: 13px;
  font-weight: 300;
}

.capital {
  margin-bottom: 40px;
}
</style>
