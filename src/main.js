import Vue from 'vue';
import App from './components/App.vue';
import router from './router';
import store from './store';

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
