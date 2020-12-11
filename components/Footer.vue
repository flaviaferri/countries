<template>
  <div>
    <div class="footer">
      <div class="container">
        <div class="footer__link">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/game">Game</NuxtLink>
        </div>
        <div class="footer__icons">
          <a href="https://www.linkedin.com/in/flavia-ferri/"
            ><font-awesome-icon :icon="['fab', 'linkedin']" />Linkedin</a
          >
          <a href="https://github.com/flaviaferri"
            ><font-awesome-icon :icon="['fab', 'github']" /> GitHub</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
  opacity: 0.9;
  padding: 0 15px;
}

a svg {
  padding-right: 5px;
}

.footer {
  background-color: hsl(209, 23%, 22%);
  width: 100%;
  display: flex;
  color: white;
  text-align: center;
  margin-top: 20px;
}

.footer__link {
  padding: 10px 0;
}

.footer__icons {
  padding: 10px 0;
}

.footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
