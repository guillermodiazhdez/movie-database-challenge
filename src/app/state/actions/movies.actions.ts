import { createAction, props } from '@ngrx/store';
import { PopularMovie } from 'src/app/models/popular-movie.model';

export const loadMovies = createAction('[Movies List] Load Movies');
export const loadMoviesSuccess = createAction(
  '[Movies List] Load Movies Success',
  props<{ movies: PopularMovie[] }>()
);
export const loadMoviesError = createAction('[Movies List] Load Movies Error');

// export const retrievedMovieListFiltered = createAction(
//   '[Movies list] Search Popular Movie',
//   props<{ movies: PopularMovie[]; query: string }>()
// );
