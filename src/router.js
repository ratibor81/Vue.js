import Vue from 'vue';
import VueRouter from 'vue-router';
import SearchPage from './pages/SearchPage.vue';
import MoviesPage from './pages/MoviesPage.vue';
import WatchlistPage from './pages/WatchlistPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: MoviesPage,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage,
    },
    {
      path: '/watchlist',
      name: 'watchlist',
      component: WatchlistPage,
    },
  ],
});
