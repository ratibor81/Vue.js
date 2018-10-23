<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="20"
  >
    <h2 v-if="movies.length===0">Nothing found on your requset :(</h2>
    <error-handler
      v-if="error"
      :try-again="goSearch"
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
import MovieList from '../components/MovieList.vue';
import ErrorHandler from '../components/ErrorHandler.vue';
import { searchMovie } from '../api/movies-api';

Vue.use(infiniteScroll);

export default {
  name: 'SearchPage',
  components: {
    MovieList,
    ErrorHandler,
  },
  data() {
    return {
      movies: [],
      pageNum: 1,
      error: null,
    };
  },
  computed: {
    title() {
      return this.$store.getters.title;
    },
  },
  watch: {
    title() {
      this.goSearch();
    },
  },
  methods: {
    loadMore() {
      searchMovie(this.title, this.pageNum)
        .then((movies) => {
          this.movies = this.movies.concat(movies);
        })
        .catch((error) => {
          this.error = error;
        });
      this.pageNum += 1;
    },
    goSearch() {
      this.error = null;
      searchMovie(this.title)
        .then((movies) => {
          this.movies = movies;
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>
