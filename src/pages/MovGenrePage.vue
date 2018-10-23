<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="20"
    class="top"
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
import { getMoviesByGenreId } from '../api/movies-api';
import MovieList from '../components/MovieList.vue';
import ErrorHandler from '../components/ErrorHandler.vue';

Vue.use(infiniteScroll);

export default {
  name: 'MovieGenrePage',
  components: {
    MovieList,
    ErrorHandler,
  },
  data() {
    return {
      movies: [],
      pageN: 1,
      error: null,
    };
  },
  computed: {
    genreId() {
      return this.$store.getters.genre;
    },
  },
  methods: {
    loadMore() {
      getMoviesByGenreId(this.genreId, this.pageN)
        .then((movies) => {
          this.movies = this.movies.concat(movies);
        })
        .catch((error) => {
          this.error = error;
        });
      this.pageN += 1;
    },
    reload() {
      this.$router.go(this.$router.currentRoute);
    },
  },
};
</script>
