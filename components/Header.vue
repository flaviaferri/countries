<template>
  <div class="header">
    <div class="container">
      <div class="nav-bar">
        <h3
          v-bind:class="[isMenuOpen ? 'nav-bar__title open' : 'nav-bar__title']"
        >
          Where in the world?
        </h3>
        <font-awesome-icon
          class="icon-bar"
          v-bind:class="[isMenuOpen ? 'icon-bar open' : 'icon-bar']"
          :icon="['fas', 'bars']"
          v-on:click="toggleMenu(!isMenuOpen)"
        />
        <font-awesome-icon
          v-bind:class="[isMenuOpen ? 'icon-close open' : 'icon-close']"
          :icon="['fas', 'times']"
          v-on:click="toggleMenu(!isMenuOpen)"
        />

        <div
          v-bind:class="[isMenuOpen ? 'nav-bar__link open' : 'nav-bar__link']"
        >
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/game">Game</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },

  methods: {
    toggleMenu(state) {
      this.isMenuOpen = state
    },
  },
}
</script>

<style scoped>
h3 {
  color: white;
}
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

.icon-bar {
  display: none;
}
.icon-close {
  display: none;
}

@media only screen and (max-width: 640px) {
  .nav-bar {
    color: white;
  }
  .nav-bar__link {
    display: none;
  }
  .icon-bar {
    display: flex;
    align-items: flex-end;
  }
  .icon-close {
    display: none;
  }

  .icon-close.open {
    display: flex;
    align-items: flex-start;
  }
  .nav-bar__link.open {
    display: flex;
    align-items: flex-end;
    padding: 20px;
  }

  .icon-bar.open {
    display: none;
  }

  .nav-bar__title.open {
    display: none;
  }
}
</style>
