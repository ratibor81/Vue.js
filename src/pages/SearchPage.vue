<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
  >
    <h2 v-if="movies.length===0">Nothing found on your requset :(</h2>
    <movie-list :movies="movies" />
  </div>
</template>


<script>
import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll';
import MovieList from '../components/MovieList.vue';
import { searchMovie } from '../api/movies-api';

Vue.use(infiniteScroll);
let pageNum = 1;

export default {
  name: 'SearchPage',
  components: {
    MovieList,
  },
  data() {
    return {
      movies: [],
    };
  },
  computed: {
    title() {
      return this.$store.getters.title;
    },
  },
  watch: {
    title() {
      searchMovie(this.title).then((movies) => {
        this.movies = movies;
      });
    },
  },
  created() {
    searchMovie(this.title).then((movies) => {
      this.movies = movies;
    });
  },
  methods: {
    loadMore() {
      this.busy = true;
      if (this.movies.length < 20) return;
      searchMovie(this.title, pageNum).then((movies) => {
        this.movies = this.movies.concat(movies);
      });
      pageNum += 1;
      this.busy = false;
    },
  },
};
</script>
