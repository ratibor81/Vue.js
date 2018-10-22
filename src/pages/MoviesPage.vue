<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="50"
  >
    <movie-list :movies="movies" />
  </div>
</template>


<script>
import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll';
import { fetchMovies } from '../api/movies-api';
import MovieList from '../components/MovieList.vue';

Vue.use(infiniteScroll);

export default {
  name: 'MoviesPage',
  components: {
    MovieList,
  },
  data() {
    return {
      movies: [],
      page: 1,
    };
  },
  methods: {
    loadMore() {
      fetchMovies(this.page).then((movies) => {
        this.movies = this.movies.concat(movies);
      });
      this.page += 1;
    },
  },
};
</script>
