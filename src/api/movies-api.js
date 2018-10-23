import axios from 'axios';

const API_KEY = '532f680f186ee3009db06b2e2efe9aab';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = (page) => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-EN&page=${page}`;
  return axios.get(url).then(response => response.data.results);
};

export const searchMovie = (title, page) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-EN&query=${title}&page=${page}`;
  return axios.get(url).then(response => response.data.results);
};

export const searchById = (id) => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
  return axios.get(url).then(response => response.data);
};

export const getMoviesByGenreId = (genreId, pageNum) => {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-EN&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}&with_genres=${genreId}`;
  return axios.get(url).then(response => response.data.results);
};

export const getVideos = (id) => {
  const url = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-EN`;
  return axios.get(url).then(response => response.data.results[0]);
};
