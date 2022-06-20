import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PopularMovie } from 'src/app/models/popular-movie.model';
import {
  retrievedMovieList,
  retrievedMovieListFiltered,
} from '../actions/movies.actions';

export type PopularMovieState = EntityState<PopularMovie>;

export const movieAdapter = createEntityAdapter<PopularMovie>({
  selectId: (movie) => movie.id,
});

const initialState = movieAdapter.getInitialState();

export const moviesReducer = createReducer<PopularMovieState>(
  initialState,
  on(retrievedMovieList, (state, { movies }) =>
    movieAdapter.addMany(movies, state)
  ),
  on(retrievedMovieListFiltered, (state, { movies, query }) =>
    movieAdapter.setAll(
      movies.filter((movie) => movie.title.includes(query)),
      { ...state }
    )
  )
);
