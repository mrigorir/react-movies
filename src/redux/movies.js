import fetchMovies from "../services/API";

//default
const initialState = [
  {
    pages: 0,
    results: 0,
    total_pages: 0,
    total_results: 0,
  }
];

//pattern
const FETCH_MOVIES = 'react-movies/movies/FETCH_MOVIES';

//actions
const fetchMoviesActions = () => async (dispatch) => {
  const movies = await fetchMovies();
  dispatch({
    type: FETCH_MOVIES,
    payload: movies,
  });
};

//reducers
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      const outcome = action.payload.page > 1 ? [...state, ...action.payload] : [...action.payload];
      return outcome;
    default:
      return state;
  }
};

export default moviesReducer;