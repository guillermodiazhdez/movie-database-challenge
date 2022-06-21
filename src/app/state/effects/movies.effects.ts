import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import {
  loadMovies,
  loadMoviesError,
  loadMoviesSuccess,
} from '../actions/movies.actions';

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      mergeMap(() =>
        this.moviesService.getMovies().pipe(
          map((movies) => loadMoviesSuccess({ movies })),
          catchError(() => of(loadMoviesError()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
