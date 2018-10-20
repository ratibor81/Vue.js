<template>
  <div class="content-wrapper">
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
        className="{styles.poster}"
      >
        <img
          className="{styles.poster_img}"
          :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
          alt="poster"
        >
      </div>
      <div className="{styles.content_right}">
        <h2 className="{styles.head_title}">{{ movie.original_title }}</h2>
        <h4 className="{styles.tagline}">"{{ movie.tagline }}"</h4>
        <p className="{styles.overview}">{{ movie.overview }}</p>
        <h4 className="{styles.headers}">Genres</h4>
        <ul class="list">
          <li
            v-for="(genres, index) in movie.genres"
            :key="index"
            className="{styles.genre}"
          >
            <router-link :to="`/movies/genre/${genres.id}`">
              {{ genres.name }}
            </router-link>
          </li>
        </ul>
        <h4 className="{styles.headers}">Companies</h4>
        <ul class="list">
          <li
            v-for="(production_companies, index) in movie.production_companies"
            :key="index"
            className="{styles.companie}"
          >
            {{ production_companies.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { ContentLoader } from 'vue-content-loader';
import { searchById } from '../api/movies-api';

export default {
  name: 'MovieInfoPage',
  components: {
    ContentLoader,
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
    };
  },
  mounted() {
    searchById(this.$route.params.id).then((movie) => {
      this.movie = movie;
    });
  },
};
</script>
<style>
/* .content-wrapper {
  display: flex;
} */
.content {
  display: flex;
}
.list {
  display: flex;
  list-style: none;
  width: 100%;
}
.list li {
  margin-right: 20px;
}
</style>
