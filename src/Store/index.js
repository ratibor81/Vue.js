import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

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
    error: null,
  },
  getters,
  mutations,
  actions,
  plugins: [vuexLocal.plugin],
});

export default store;
