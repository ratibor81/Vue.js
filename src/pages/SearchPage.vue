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

export default {
  name: 'SearchPage',
  components: {
    MovieList,
  },
  data() {
    return {
      movies: [],
      pageNum: 1,
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
  methods: {
    loadMore() {
      searchMovie(this.title, this.pageNum).then((movies) => {
        this.movies = this.movies.concat(movies);
      });
      this.pageNum += 1;
    },
  },
};
</script>
