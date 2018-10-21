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
let pageN = 1;

export default {
  name: 'MovieGenrePage',
  components: {
    MovieList,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      movies: [],
    };
  },
  created() {
    getMoviesByGenreId(this.$route.params.id).then((movies) => {
      this.movies = movies;
    });
  },
  methods: {
    loadMore() {
      this.busy = true;

      getMoviesByGenreId(this.$route.params.id, pageN).then((movies) => {
        this.movies = this.movies.concat(movies);
      });
      pageN += 1;
      this.busy = false;
    },
  },
};
</script>
