<template>
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
</template>
<script>
import { searchMovie } from './api/movies-api';

export default {
  name: 'SearchForm',

  data() {
    return {
      searchQuery: '',
      movies: [],
    };
  },

  methods: {
    getMovies() {
      searchMovie(this.searchQuery).then((movies) => {
        this.movies = movies;
      });
      this.$router.push('search');
    },
  },
};
</script>
