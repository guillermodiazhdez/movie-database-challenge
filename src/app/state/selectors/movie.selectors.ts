import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PopularMovie } from 'src/app/models/popular-movie.model';
import { selectRouteParams } from '../../router-selectors';
import { movieAdapter, PopularMovieState } from '../reducers/movies.reducer';

export const moviesFeatureSelector =
  createFeatureSelector<PopularMovieState>('movies');

const { selectEntities, selectAll } = movieAdapter.getSelectors();

export const selectMoviesEntities = createSelector(
  moviesFeatureSelector,
  selectEntities
);

export const selectMovies = createSelector(moviesFeatureSelector, selectAll);

export const selectMovie = createSelector(
  selectMoviesEntities,
  selectRouteParams,
  (movies, { movieId }) => movies[movieId]
);
