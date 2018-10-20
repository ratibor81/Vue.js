<template>
  <form @submit.prevent="getSearch">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Enter movie title..."
      required
      name="true"
      autoComplete="on"
    >
    <button
      type="submit"
      class="btn btn-primary"
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
      this.$store.dispatch('GET_SEARCH', this.searchQuery);
      this.$router.push('search');
    },
  },
};
</script>
