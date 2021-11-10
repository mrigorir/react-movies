import React from 'react';
import fetchMovies from '../services/API';
// config
// POSTER_SIZE
// import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../services/config';
// Components
// import HeroImage from './HeroImage';
// Hook
// import useHomeFetch from './hooks/useHomeFetch';
// Image
// import NoImage from '../images/no_image.jpg';

const Home = () => {
  console.log(fetchMovies());
  return (
    <h1>Home</h1>
  );
};

export default Home;
