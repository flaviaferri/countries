<template>
  <div class="header">
    <div class="container">
      <div class="navBar">
        <h3>Where in the world?</h3>
        <div class="navBar__link">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/">About</NuxtLink>
          <NuxtLink to="/game">Game</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default {}
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: 500;
  color: white;
  opacity: 90%;
  padding: 0 15px;
}

.header {
  background-color: hsl(209, 23%, 22%);
}

.navBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
