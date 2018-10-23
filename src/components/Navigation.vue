<template>
  <div class="nav">
    <nav>
      <router-link
        to="/"
        class="nav-link"
      >Home</router-link>
      <router-link
        to="/watchlist"
        class="nav-link"
      >Watchlist</router-link>
    </nav>
    <search-form />
  </div>
</template>
<script>
import SearchForm from './SearchForm.vue';

export default {
  name: 'NavLinks',
  components: {
    SearchForm,
  },
};
</script>
<style>
.is-active {
  color: red;
}
.nav-link {
  font-size: 20px;
  text-decoration: none;
  margin-right: 20px;
}
.nav {
  display: flex;
}
</style>
