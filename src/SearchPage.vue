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
import { searchMovie } from './api/movies-api';
import MovieList from './MovieList.vue';

Vue.use(infiniteScroll);
let pageNum = 1;

export default {
  name: 'SearchPage',
  components: {
    MovieList,
  },
  // props: {
  //   searchQuery: {
  //     type: String,
  //     required: false,
  //     default: '',
  //   },
  // },

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
  created() {
    searchMovie(this.title).then((movies) => {
      this.movies = movies;
    });
    // this.$router.push('search');
  },
  methods: {
    loadMore() {
      this.busy = true;

      searchMovie(this.title, pageNum).then((movies) => {
        this.movies = this.movies.concat(movies);
      });
      pageNum += 1;
      this.busy = false;
    },
  },
};
</script>
