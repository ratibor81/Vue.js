<template>

  <div class="WatchListPage">
    <h2
      v-if="movies.length === 0"
      class="EmptyMessage"
    >
      There&apos;s nothing on your list yet.
    </h2>
    <div
      v-if="movies.length > 0"
      class="List"
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
<style scoped>
.List {
  padding: 5px;
  width: 100%;
  overflow: hidden;
  list-style: none;
  background-color: #fff !important;
}
.WatchListPage {
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .WatchListPage {
    padding-top: 40px;
  }
}
@media (min-width: 768px) {
  .Ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
}

.Card {
  margin-bottom: 5px;
  width: 100%;
}
.Card:last-child {
  margin-bottom: 0;
}
/* @media (min-width: 768px) {
  .Card {
    width: 32.7%;
    margin-right: 7px;
  }
  .Card:nth-last-child(-n + 3) {
    margin-bottom: 0;
  }
  .Card:nth-child(3n) {
    margin-right: 0;
  }
}
@media (min-width: 1200px) {
  .Card {
    width: 24.5%;
  }
  .Card:nth-last-child(-n + 4) {
    margin-bottom: 0;
  }
  .Card:nth-child(3n) {
    margin-right: 7px;
  }
  .Card:nth-child(4n) {
    margin-right: 0;
  }
} */
@media (min-width: 1350px) {
  .Card {
    width: 24.6%;
  }
}
.EmptyMessage {
  color: #0277bd;
}
.List-item {
  width: 25%;
}
</style>
