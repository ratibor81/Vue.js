import Vue from 'vue';
import Vuex from 'vuex';
import { searchMovie } from '../api/movies-api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: { search: null },
  getters: {
    search(state) {
      return state.search;
    },
  },
  mutations: {
    SET_SEARCH(state, payload) {
      this.state.search = payload;
    },
  },
  actions: {
    GET_SEARCH: (context, title) => {
      searchMovie(title).then(movies => context.commit('SET_SEARCH', movies));
    },
  },
});

export default store;
