<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="40"
  >
    <error-handler
      v-if="error"
      :try-again="reload"
    />
    <movie-list
      v-if="!error"
      :movies="movies"
    />
  </div>
</template>


<script>
import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll';
import { fetchMovies } from '../api/movies-api';
import MovieList from '../components/MovieList.vue';
import ErrorHandler from '../components/ErrorHandler.vue';

Vue.use(infiniteScroll);

export default {
  name: 'MoviesPage',
  components: {
    MovieList,
    ErrorHandler,
  },
  data() {
    return {
      movies: [],
      page: 1,
      error: null,
    };
  },
  methods: {
    loadMore() {
      fetchMovies(this.page)
        .then((movies) => {
          this.movies = this.movies.concat(movies);
        })
        .catch((error) => {
          this.error = error;
        });
      this.page += 1;
    },
    reload() {
      this.$router.go(this.$router.currentRoute);
    },
  },
};
</script>
