<template>
  <div class="container">
    <ul>
      <li v-for="link in links()" :key="link.name">
        <NuxtLink :to="link.path" class="sitemap">
          <span v-if="link.name === 'index'">Home</span>
          <span v-else>{{ link.name }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  props: [],
  methods: {
    links() {
      return this.$router.options.routes.filter((route) => {
        if (route.name !== 'sitemap' && route.name !== 'details') {
          return true
        }
      })
    },
  },
})
</script>

<style>
li {
  color: white;
}
.sitemap {
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  display: block;
  padding: 20px 0 0 20px;
}
</style>
