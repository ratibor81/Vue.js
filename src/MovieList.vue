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
      @click="onClick(movie)"
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
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    movies: {
      type: Array,
      required: false,
      default: null,
    },
  },
  methods: {
    onClick(movie) {
      return console.log(movie.id);
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
}
</style>
