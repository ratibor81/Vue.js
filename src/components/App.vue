<template>
  <div id="app">
    <h2>Popular movies</h2>
    <search-form />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link
        to="/search"
      >Search</router-link>
      <router-link to="/watchlist">Watchlist</router-link>
    </nav>
    <router-view />
  </div>

</template>

<script>
import SearchForm from './SearchForm.vue';

export default {
  name: 'App',
  components: {
    SearchForm,
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
