<template>
  <div>
    <Header />
    <Nuxt class="main" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'

export default Vue.extend({})
</script>

<style>
.main {
  padding-top: 60px;
  min-height: 80vh;
}
</style>
