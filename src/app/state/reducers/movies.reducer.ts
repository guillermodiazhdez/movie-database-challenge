import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PopularMovie } from 'src/app/models/popular-movie.model';
import {
  loadMoviesSuccess,
  retrievedMovieList,
} from '../actions/movies.actions';

export type PopularMovieState = EntityState<PopularMovie>;

export const movieAdapter = createEntityAdapter<PopularMovie>({
  selectId: (movie) => movie.id,
});

const initialState = movieAdapter.getInitialState();

export const moviesReducer = createReducer<PopularMovieState>(
  initialState,
  on(loadMoviesSuccess, (state, { movies }) =>
    movieAdapter.addMany(movies, state)
  )
);
