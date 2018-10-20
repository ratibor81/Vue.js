<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
  >
    <h2 v-if="movies.length === 0">Nothing found on your requset :(</h2>
    <movie-list :movies="movies" />
  </div>
</template>


<script>
import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll';
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
      this.busy = false;
      if (!this.title) return;
      this.$store.dispatch('GET_MORE', this.title, pageNum);
      this.busy = true;
      pageNum += 1;
    },
  },
};
</script>
