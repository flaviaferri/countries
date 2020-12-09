<template>
  <div class="header">
    <div class="container">
      <div class="nav-bar">
        <h3>Where in the world?</h3>
        <div class="nav-bar__link">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
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
  opacity: 0.9;
  padding: 0 15px;
}

a:hover {
  opacity: 1;
}

.header {
  background-color: hsl(209, 23%, 22%);
  position: fixed;
  width: 100%;
  z-index: 1;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
