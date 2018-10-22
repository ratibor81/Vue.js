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
    <div class="Info">
      <h5 class="Title">{{ movie.title }}</h5>
      <h4 class="Date">Released: {{ movie.release_date.slice(0, -6) }}</h4>
      <div class="Rate">Rating: {{ movie.vote_average }}</div>
    </div>
    <div class="Panel">
      <button
        type="button"
        class="remove-button"
        @click.stop.prevent="removeFromList(movie)"
      > Del </button>
    </div>
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
<style scoped>
.card {
  padding: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.22);
  position: relative;
  display: flex;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-right: 15px;
}
.card:hover {
  transform: scale(1.05);
  transition: 0.3s ease-in-out;
  z-index: 100;
}
.Rate,
.Date {
  font-size: 16px;
  font-weight: bold;
}
.Date {
  margin-bottom: 10px;
}
.Rate {
  color: #0288d1;
}
.Poster {
  width: 25%;
  height: 100%;
  margin-right: 8px;
}
.Title {
  color: #311b92;
  font-size: 17px;
  margin-bottom: 10px;
}
.Panel {
  position: absolute;
  bottom: 0%;
  right: 3%;
}
.remove-button {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
