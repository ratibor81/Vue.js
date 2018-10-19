import Vue from 'vue';
import VueRouter from 'vue-router';
import SearchPage from './SearchPage.vue';
import MoviesPage from './MoviesPage.vue';

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
  ],
});
