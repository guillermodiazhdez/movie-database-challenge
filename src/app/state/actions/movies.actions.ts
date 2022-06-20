import { createAction, props } from '@ngrx/store';
import { PopularMovie } from 'src/app/models/popular-movie.model';

export const retrievedMovieList = createAction(
  '[Movies list] Retrieve Popular Movies',
  props<{ movies: PopularMovie[] }>()
);

// export const retrievedMovieListFiltered = createAction(
//   '[Movies list] Search Popular Movie',
//   props<{ movies: PopularMovie[]; query: string }>()
// );
