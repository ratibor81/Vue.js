<template>
  <div class="nav">
    <div class="Logo" />
    <nav>
      <router-link
        to="/"
        class="nav-link"
      >Home</router-link>
      <router-link
        to="/watchlist"
        class="nav-link"
      >Watchlist</router-link>
      <router-link
        v-if="!user"
        to="/auth"
        class="nav-link"
      >SignIn</router-link>
    </nav>
    <search-form />
    <button
      v-if="user"
      class="btn-standart btn-logout"
      @click="logOut"
    >Log out</button>
    <img
      v-if="user && user.photoURL"
      class="user_foto"
      :src="user.photoURL"
      alt="profile foto"
    >
  </div>
</template>
<script>
import firebase from 'firebase/app';
import SearchForm from './SearchForm.vue';

export default {
  name: 'NavLinks',
  components: {
    SearchForm,
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
      this.$router.push('/auth');
    },
  },
};
</script>
<style lang="scss">
.is-active {
  color: #fff !important;
  font-weight: bolder;
}
.nav-link {
  font-size: 22px;
  text-decoration: none;
  text-transform: uppercase;
  color: #212121;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
}
.nav {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.22);
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  z-index: 1000;
  width: 100%;
  background-color: #90a4ae;
}
nav {
  margin-right: 30px;
}
.Logo {
  background-image: url('../assets/logo.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin-right: 20px;
}
.user_foto {
  position: absolute;
  right: 3%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
}
.btn-logout {
  background-color: #ff8a65 !important;
}
</style>
