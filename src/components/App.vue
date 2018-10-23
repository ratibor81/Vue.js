<template>
  <div id="app">
    <nav-links />
    <router-view />
    <div class="hidden" />
    <go-top-button />
  </div>
</template>

<script>
import NavLinks from './Navigation.vue';
import GoTopButton from './GoTopButton.vue';

export default {
  name: 'App',
  components: {
    NavLinks,
    GoTopButton,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Roboto', sans-serif;
}
#app {
  text-align: center;
  padding: 0 15px;
}
.top {
  padding-top: 65px;
}
.hidden {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  background-color: #fff;
  z-index: 999;
}
</style>
