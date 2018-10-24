import Vue from 'vue';
import VueRouter from 'vue-router';
import { requireAuth } from './helpers';

const Home = () => import(/* webpackChunkName: "home" */ './pages/MoviesPage.vue');
const Search = () => import(/* webpackChunkName: "search" */ './pages/SearchPage.vue');
const Watchlist = () => import(/* webpackChunkName: "watchlist" */ './pages/WatchlistPage.vue');
const NotFound = () => import(/* webpackChunkName: "not-found" */ './pages/NotFoundPage.vue');
const MovieInfo = () => import(/* webpackChunkName: "movie-info" */ './pages/MovieInfoPage.vue');
const MovieGenre = () => import(/* webpackChunkName: "movie-genre" */ './pages/MovGenrePage.vue');
const Auth = () => import(/* webpackChunkName: "auth" */ './pages/Auth.vue');

Vue.use(VueRouter);

const router = new VueRouter({
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
      beforeEnter: requireAuth,
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
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
  ],
});

export default router;
