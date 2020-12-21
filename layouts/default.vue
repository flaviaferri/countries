<template>
  <div class="wrapper">
    <Header />
    <Nuxt class="main" />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'

export default Vue.extend({})
</script>

<style>
.main {
  padding-top: 60px;
  min-height: calc(100vh - 156px);
  margin-bottom: 20px;
}

@media only screen and (max-width: 768px) {
  .main {
    padding-top: 60px;
    min-height: calc(100vh - 138px);
  }
}

@media only screen and (max-width: 640px) {
  .main {
    padding-top: 80px;
    min-height: calc(100vh - 157px);
  }
}
</style>
