<template>
  <ul
    v-if="movies && movies.length"
    class="List"
  >
    <li
      v-for="(movie, index) in movies"
      :key="index"
      class="Card"
      role="link"
      tabIndex="0"
      href="/movies"
      @click="getInfo(movie)"
    >
      <img
        :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"
        alt=""
      >
      <p>{{ movie.title }}</p>
      <h5>
        Release date:
        <span>{{ movie.release_date.slice(0, -6) }}</span>
      </h5>
      <div>{{ movie.vote_average }}</div>
      <button
        type="button"
        class="add_btn"
        @click.stop.prevent="addToWatchlist(movie)"
      > + </button>
    </li>
  </ul>
</template>

<script>
import getItemById from '../helpers';

export default {
  name: 'MovieList',
  props: {
    movies: {
      type: Array,
      required: false,
      default: null,
    },
  },
  computed: {
    watchlist() {
      return this.$store.getters.watchlist;
    },
  },
  methods: {
    getInfo(movie) {
      this.$router.push(`movies/${movie.id}`);
    },
    addToWatchlist(movie) {
      if (getItemById(this.watchlist, movie.id)) return;

      this.$store.dispatch('ADD_TO_WATCHLIST', movie);
      // console.log(movie.id);
    },
  },
};
</script>
<style>
.List {
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
}
.Card {
  width: 16%;
  border: 1px solid black;
  border-radius: 2px;
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
}
.add_btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
