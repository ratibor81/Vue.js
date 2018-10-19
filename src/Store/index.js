import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: { searchQuery: '' },
  getters: {
    title(state) {
      return state.searchQuery;
    },
  },
  mutations: {
    SET_QUERY(state, payload) {
      this.state.searchQuery = payload;
    },
  },
  actions: {
    SET_QUERY({ commit }, title) {
      commit('SET_QUERY', title);
    },
  },
});

export default store;
