<template>
  <div class="footer">
    <div class="container">
      <div class="footer__links">
        <NuxtLink class="footer__link" to="/sitemap">Sitemap</NuxtLink>
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
</template>

<script>
import Vue from 'vue'

export default {}
</script>

<style scoped>
a svg {
  padding-right: 5px;
}

.footer {
  background-color: hsl(209, 23%, 22%);
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
}

.footer__link {
  padding: 0 15px;
}

.footer__links {
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
