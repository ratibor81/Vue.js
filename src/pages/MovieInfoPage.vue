<template>
  <div class="content-wrapper">
    <error-handler
      v-if="error"
      :try-again="fetchData"
    />
    <content-loader
      v-if="!movie"
      :speed="2"
      :animate="true"
    />
    <div
      v-else
      class="content"
    >
      <div
        class="poster"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          alt="poster"
        >
      </div>
      <div class="content_right">
        <button
          class="fav fav-mark"
          :class="{'fav_selected': favHandler(movie)}"
          @click.stop.prevent="watchlistHandler(movie)"
        >🟊</button>
        <h2 class="head_title">{{ movie.original_title }}</h2>
        <h4 class="tagline">"{{ movie.tagline }}"</h4>
        <p class="overview">{{ movie.overview }}</p>
        <h4 class="headers">Genres</h4>
        <ul class="list">
          <li
            v-for="(genres, index) in movie.genres"
            :key="index"
            class="genre"
          >
            <button
              type="button"
              class="genre_btn"
              @click="goGenrePage(genres)"
            >
              {{ genres.name }}
            </button>
          </li>
        </ul>
        <h4 class="headers">Companies</h4>
        <ul class="list">
          <li
            v-for="(production_companies, index) in movie.production_companies"
            :key="index"
            class="companie"
          >
            {{ production_companies.name }}
          </li>
        </ul>
        <div class="trailer_container">
          <div class="trailer_frame">
            <iframe
              title="trailer"
              :src="`https://www.youtube.com/embed/${trailer.key}`"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ContentLoader } from 'vue-content-loader';
import { searchById, getVideos } from '../api/movies-api';
import getItemById from '../helpers';
import ErrorHandler from '../components/ErrorHandler.vue';

export default {
  name: 'MovieInfoPage',
  components: {
    ContentLoader,
    ErrorHandler,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      movie: null,
      error: null,
      trailer: '',
    };
  },
  computed: {
    watchlist() {
      return this.$store.getters.watchlist;
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    goGenrePage(genres) {
      this.$store.dispatch('SET_GENRE', String(genres.id));
      this.$router.push('/genres');
    },
    watchlistHandler(movie) {
      if (getItemById(this.watchlist, movie.id)) {
        this.$store.dispatch('REMOVE_FROM_WATCHLIST', movie.id);
      } else this.$store.dispatch('ADD_TO_WATCHLIST', movie);
    },
    favHandler(movie) {
      if (this.watchlist.find(mov => mov.id === movie.id)) return true;
      return false;
    },
    fetchData() {
      this.error = null;
      searchById(this.$route.params.id)
        .then((movie) => {
          this.movie = movie;
        })
        .catch((error) => {
          this.error = error;
        });
      getVideos(this.$route.params.id)
        .then((trailer) => {
          this.trailer = trailer;
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.22);
  padding: 20px;
  border: 1px solid lightgrey;
  background-color: #fff;
  &_right {
    width: 65%;
  }
}
.poster {
  width: 33%;
  img {
    width: 100%;
  }
}
.head_title {
  font-size: 26px;
  margin-bottom: 5px;
}
.tagline {
  margin-bottom: 10px;
  font-style: italic;
  font-size: 16px;
}
.overview {
  font-size: 12px;
  margin-bottom: 5px;
}
.headers {
  margin-bottom: 5px;
  color: #37474f;
}
.genre,
.companie {
  display: inline-block;
  margin-right: 15px;
  color: #01579b;
  font-size: 13px;
  font-weight: bold;
}
.list {
  margin-bottom: 14px;
  padding-left: 15px;
  line-height: 1.5;
  &:last-child {
    margin-bottom: 0;
  }
}
.fav-mark {
  position: static !important;
}
.trailer_container {
  width: 100%;
  padding: 0 120px;
}
.trailer_frame {
  border: 2px solid #979797;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.trailer_frame iframe,
.myvideo object,
.myvideo embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.genre_btn {
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  width: 100%;
  color: #01579b;
  font-size: 13px;
  font-weight: bold;
  outline: none;
  background: none;
  border: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
