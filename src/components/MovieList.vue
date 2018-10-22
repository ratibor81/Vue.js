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
        class="btn"
        @click.stop.prevent="addToList(movie)"
      > + </button>
      <button
        type="button"
        class="btn remove"
        @click.stop.prevent="removeFromList(movie)"
      > - </button>
      <div
        class="fav"
        :class="{'fav_selected': favHandler(movie)}"
      >🟊</div>
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
  // watch: {
  //   movies() {
  //     return console.log('GOOOOOOD');
  //   },
  // },
  methods: {
    getInfo(movie) {
      this.$router.push(`movies/${movie.id}`);
    },
    addToList(movie) {
      if (getItemById(this.watchlist, movie.id)) return;
      this.$store.dispatch('ADD_TO_WATCHLIST', movie);
    },
    removeFromList(movie) {
      this.$store.dispatch('REMOVE_FROM_WATCHLIST', movie.id);
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
.btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.remove {
  top: 30px;
}
.fav {
  display: block;
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 40px;
  color: #e0e0e0;
  line-height: 1;
  transition: color 0.2s ease-out;
}
.fav_selected {
  color: #fdd835;
  transition: color 0.2s ease-in;
}
</style>
