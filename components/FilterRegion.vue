<template>
  <div class="filter-wrapper">
    <div class="filter">
      <v-select
        class="custom"
        :clearable="false"
        v-model="selected"
        @input="onFilterChange"
        :options="options"
        placeholder="Filter by Region"
      ></v-select>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import 'vue-select/dist/vue-select.css'
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)

export default Vue.extend({
  props: ['default'],

  data() {
    return {
      selected: this.default,
      options: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
    }
  },

  methods: {
    onFilterChange(value) {
      this.$emit('changed', value)
    },
  },
})
</script>

<style>
.filter-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
}

/* Mobile large */
@media only screen and (max-width: 640px) {
  .filter-wrapper {
    padding: 10px 0;
  }
}

.title {
  color: white;
  margin: 0;
  font-weight: 350;
}

.filter {
  color: hsl(0, 0%, 100%);
  background-color: hsl(209, 23%, 22%);
  width: 200px;
  display: flex;
  align-self: flex-end;
}

input {
  color: white;
}

.custom {
  width: 100%;
  color: white;
}

.custom .vs__selected,
.custom .vs__search,
.custom .vc.search {
  color: white;
}

.custom .vs__search::placeholder,
.custom .vs__dropdown-toggle,
.custom .vs__dropdown-menu {
  color: white;
  background-color: hsl(209, 23%, 22%);
}

.custom .vs__dropdown-menu * {
  color: white;
}

.custom .vs__clear,
.custom .vs__open-indicator {
  fill: white;
}
</style>
