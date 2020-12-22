<template>
  <div class="header">
    <div class="container">
      <div class="nav-bar">
        <h3
          v-bind:class="[isMenuOpen ? 'nav-bar__title open' : 'nav-bar__title']"
          @click="goToHome()"
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
          v-bind:class="[isMenuOpen ? 'nav-bar__links open' : 'nav-bar__links']"
        >
          <NuxtLink class="nav-bar__link" to="/">Home</NuxtLink>
          <NuxtLink class="nav-bar__link" to="/about">About</NuxtLink>
          <NuxtLink class="nav-bar__link" to="/game">Game</NuxtLink>
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

    goToHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
/* Header  */
.header {
  background-color: hsl(209, 23%, 22%);
  position: fixed;
  width: 100%;
  z-index: 2;
}

/* Nav Title */
.nav-bar__title {
  cursor: pointer;
}

@media only screen and (max-width: 640px) {
  .nav-bar__title.open {
    display: none;
  }
}

/* Nav Bar */
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media only screen and (max-width: 640px) {
  .nav-bar {
    color: white;
  }
}

/* Links */
.nav-bar__link {
  padding: 0 15px;
}

@media only screen and (max-width: 640px) {
  .nav-bar__links {
    display: none;
  }

  .nav-bar__links.open {
    display: flex;
    align-items: flex-end;
    padding: 20px;
  }
}

/* Mobile icons */
.icon-bar {
  display: none;
  cursor: pointer;
}

.icon-close {
  display: none;
}
@media only screen and (max-width: 640px) {
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

  .icon-bar.open {
    display: none;
  }
}
</style>
