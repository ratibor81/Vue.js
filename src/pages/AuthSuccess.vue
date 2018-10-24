<template>
  <div class="top">
    <button
      class="btn-standart"
      @click="logOut"
    >Log out</button>
    <div>
      <img
        :src="user.photoURL"
        alt="profile foto"
      >

      <h1>Signup succeeded</h1>
      <div>{{ user.displayName }}</div>
      <div>{{ user.email }}</div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase/app';

export default {
  name: 'AuthSuccsess',
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
