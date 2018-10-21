<template>
  <div id="app">
    <h2>Popular movies</h2>
    <search-form />
    <navigation />
  </div>
</template>

<script>
import SearchForm from './SearchForm.vue';
import Navigation from './Navigation.vue';

export default {
  name: 'App',
  components: {
    SearchForm,
    Navigation,
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
