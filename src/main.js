import Vue from 'vue';
import Vuetify from 'vuetify';
import firebase from 'firebase/app';
import 'firebase/auth';
import App from './components/App.vue';
import router from './router';
import store from './store';
import config from './firebase/firebaseConfig';

Vue.use(Vuetify);

export default new Vue({
  el: '#app',
  router,
  store,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.dispatch('SET_USER', user);
    });
  },
  render: h => h(App),
});
