import { createReducer, on } from '@ngrx/store';
import { PopularMoviesResponse } from '../../models/popular-movies-response.model';
import { PopularMovie } from '../../models/popular-movie.model';
import {
  getPopularMovies,
  getPopularMoviesSuccess,
} from '../actions/movies.actions';

export interface MovieState {
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: MovieState = {
  error: null,
  status: 'pending',
};

export const movieReducer = createReducer(
  initialState,
  // loading the popular movies
  // on(getPopularMovies, (state) => ({ ...state, status: 'loading' })),
  // Handle successfully loaded movies
  on(
    getPopularMoviesSuccess,
    (state, { page, results, total_results, total_pages }) => ({
      page: page,
      results: results,
      total_results: total_results,
      total_pages: total_pages,
      error: null,
      status: 'success',
    })
  )

  // // Handle todos load failure
  // on(loadTodosFailure, (state, { error }) => ({
  //   ...state,
  //   error: error,
  //   status: 'error',
  // }))
);
