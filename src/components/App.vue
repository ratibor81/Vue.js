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
  created() {
    console.log(JSON.parse(localStorage.getItem('list')));
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
