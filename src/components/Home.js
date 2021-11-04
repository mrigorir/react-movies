import React from 'react';
// config
// POSTER_SIZE
// import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../services/config';
// Components
// import HeroImage from './HeroImage';
// Hook
import useHomeFetch from './hooks/useHomeFetch';
// Image
// import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state, loading, error);
  return (
    <>
      <h1>
        dilo
      </h1>
    </>
  );
};

export default Home;
