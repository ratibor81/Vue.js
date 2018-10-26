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
        alt="movie poster"
      >
      <p class="Title">{{ movie.title }}</p>
      <h5 class="Date">
        Release date:
        <span class="Date_num">{{ movie.release_date.slice(0, -6) }}</span>
      </h5>
      <div class="Rate">{{ movie.vote_average }}</div>
      <button
        :disabled="!user"
        class="fav"
        :class="{'fav_selected': favHandler(movie), 'fav_disabled': !user}"
        @click.stop.prevent="watchlistHandler(movie)"
      >🟊</button>
    </li>
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :timeout="timeout"
    >
      Movie added to your watchlist
    </v-snackbar>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { getItemById } from '../helpers';

export default {
  name: 'MovieList',
  // props: {
  //   movies: {
  //     type: Array,
  //     required: false,
  //     default: null,
  //   },
  // },
  data() {
    return {
      snackbar: false,
      y: 'bottom',
      x: 'left',
      mode: '',
      timeout: 1500,
    };
  },
  computed: {
    watchlist() {
      return this.$store.getters.watchlist;
    },
    user() {
      return this.$store.getters.user;
    },
    ...mapState(['movies']),
  },
  beforeDestroy() {
    this.reset();
    // this.$store.dispatch('RESET_MOVIES');
  },
  methods: {
    getInfo(movie) {
      this.$router.push(`movies/${movie.id}`);
    },
    watchlistHandler(movie) {
      if (getItemById(this.watchlist, movie.id)) {
        this.$store.dispatch('REMOVE_FROM_WATCHLIST', movie.id);
      } else {
        this.snackbar = true;
        this.$store.dispatch('ADD_TO_WATCHLIST', movie);
      }
    },
    favHandler(movie) {
      if (this.watchlist.find(mov => mov.id === movie.id)) return true;
      return false;
    },
    ...mapActions({ reset: 'RESET_MOVIES' }),
  },
};
</script>
<style lang="scss">
.List {
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  padding-left: 0 !important;
}
.Card {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.22);
  width: 13%;
  border-radius: 10px;
  margin-bottom: 15px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-out;
  animation: open-card 0.3s;
  &:hover {
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
  }
  img {
    width: 100%;
  }
}
.Title {
  font-size: 11px;
  color: #1a237e;
  margin-bottom: 5px;
  text-align: center;
  height: 13px;
  overflow: hidden;
  font-weight: bolder;
}
.Rate {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #2196f3;
  color: #fff;
  font-size: 14px;
  padding: 3px;
  text-align: center;
  width: 45px;
  border-radius: 0 0 10px 0;
  font-weight: bold;
}

.Date {
  font-size: 11px;
  margin-bottom: 0;
  text-align: center;
}
.Date_num {
  color: #f44336;
  margin-left: 5px;
  font-weight: bold;
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
.fav_selected {
  color: #ffeb3b;
  transition: color 0.2s ease-in;
}
.fav_disabled {
  color: #e0e0e0;
}
@keyframes open-card {
  0% {
    transform: scale(0);
    transition: transform 300ms ease-in;
  }

  100% {
    transform: scale(1);
    transition: transform 300ms ease-in;
  }
}
.v-snack__wrapper {
  min-width: 200px;
}
</style>
