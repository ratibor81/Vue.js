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
// import { searchMovie } from '../api/movies-api';
import MovieList from '../MovieList.vue';

Vue.use(infiniteScroll);
let pageNum = 1;

export default {
  name: 'SearchPage',
  components: {
    MovieList,
  },

  computed: {
    movies() {
      return this.$store.getters.search;
    },
    title() {
      return this.$store.getters.title;
    },
  },

  methods: {
    loadMore() {
      this.busy = true;
      if (!this.title) return;
      this.$store.dispatch('GET_MORE', this.title, pageNum);
      pageNum += 1;
      this.busy = false;
    },
  },
};
</script>
