import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

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
    watchlist: [],
    genreId: '',
    user: null,
  },
  getters: {
    title(state) {
      return state.searchQuery;
    },
    watchlist(state) {
      return state.watchlist;
    },
    genre(state) {
      return state.genreId;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
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
  },
  actions: {
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
