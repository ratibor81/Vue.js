<template>
  <div
    class="card"
    role="link"
    tabIndex="0"
    href="/movies"
    @click="getInfo(movie)"
  >
    <img
      class="Poster"
      :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"
      alt=""
    >
    <div class="info">
      <h5 class="movie_title">{{ movie.title }}</h5>
      <h4 class="date">Released: {{ movie.release_date.slice(0, -6) }}</h4>
      <div class="rate">Rating: {{ movie.vote_average }}</div>
    </div>
    <button
      type="button"
      class="remove-button"
      @click.stop.prevent="removeFromList(movie)"
    ><img src="../assets/delete.svg"></button>
  </div>
</template>
<script>
export default {
  name: 'WatchlistCard',
  props: {
    movie: {
      type: Object,
      required: false,
      default: null,
    },
  },
  methods: {
    removeFromList(movie) {
      this.$store.dispatch('REMOVE_FROM_WATCHLIST', movie.id);
    },
    getInfo(movie) {
      this.$router.push(`movies/${movie.id}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  outline: none;
  padding: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.22);
  position: relative;
  display: flex;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
    z-index: 100;
  }
  background-color: #fff;
}
.rate,
.date {
  font-size: 13px;
  font-weight: bold;
}
.date {
  margin-bottom: 10px;
}
.rate {
  color: #0288d1;
}
.Poster {
  width: 25%;
  height: 100%;
  margin-right: 8px;
}
.movie_title {
  color: #311b92;
  font-size: 15px;
  margin-bottom: 10px;
}
.remove-button {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.22);
  position: absolute;
  bottom: 5px;
  right: 3%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
  padding: 7px;
  transition: 0.4s linear;
  &:hover {
    background-color: #e0e0e0;
    transition: 0.4s linear;
  }
}
</style>
