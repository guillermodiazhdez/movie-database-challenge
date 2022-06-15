import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PopularMoviesResponse } from 'src/app/models/popular-movies-response.model';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  movies$: Observable<PopularMoviesResponse> = this.store.select(
    (state) => state.movies
  );

  constructor(private store: Store<{ movies: PopularMoviesResponse }>) {}

  ngOnInit() {
    this.store.dispatch({ type: '[Movies] Load Popular Movies' });
  }
}
