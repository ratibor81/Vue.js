import axios from 'axios';

const API_KEY = '532f680f186ee3009db06b2e2efe9aab';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (page) => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-EN&page=${page}`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    return JSON.parse(error);
  }
};

export const searchMovie = async (title, page) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-EN&query=${title}&page=${page}`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    return JSON.parse(error);
  }
};

export const searchById = async (id) => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return JSON.parse(error);
  }
};

export const getMoviesByGenreId = async (genreId, pageNum) => {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-EN&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}&with_genres=${genreId}`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    return JSON.parse(error);
  }
};

export const getVideos = async (id) => {
  const url = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-EN`;
  try {
    const response = await axios.get(url);
    return response.data.results[0];
  } catch (error) {
    return JSON.parse(error);
  }
};
