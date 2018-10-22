<template>
  <div id="app">
    <h2>Popular movies</h2>
    <search-form />
    <nav-links />
    <go-top-button />
  </div>
</template>

<script>
import SearchForm from './SearchForm.vue';
import NavLinks from './Navigation.vue';
import GoTopButton from './GoTopButton.vue';

export default {
  name: 'App',
  components: {
    SearchForm,
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
  margin-top: 10px;
  padding: 0 15px;
}
</style>
