import {
  fetchMovies,
  getMoviesByGenreId,
  searchMovie,
  searchById,
  getVideos,
} from '../api/movies-api';

const actions = {
  RESET_ERROR({ commit }) {
    commit('RESET_ERROR');
  },
  RESET_MOVIES({ commit }) {
    commit('RESET_MOVIES');
  },
  SET_MOVIE_DATA(context, id) {
    searchById(id)
      .then((movie) => {
        context.commit('SET_MOVIE_DATA', movie);
      })
      .catch((err) => {
        context.commit('SET_ERROR', err);
      });
  },
  SET_MOVIE_TRAILER(context, id) {
    getVideos(id)
      .then((trailer) => {
        context.commit('SET_MOVIE_TRAILER', trailer);
      })
      .catch((err) => {
        context.commit('SET_ERROR', err);
      });
  },
  SET_MOVIES(context, page) {
    fetchMovies(page)
      .then((movies) => {
        context.commit('SET_MOVIES', movies);
      })
      .catch((err) => {
        context.commit('SET_ERROR', err);
      });
  },
  SET_BY_GENRE(context, { id, page }) {
    getMoviesByGenreId(id, page)
      .then((movies) => {
        context.commit('SET_MOVIES', movies);
      })
      .catch((err) => {
        context.commit('SET_ERROR', err);
      });
  },
  SEARCH_MOVIES(context, { title, page }) {
    searchMovie(title, page)
      .then((movies) => {
        context.commit('SET_MOVIES', movies);
      })
      .catch((err) => {
        context.commit('SET_ERROR', err);
      });
  },
  SET_USER({ commit }, user) {
    commit('SET_USER', user);
  },
  SET_QUERY({ commit }, title) {
    commit('SET_QUERY', title);
  },
  SET_GENRE({ commit }, genre) {
    commit('SET_GENRE', genre);
  },
  ADD_TO_WATCHLIST({ commit }, movie) {
    commit('ADD_TO_LIST', movie);
  },
  REMOVE_FROM_WATCHLIST({ commit }, id) {
    commit('REMOVE_FROM_LIST', id);
  },
};

export default actions;
