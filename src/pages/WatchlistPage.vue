<template>
  <div class="WatchListPage top">
    <h2
      v-if="movies.length === 0"
      class="EmptyMessage"
    >
      There&apos;s nothing on your list yet.
    </h2>
    <div
      v-if="movies.length > 0"
      class="list"
    >
      <ul
        class="Ul"
      >
        <li
          v-for="(movie, index) in movies"
          :key="index"
          class="List-item"
        >
          <watchlist-card
            :movie="movie"
          />
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
import WatchlistCard from '../components/WatchlistCard.vue';

export default {
  name: 'WatchlistPage',
  components: {
    WatchlistCard,
  },
  computed: {
    movies() {
      return this.$store.getters.watchlist;
    },
  },
};
</script>
<style lang="scss" scoped>
.list {
  padding: 5px;
  width: 100%;
  list-style: none;
  background-color: #fff !important;
}
.WatchListPage {
  display: flex;
  justify-content: center;
}
.Ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
.EmptyMessage {
  color: #0277bd;
}
.List-item {
  width: 19.2%;
  text-align: left;
  margin-bottom: 10px;
  margin-right: 10px;
  &:nth-last-child(-n + 5) {
    margin-bottom: 0;
  }
  &:nth-child(5n) {
    margin-right: 0;
  }
}
</style>
