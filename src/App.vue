<template>
  <div id="app">
    <blog-post title="Imported global Vue Component" />

    <form @submit.prevent="getMovies">
      <input v-model="searchQuery">
      <button
        type="submit"
        class="btn btn-primary"
      >Поиск фильмов</button>
    </form>
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
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
  </div>
</template>

<script>
import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll';
import blogPost from './Component.vue';
// import searchForm from './SearchForm.vue';
import { fetchMovies, searchMovie } from './api/movies-api';

Vue.use(infiniteScroll);
let page = 1;

export default {
  name: 'App',
  components: {
    'blog-post': blogPost,
    // 'search-form': searchForm,
  },
  data() {
    return {
      searchQuery: '',
      movies: [],
      busy: false,
    };
  },
  created() {
    fetchMovies().then((movies) => {
      this.movies = movies;
    });
  },
  methods: {
    loadMore() {
      this.busy = true;

      fetchMovies(page).then((movies) => {
        this.movies = this.movies.concat(movies);
      });
      page += 1;
      this.busy = false;
    },
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
  border: 1px solid black;
  border-radius: 2px;
  margin-bottom: 10px;
}
</style>
