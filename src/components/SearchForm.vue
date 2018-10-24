<template>
  <form
    class="search-panel"
    @submit.prevent="getSearch"
  >
    <input
      v-model="searchQuery"
      class="input"
      type="text"
      placeholder="Enter movie title..."
      required
      name="true"
      autoComplete="on"
    >
    <button
      class="btn-standart"
      type="submit"
    >Search</button>
  </form>
</template>
<script>
export default {
  name: 'SearchForm',

  data() {
    return {
      searchQuery: '',
    };
  },

  methods: {
    getSearch() {
      this.$store.dispatch('SET_QUERY', this.searchQuery);
      this.$router.push('search');
    },
  },
};
</script>
<style lang="scss">
.input {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.22);
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  outline: none;
  height: 25px;
  padding: 5px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
}
.btn-standart {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: bolder;
  text-transform: uppercase;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: #2196f3;
  transition: 0.3s linear;
  &:hover {
    background-color: #64b5f6;
    transition: 0.3s linear;
  }
}
.v-btn {
  margin: 0 !important;
}
.search-panel {
  position: absolute;
  right: 50%;
}
</style>
