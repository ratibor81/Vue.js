<template>
  <ul
    v-if="movies"
    class="List"
  >
    <li
      v-for="(movie, index) in movies"
      :key="index"
      class="Card"
      role="link"
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
        class="fav"
        :class="{'fav_selected': favHandler(movie)}"
        @click.stop.prevent="watchlistHandler(movie)"
      >🟊</button>
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
  data() {
    return {
      value: false,
    };
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
    watchlistHandler(movie) {
      if (getItemById(this.watchlist, movie.id)) {
        this.$store.dispatch('REMOVE_FROM_WATCHLIST', movie.id);
      } else this.$store.dispatch('ADD_TO_WATCHLIST', movie);
    },
    favHandler(movie) {
      if (this.watchlist.find(mov => mov.id === movie.id)) return true;
      return false;
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
.fav {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 40px;
  color: #827717;
  line-height: 1;
  transition: color 0.2s ease-out;
  transition: 0.3s linear;
}
.fav:hover {
  transform: rotate(72deg);
  transition: 0.3s linear;
}
.fav_selected {
  color: #fdd835;
  transition: color 0.2s ease-in;
}
</style>
