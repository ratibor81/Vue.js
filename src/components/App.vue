<template>
  <div id="app">
    <nav-links />
    <router-view />
    <!-- <h2>Popular movies</h2> -->
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
  color: #2c3e50;
  padding: 0 15px;
}
</style>
