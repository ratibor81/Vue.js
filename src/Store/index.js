import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import { searchMovie } from '../api/movies-api';

Vue.use(Vuex);

const vuexLocal = new VuexPersist({
  storage: window.localStorage,
  reducer: state => ({
    watchlist: state.watchlist,
  }),
});

const store = new Vuex.Store({
  state: {
    searchQuery: '',
    search: [],
    watchlist: [],
    genreId: '',
  },
  getters: {
    title(state) {
      return state.searchQuery;
    },
    search(state) {
      return state.search;
    },
    watchlist(state) {
      return state.watchlist;
    },
    genre(state) {
      return state.genreId;
    },
  },
  mutations: {
    SET_QUERY(state, payload) {
      this.state.searchQuery = payload;
    },
    SET_SEARCH(state, payload) {
      this.state.search = payload;
    },
    SET_GENRE(state, payload) {
      this.state.genreId = payload;
    },
    SET_MORE(state, payload) {
      if (this.state.search.length < 20) return;
      this.state.search = this.state.search.concat(payload);
    },
    ADD_TO_LIST(state, payload) {
      this.state.watchlist = [payload, ...state.watchlist];
    },
    REMOVE_FROM_LIST(state, payload) {
      this.state.watchlist = this.state.watchlist.filter(
        movie => movie.id !== payload,
      );
    },
  },
  actions: {
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
    GET_SEARCH: (context, title) => {
      searchMovie(title).then(movies => context.commit('SET_SEARCH', movies));
    },
    GET_MORE: (context, title) => {
      searchMovie(title).then(movies => context.commit('SET_MORE', movies));
    },
  },
  plugins: [vuexLocal.plugin],
});

export default store;
