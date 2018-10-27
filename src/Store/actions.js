import {
  fetchMovies,
  getMoviesByGenreId,
  searchMovie,
  searchById,
  getVideos,
} from '../api/movies-api';

const actions = {
  resetError({ commit }) {
    commit('RESET_ERROR');
  },
  reset({ commit }) {
    commit('RESET_MOVIES');
  },
  setData(context, id) {
    searchById(id)
      .then((movie) => {
        context.commit('SET_MOVIE_DATA', movie);
      })
      .catch((err) => {
        context.commit('SET_ERROR', err);
      });
  },
  setTrailer(context, id) {
    getVideos(id)
      .then((trailer) => {
        context.commit('SET_MOVIE_TRAILER', trailer);
      })
      .catch((err) => {
        context.commit('SET_ERROR', err);
      });
  },
  setMovies(context, page) {
    fetchMovies(page)
      .then((movies) => {
        context.commit('SET_MOVIES', movies);
      })
      .catch((err) => {
        context.commit('SET_ERROR', err);
      });
  },
  setByGenre(context, { id, page }) {
    getMoviesByGenreId(id, page)
      .then((movies) => {
        context.commit('SET_MOVIES', movies);
      })
      .catch((err) => {
        context.commit('SET_ERROR', err);
      });
  },
  searchMovies(context, { title, page }) {
    searchMovie(title, page)
      .then((movies) => {
        context.commit('SET_MOVIES', movies);
      })
      .catch((err) => {
        context.commit('SET_ERROR', err);
      });
  },
  setUser({ commit }, user) {
    commit('SET_USER', user);
  },
  setQuery({ commit }, title) {
    commit('SET_QUERY', title);
  },
  setGenre({ commit }, genre) {
    commit('SET_GENRE', genre);
  },
  addCard({ commit }, movie) {
    commit('ADD_TO_LIST', movie);
  },
  removeCard({ commit }, id) {
    commit('REMOVE_FROM_LIST', id);
  },
};

export default actions;
