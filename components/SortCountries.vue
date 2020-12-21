<template>
  <div class="sort-wrapper">
    <div class="sort">
      <v-select
        class="custom"
        :clearable="false"
        v-model="selected"
        @input="onSortChange"
        :options="options"
        placeholder="Sort by"
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
      options: [
        'Ascending Name',
        'Descending Name',
        'Biggest Population',
        'Smallest Population',
      ],
    }
  },

  methods: {
    onSortChange(value) {
      this.$emit('changed', value)
    },
  },
})
</script>

<style>
.sort-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.title {
  color: white;
  margin: 0;
  font-weight: 350;
}

.sort {
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
