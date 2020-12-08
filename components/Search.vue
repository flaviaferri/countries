<template>
  <div>
    <input type="text" placeholder="Search for a Country" class="filter" />

    <img src="~/assets/images/search-outline.svg" alt="" class="icontSearch" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default {}
</script>

<style>
.input {
  background-color: hsl(209, 23%, 22%);
}
.filter {
  width: 200px;
}

.icontSearch {
  width: 17px;
}
</style>
