<template>
  <div>
    <nav>
      <router-link
        to="/"
        class="nav-link"
      >Home</router-link>
      <router-link
        to="/search"
        class="nav-link"
      >Search</router-link>
      <router-link
        to="/watchlist"
        class="nav-link"
      >Watchlist</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'NavLinks',
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
</style>
