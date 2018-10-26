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
// import Vue from 'vue';
// import infiniteScroll from 'vue-infinite-scroll';
import { mapState, mapActions, mapGetters } from 'vuex';
import MovieList from '../components/MovieList.vue';
import ErrorHandler from '../components/ErrorHandler.vue';
import { searchMovie } from '../api/movies-api';

// Vue.use(infiniteScroll);

export default {
  name: 'SearchPage',
  components: {
    MovieList,
    ErrorHandler,
  },
  data() {
    return {
      pageNum: 1,
      // busy: false,
      error: null,
    };
  },
  computed: {
    ...mapState(['movies', 'searchQuery']),
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
    ...mapActions({ searchMovies: 'SEARCH_MOVIES', reset: 'RESET_MOVIES' }),
    loadMore() {
      if (this.searchQuery === '') return;
      // if (this.movies.length < 20) return;
      this.searchMovies({
        title: this.searchQuery,
        page: this.pageNum,
      });
      // if (this.movies.length < 20) {
      //   this.busy = true;
      // }
      // searchMovie(this.title, this.pageNum)
      //   .then((movies) => {
      //     this.movies = this.movies.concat(movies);
      //   })
      //   .catch((error) => {
      //     this.error = error;
      //   });
      this.pageNum += 1;
      // this.busy = false;
    },
    goSearch() {
      this.error = null;
      searchMovie(this.title)
        .then((movies) => {
          this.movies = movies;
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>
<style>
.nothing_msg {
  color: #e53935;
}
</style>
