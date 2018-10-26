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
    />
  </div>
</template>
<script>
// import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
// import infiniteScroll from 'vue-infinite-scroll';
// import { getMoviesByGenreId } from '../api/movies-api';
import MovieList from '../components/MovieList.vue';
import ErrorHandler from '../components/ErrorHandler.vue';

// Vue.use(infiniteScroll);

export default {
  name: 'MovieGenrePage',
  components: {
    MovieList,
    ErrorHandler,
  },
  data() {
    return {
      // movies: [],
      pageN: 1,
      error: null,
    };
  },
  computed: {
    ...mapState(['genreId']),
    // genreId() {
    //   return this.$store.getters.genre;
    // },
  },
  methods: {
    ...mapActions({ setByGenre: 'SET_BY_GENRE' }),
    loadMore() {
      this.setByGenre({
        id: this.genreId,
        page: this.pageN,
      });
      // getMoviesByGenreId(this.genreId, this.pageN)
      //   .then((movies) => {
      //     this.movies = this.movies.concat(movies);
      //   })
      //   .catch((error) => {
      //     this.error = error;
      //   });
      this.pageN += 1;
    },
    reload() {
      this.$router.go(this.$router.currentRoute);
    },
  },
};
</script>
