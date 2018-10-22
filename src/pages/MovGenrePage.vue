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
import { getMoviesByGenreId } from '../api/movies-api';
import MovieList from '../components/MovieList.vue';

Vue.use(infiniteScroll);

export default {
  name: 'MovieGenrePage',
  components: {
    MovieList,
  },
  data() {
    return {
      movies: [],
      pageN: 1,
    };
  },
  computed: {
    genreId() {
      return this.$store.getters.genre;
    },
  },
  methods: {
    loadMore() {
      getMoviesByGenreId(this.genreId, this.pageN).then((movies) => {
        this.movies = this.movies.concat(movies);
      });
      this.pageN += 1;
    },
  },
};
</script>
