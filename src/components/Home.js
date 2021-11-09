import React from 'react';
// config
// POSTER_SIZE
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../services/config';
// Components
import HeroImage from './HeroImage';
// Hook
import useHomeFetch from './hooks/useHomeFetch';
// Image
// import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state, loading, error);
  return (
    <>
      {state.rsults[0]
        ? (
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.rsults[0].original_title}
            text={state.results[0].overview}
          />
        )
        : null}
    </>
  );
};

export default Home;
