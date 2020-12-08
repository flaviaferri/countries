<template>
  <div class="header">
    <div class="navBar">
      <NuxtLink class="navBar__link" to="/">Home</NuxtLink>
      <NuxtLink class="navBar__link" to="/">About</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default {}
</script>

<style>
.navBar {
  background-color: hsl(209, 23%, 22%);
}
.navBar__link {
  font-weight: 500;
  color: white;
  opacity: 90%;
  display: inline-block;
  text-decoration: none;
  padding: 20px;
  position: relative;
}

.navBar__link:hover {
  color: white;
}

.navBar__link:hover:after {
  color: white;
  display: inline-block;
}

/* .navBar__link:after {
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  content: ' ';
  width: 30%;
  height: 2px;
  background: white;
} */

.navBar__link:after {
  content: ' ';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  content: ' ';
  width: 30%;
  height: 2px;
  background: white;
}
</style>
