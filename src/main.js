import Vue from 'vue';
import Vuetify from 'vuetify';
import infiniteScroll from 'vue-infinite-scroll';
import firebase from 'firebase/app';
import 'firebase/auth';
import { mapActions } from 'vuex';
import App from './components/App.vue';
import router from './router';
import store from './Store';
import config from './firebase/firebaseConfig';

Vue.use(Vuetify);
Vue.use(infiniteScroll);

export default new Vue({
  el: '#app',
  router,
  store,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUser(user);
        this.$router.push('/');
      }
    });
  },
  methods: {
    ...mapActions({ setUser: 'SET_USER' }),
  },
  render: h => h(App),
});
