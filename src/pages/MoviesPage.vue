<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="40"
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
import { mapActions, mapState } from 'vuex';
import MovieList from '../components/MovieList.vue';
import ErrorHandler from '../components/ErrorHandler.vue';

export default {
  name: 'MoviesPage',
  components: {
    MovieList,
    ErrorHandler,
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    ...mapState(['error']),
  },
  methods: {
    ...mapActions({ setMovies: 'SET_MOVIES', resetError: 'RESET_ERROR' }),
    loadMore() {
      this.setMovies(this.page);
      this.page += 1;
    },
    reload() {
      this.resetError();
      this.loadMore();
    },
  },
};
</script>
