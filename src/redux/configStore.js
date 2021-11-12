import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { moviesReducer } from './movies';

const reducer = combineReducers({
  movies: moviesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
