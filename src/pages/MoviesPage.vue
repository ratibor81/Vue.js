<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="40"
    class="top"
  >
    <error-handler
      v-if="error"
      :try-again="reload"
    />
    <movie-list
      v-if="!error"
    />
  </div>
</template>

<script>
// import Vue from 'vue';
import { mapActions } from 'vuex';
// import infiniteScroll from 'vue-infinite-scroll';
// import { fetchMovies } from '../api/movies-api';
import MovieList from '../components/MovieList.vue';
import ErrorHandler from '../components/ErrorHandler.vue';

// Vue.use(infiniteScroll);

export default {
  name: 'MoviesPage',
  components: {
    MovieList,
    ErrorHandler,
  },
  data() {
    return {
      // movies: [],
      page: 1,
      error: null,
    };
  },

  // computed: {
  //   movies() {
  //     return this.$store.getters.movies;
  //   },
  // },
  // beforeDestroy() {
  //   this.$store.dispatch('RESET_MOVIES');
  // },
  methods: {
    ...mapActions({ setMovies: 'SET_MOVIES' }),
    loadMore() {
      this.setMovies(this.page);
      // this.$store.dispatch('SET_MOVIES', this.page);
      // fetchMovies(this.page)
      //   .then((movies) => {
      //     this.movies = this.movies.concat(movies);
      //   })
      //   .catch((error) => {
      //     this.error = error;
      //   });
      this.page += 1;
    },
    reload() {
      this.$router.go(this.$router.currentRoute);
    },
  },
};
</script>
