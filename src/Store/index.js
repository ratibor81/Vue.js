import Vue from 'vue';
import Vuex from 'vuex';
import { searchMovie } from '../api/movies-api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: { searchQuery: '', search: null, movieId: null },
  getters: {
    title(state) {
      return state.searchQuery;
    },
    search(state) {
      return state.search;
    },
    id(state) {
      return state.movieId;
    },
  },
  mutations: {
    SET_QUERY(state, payload) {
      this.state.searchQuery = payload;
    },
    SET_SEARCH(state, payload) {
      this.state.search = payload;
    },
    SET_MORE(state, payload) {
      if (this.state.search.length < 20) return;
      this.state.search = this.state.search.concat(payload);
    },
    SET_ID(state, payload) {
      this.state.movieId = String(payload);
    },
  },
  actions: {
    SET_QUERY({ commit }, title) {
      commit('SET_QUERY', title);
    },
    SET_ID({ commit }, id) {
      commit('SET_ID', id);
    },
    GET_SEARCH: (context, title) => {
      searchMovie(title).then(movies => context.commit('SET_SEARCH', movies));
    },
    GET_MORE: (context, title) => {
      searchMovie(title).then(movies => context.commit('SET_MORE', movies));
    },
  },
});

export default store;
