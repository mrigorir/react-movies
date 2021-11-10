import axios from 'axios';
import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
} from './config';

const fetchMovies = async (page, searchTerm = '') => {
  const endpoint = searchTerm ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;
  const response = await axios.get(endpoint);
  const { data } = response;
  console.log(await data);
};

export default fetchMovies;
