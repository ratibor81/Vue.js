import Vue from 'vue';
import VueRouter from 'vue-router';
import SearchPage from './pages/SearchPage.vue';
import MoviesPage from './pages/MoviesPage.vue';
import WatchlistPage from './pages/WatchlistPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import MovieInfoPage from './pages/MovieInfoPage.vue';
import MovieGenrePage from './pages/MovGenrePage.vue';

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
    {
      path: '/movies/:id',
      name: 'movies',
      component: MovieInfoPage,
      props: true,
    },
    {
      path: '/movies/genre/:id',
      name: 'genre',
      component: MovieGenrePage,
      props: true,
    },
    { path: '*', component: NotFoundPage },
  ],
});
