const mutations = {
  SET_ERROR(state, payload) {
    this.state.error = payload;
  },
  RESET_CARD() {
    this.state.movieCard.data = null;
    this.state.movieCard.trailer = null;
  },
  RESET_ERROR() {
    this.state.error = null;
  },
  RESET_MOVIES() {
    this.state.movies = [];
  },
  SET_QUERY(state, payload) {
    this.state.searchQuery = payload;
  },
  SET_GENRE(state, payload) {
    this.state.genreId = payload;
  },
  ADD_TO_LIST(state, payload) {
    this.state.watchlist = [payload, ...state.watchlist];
  },
  REMOVE_FROM_LIST(state, payload) {
    this.state.watchlist = this.state.watchlist.filter(
      movie => movie.id !== payload,
    );
  },
  SET_USER(state, payload) {
    this.state.user = payload;
  },
  SET_MOVIES(state, payload) {
    this.state.movies = this.state.movies.concat(payload);
  },
  SET_MOVIE_DATA(state, payload) {
    this.state.movieCard.data = payload;
  },
  SET_MOVIE_TRAILER(state, payload) {
    this.state.movieCard.trailer = payload;
  },
};

export default mutations;
