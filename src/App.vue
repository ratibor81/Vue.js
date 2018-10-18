<template>
  <div id="app">
    <blog-post title="Imported global Vue Component" />

    <form @submit.prevent="getMovies">
      <input v-model="searchQuery">
      <button
        type="button"
        class="btn btn-primary"
        @click="getMovies"
      >Поиск фильмов</button>
    </form>

    <ul
      v-if="movies && movies.length"
      class="List"
    >
      <li
        v-for="(movie, index) in movies"
        :key="index"
        class="Card"
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

  </div>
</template>

<script>
import blogPost from './Component.vue';
import { fetchMovies, searchMovie } from './api/get-movies';

export default {
  name: 'App',
  components: {
    'blog-post': blogPost,
  },
  data() {
    return {
      searchQuery: '',
      movies: [],
    };
  },
  created() {
    fetchMovies().then((movies) => {
      this.movies = movies;
    });
  },
  methods: {
    getMovies() {
      searchMovie(this.searchQuery).then((movies) => {
        this.movies = movies;
      });
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.List {
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
}
.Card {
  width: 16%;
}
</style>
