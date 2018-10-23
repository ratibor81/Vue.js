<template>
  <div class="content-wrapper">
    <error-handler
      v-if="error"
      :try-again="fetchData"
    />
    <content-loader
      v-if="!movie"
      :speed="2"
      :animate="true"
    />
    <div
      v-else
      class="content"
    >
      <div
        className="{styles.poster}"
      >
        <img
          className="{styles.poster_img}"
          :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
          alt="poster"
        >
      </div>
      <div className="{styles.content_right}">
        <button
          class="fav fav-mark"
          :class="{'fav_selected': favHandler(movie)}"
          @click.stop.prevent="watchlistHandler(movie)"
        >🟊</button>
        <h2 className="{styles.head_title}">{{ movie.original_title }}</h2>
        <h4 className="{styles.tagline}">"{{ movie.tagline }}"</h4>
        <p className="{styles.overview}">{{ movie.overview }}</p>
        <h4 className="{styles.headers}">Genres</h4>
        <ul class="list">
          <li
            v-for="(genres, index) in movie.genres"
            :key="index"
            className="{styles.genre}"
          >
            <button
              type="button"
              @click="goGenrePage(genres)"
            >
              {{ genres.name }}
            </button>
          </li>
        </ul>
        <h4 className="{styles.headers}">Companies</h4>
        <ul class="list">
          <li
            v-for="(production_companies, index) in movie.production_companies"
            :key="index"
            className="{styles.companie}"
          >
            {{ production_companies.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { ContentLoader } from 'vue-content-loader';
import { searchById } from '../api/movies-api';
import getItemById from '../helpers';
import ErrorHandler from '../components/ErrorHandler.vue';

export default {
  name: 'MovieInfoPage',
  components: {
    ContentLoader,
    ErrorHandler,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      movie: null,
      error: null,
    };
  },
  computed: {
    watchlist() {
      return this.$store.getters.watchlist;
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    goGenrePage(genres) {
      this.$store.dispatch('SET_GENRE', String(genres.id));
      this.$router.push('/genres');
    },
    watchlistHandler(movie) {
      if (getItemById(this.watchlist, movie.id)) {
        this.$store.dispatch('REMOVE_FROM_WATCHLIST', movie.id);
      } else this.$store.dispatch('ADD_TO_WATCHLIST', movie);
    },
    favHandler(movie) {
      if (this.watchlist.find(mov => mov.id === movie.id)) return true;
      return false;
    },
    fetchData() {
      this.error = null;
      searchById(this.$route.params.id)
        .then((movie) => {
          this.movie = movie;
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>
<style scoped>
/* .content-wrapper {
  display: flex;
} */
.content {
  display: flex;
}
.list {
  display: flex;
  list-style: none;
  width: 100%;
}
.list li {
  margin-right: 20px;
}
.fav-mark {
  margin-left: 30px;
  position: static !important;
}
</style>
