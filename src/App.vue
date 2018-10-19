<template>
  <div id="app">
    <h2>Popular movies</h2>

    <form @submit.prevent="getMovies">
      <input v-model="searchQuery">
      <button
        type="submit"
        class="btn btn-primary"
      >Поиск фильмов</button>
    </form>

    <movies-page />
  </div>

</template>

<script>
import MoviesPage from './MoviesPage.vue';
// import searchForm from './SearchForm.vue';
import { searchMovie } from './api/movies-api';

export default {
  name: 'App',
  components: {
    'movies-page': MoviesPage,
    // 'search-form': searchForm,
  },
  data() {
    return {
      searchQuery: '',
    };
  },

  methods: {
    getMovies() {
      searchMovie(this.searchQuery).then((movies) => {
        this.movies = movies;
      });
    },
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
