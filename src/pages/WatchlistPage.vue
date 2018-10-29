<template>
  <div class="WatchListPage top">
    <h2
      v-if="watchlist.length === 0"
      class="EmptyMessage"
    >
      There&apos;s nothing on your list yet.
    </h2>
    <div
      v-if="watchlist.length > 0"
      class="list"
    >
      <transition-group
        name="bounce"
        class="Ul"
        tag="ul"
      >
        <li
          v-for="(movie) in watchlist"
          :key="movie.id"
          class="List-item"
        >
          <watchlist-card :movie="movie" />
        </li>
      </transition-group>

    </div>
  </div>

</template>
<script>
import { mapState } from 'vuex';
import WatchlistCard from '../components/WatchlistCard.vue';

export default {
  name: 'WatchlistPage',
  components: {
    WatchlistCard,
  },
  computed: {
    ...mapState(['watchlist']),
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
  list-style: none;
  width: 100%;
  display: block;
  padding-left: 0 !important;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
}
.EmptyMessage {
  color: #0277bd;
}
.List-item {
  text-align: left;
  width: 100%;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    margin-right: 10px;
    width: 32%;
    &:nth-last-child(-n + 3) {
      margin-bottom: 0;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  @media (min-width: 1200px) {
    width: 19.2%;
    &:nth-last-child(-n + 5) {
      margin-bottom: 0;
    }
    &:nth-child(3n) {
      margin-right: 10px;
    }
    &:nth-child(5n) {
      margin-right: 0;
    }
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
