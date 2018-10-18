<script>
import Vue from 'vue';
import { searchMovie } from './api/movies-api';

export default Vue.component('search-form', {
  data() {
    return {
      searchQuery: '',
      vid: [],
    };
  },
  methods: {
    getMovies() {
      searchMovie(this.searchQuery).then((movies) => {
        this.vid = movies;
      });
    },
  },
  // props: {
  //   title: {
  //     type: String,
  //     default: '',
  //     required: false,
  //   },
  // },
  template: `<form @submit.prevent="getMovies">
      <input v-model="searchQuery">
      <button
        type="submit"
        class="btn btn-primary"
      >Поиск фильмов</button>
    </form>`,
});
</script>
