<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
  >
    <movie-list :movies="movies" />

  </div>
</template>


<script>
import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll';
import { fetchMovies } from '../api/movies-api';
import MovieList from '../MovieList.vue';

Vue.use(infiniteScroll);
let page = 1;

export default {
  name: 'MoviesPage',
  components: {
    MovieList,
  },
  data() {
    return {
      movies: [],
      busy: false,
    };
  },
  created() {
    fetchMovies().then((movies) => {
      this.movies = movies;
    });
  },
  methods: {
    loadMore() {
      this.busy = true;

      fetchMovies(page).then((movies) => {
        this.movies = this.movies.concat(movies);
      });
      page += 1;
      this.busy = false;
    },
  },
};
</script>
<style>
.List {
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
}
.Card {
  width: 16%;
  border: 1px solid black;
  border-radius: 2px;
  margin-bottom: 10px;
}
</style>
