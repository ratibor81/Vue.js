import Vue from 'vue';
import Vuetify from 'vuetify';
import firebase from 'firebase/app';
import 'firebase/auth';
import App from './components/App.vue';
import router from './router';
import store from './Store';
import config from './firebase/firebaseConfig';

Vue.use(Vuetify);

export default new Vue({
  el: '#app',
  router,
  store,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('SET_USER', user);
        this.$router.push('/');
      }
    });
  },
  render: h => h(App),
});
