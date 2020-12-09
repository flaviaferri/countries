<template>
  <div class="flag">
    Whose flag is it?
    <img v-bind:src="flag" alt="" class="flag" />
    <button>A: {{ name }}</button>
    <button>B: {{ name2 }}</button>
    <button>C: {{ name3 }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  props: ['flag', 'name', 'name2', 'name3'],
  methods: {
    generateSortList() {
      const names = ['name', 'name2', 'name3']
      return
    },
  },
})
</script>

<style>
div {
  color: white;
}
</style>
