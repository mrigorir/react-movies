import axios from 'axios';
import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
} from './config';

const fetchMovies = async (pag, searchTerm = '') => {
  // {page: 1, results: Array(20), total_pages: 500, total_results: 10000}
  const endpoint = searchTerm ? `${SEARCH_BASE_URL}${searchTerm}&page=${pag}` : `${POPULAR_BASE_URL}&page=${pag}`;
  const response = await axios.get(endpoint);
  const { data } = response;
  const movies = [];
  movies.push({
    page: data.page,
    results: data.results,
    totalPages: data.total_pages,
    totalResults: data.total_results,
  });
  return movies;
};

export default fetchMovies;
