import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import {
  fetchMovies,
  getMoviesByGenreId,
  searchMovie,
  searchById,
  getVideos,
} from '../api/movies-api';

Vue.use(Vuex);

const vuexLocal = new VuexPersist({
  storage: window.localStorage,
  reducer: state => ({
    watchlist: state.watchlist,
  }),
});

const store = new Vuex.Store({
  state: {
    movies: [],
    searchQuery: '',
    watchlist: [],
    genreId: '',
    user: null,
    movieCard: {
      data: null,
      trailer: null,
    },
  },
  getters: {
    // movies(state) {
    //   return state.movies;
    // },
    title(state) {
      return state.searchQuery;
    },
    movie(state) {
      return state.movieCard.data;
    },
    trailer(state) {
      return state.movieCard.trailer;
    },
    // watchlist(state) {
    //   return state.watchlist;
    // },
    // genre(state) {
    //   return state.genreId;
    // },
    // user(state) {
    //   return state.user;
    // },
  },
  mutations: {
    RESET_MOVIES() {
      this.state.movies = [];
    },
    SET_QUERY(state, payload) {
      this.state.searchQuery = payload;
    },
    SET_GENRE(state, payload) {
      this.state.genreId = payload;
    },
    ADD_TO_LIST(state, payload) {
      this.state.watchlist = [payload, ...state.watchlist];
    },
    REMOVE_FROM_LIST(state, payload) {
      this.state.watchlist = this.state.watchlist.filter(
        movie => movie.id !== payload,
      );
    },
    SET_USER(state, payload) {
      this.state.user = payload;
    },
    SET_MOVIES(state, payload) {
      this.state.movies = this.state.movies.concat(payload);
    },
    SET_MOVIE_DATA(state, payload) {
      this.state.movieCard.data = payload;
    },
    SET_MOVIE_TRAILER(state, payload) {
      this.state.movieCard.trailer = payload;
    },
  },
  actions: {
    RESET_MOVIES({ commit }) {
      commit('RESET_MOVIES');
    },
    SET_MOVIE_DATA(context, id) {
      searchById(id).then((movie) => {
        context.commit('SET_MOVIE_DATA', movie);
      });
    },
    SET_MOVIE_TRAILER(context, id) {
      getVideos(id).then((trailer) => {
        context.commit('SET_MOVIE_TRAILER', trailer);
      });
    },
    SET_MOVIES(context, page) {
      fetchMovies(page).then((movies) => {
        context.commit('SET_MOVIES', movies);
      });
    },
    SET_BY_GENRE(context, { id, page }) {
      getMoviesByGenreId(id, page).then((movies) => {
        context.commit('SET_MOVIES', movies);
      });
    },
    SEARCH_MOVIES(context, { title, page }) {
      searchMovie(title, page).then((movies) => {
        context.commit('SET_MOVIES', movies);
      });
    },
    SET_USER({ commit }, user) {
      commit('SET_USER', user);
    },
    SET_QUERY({ commit }, title) {
      commit('SET_QUERY', title);
    },
    SET_GENRE({ commit }, genre) {
      commit('SET_GENRE', genre);
    },
    ADD_TO_WATCHLIST({ commit }, movie) {
      commit('ADD_TO_LIST', movie);
    },
    REMOVE_FROM_WATCHLIST({ commit }, id) {
      commit('REMOVE_FROM_LIST', id);
    },
  },
  plugins: [vuexLocal.plugin],
});

export default store;
