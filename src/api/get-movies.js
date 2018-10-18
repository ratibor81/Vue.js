import axios from 'axios';

const API_KEY = '532f680f186ee3009db06b2e2efe9aab';
const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_URL_2 = 'https://api.themoviedb.org/3/search/movie';

export const fetchMovies = (page) => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-EN&page=${page}`;

  return axios.get(url).then(response => response.data.results);
};

export const searchMovie = (title, page) => {
  const url = `${BASE_URL_2}?api_key=${API_KEY}&language=en-EN&query=${title}&page=${page}`;

  return axios.get(url).then(response => response.data.results);
};
