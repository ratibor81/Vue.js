<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="20"
    class="top"
  >
    <h2
      v-if="movies.length===0"
      class="nothing_msg"
    >Nothing found on your requset :(</h2>
    <error-handler
      v-if="error"
      :try-again="goSearch"
    />
    <movie-list
      v-if="!error"
    />
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import MovieList from '../components/MovieList.vue';
import ErrorHandler from '../components/ErrorHandler.vue';

export default {
  name: 'SearchPage',
  components: {
    MovieList,
    ErrorHandler,
  },
  data() {
    return {
      pageNum: 1,
    };
  },
  computed: {
    ...mapState(['movies', 'searchQuery', 'error']),
    ...mapGetters(['title']),
  },
  // watch нужен для повторного поиска, если юзер на странице search
  watch: {
    title() {
      this.reset();
      this.pageNum = 1;
      this.loadMore();
    },
  },
  methods: {
    ...mapActions(['searchMovies', 'reset', 'resetError']),
    loadMore() {
      if (this.searchQuery === '') return;
      this.searchMovies({
        title: this.searchQuery,
        page: this.pageNum,
      });
      this.pageNum += 1;
    },
    goSearch() {
      this.resetError();
      this.loadMore();
    },
  },
};
</script>
<style>
.nothing_msg {
  color: #e53935;
}
</style>
