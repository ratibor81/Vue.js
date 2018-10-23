import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './components/App.vue';
import router from './router';
import store from './store';

Vue.use(Vuetify);

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
