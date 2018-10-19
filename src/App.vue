<template>
  <div id="app">
    <h2>Popular movies</h2>
    <form @submit.prevent="getMovies">
      <input
        v-model="searchQuery"
        required
      >
      <button
        type="submit"
        class="btn btn-primary"
      >Search</button>
    </form>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link
        to="/search"
      >Search</router-link>
    </nav>
    <router-view />
  </div>

</template>

<script>
// import MoviesPage from './MoviesPage.vue';
// import SearchPage from './SearchPage.vue';
// import searchForm from './SearchForm.vue';

export default {
  name: 'App',
  components: {
    // MoviesPage,
    // SearchPage,
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    getMovies() {},
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
