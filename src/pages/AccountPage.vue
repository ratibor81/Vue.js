<template>
  <div class="top">
    <h3 class="account_header">Account Information</h3>
    <img
      :src="user.photoURL"
      alt="profile foto"
    >
    <div>{{ user.displayName }}</div>
    <div>{{ user.email }}</div>
  </div>
</template>
<script>
export default {
  name: 'AccountPage',
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>
