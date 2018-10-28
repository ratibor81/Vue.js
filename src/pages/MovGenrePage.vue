<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="20"
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
import { mapState, mapActions } from 'vuex';
import MovieList from '../components/MovieList.vue';
import ErrorHandler from '../components/ErrorHandler.vue';

export default {
  name: 'MovieGenrePage',
  components: {
    MovieList,
    ErrorHandler,
  },
  data() {
    return {
      pageN: 1,
    };
  },
  computed: {
    ...mapState(['genreId', 'error']),
  },
  methods: {
    ...mapActions(['setByGenre', 'resetError']),
    loadMore() {
      this.setByGenre({
        id: this.genreId,
        page: this.pageN,
      });
      this.pageN += 1;
    },
    reload() {
      this.resetError();
      this.loadMore();
    },
  },
};
</script>
