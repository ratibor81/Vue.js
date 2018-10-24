import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import(/* webpackChunkName: "home" */ './pages/MoviesPage.vue');
const Search = () => import(/* webpackChunkName: "search" */ './pages/SearchPage.vue');
const Watchlist = () => import(/* webpackChunkName: "watchlist" */ './pages/WatchlistPage.vue');
const NotFound = () => import(/* webpackChunkName: "not-found" */ './pages/NotFoundPage.vue');
const MovieInfo = () => import(/* webpackChunkName: "movie-info" */ './pages/MovieInfoPage.vue');
const MovieGenre = () => import(/* webpackChunkName: "movie-genre" */ './pages/MovGenrePage.vue');

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/watchlist',
      name: 'watchlist',
      component: Watchlist,
    },
    {
      path: '/movies/:id',
      name: 'movies',
      component: MovieInfo,
      props: true,
    },
    {
      path: '/genres',
      name: 'genre',
      component: MovieGenre,
      props: true,
    },
    { path: '*', component: NotFound },
  ],
});
