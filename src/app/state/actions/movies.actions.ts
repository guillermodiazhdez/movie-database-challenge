import { createAction } from '@ngrx/store';

export const getPopularMovies = createAction('[Movies] Load Popular Movies');
export const getPopularMoviesSuccess = createAction(
  '[Movies] Load Popular Movies Success',
  (movies) => movies
);
