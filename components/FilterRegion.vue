<template>
  <div class="filter">
    <v-select
      :options="options"
      placeholder="Filter by Region"
      class="filter"
    ></v-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'vue-select/dist/vue-select.css'
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)

export default {
  data() {
    return {
      options: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
    }
  },
}
</script>

<style>
.filter {
  color: hsl(0, 0%, 100%);
}
</style>
