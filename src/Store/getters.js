const getters = {
  title(state) {
    return state.searchQuery;
  },
  movie(state) {
    return state.movieCard.data;
  },
  trailer(state) {
    return state.movieCard.trailer;
  },
};

export default getters;
