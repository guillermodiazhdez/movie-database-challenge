import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MoviesService } from 'src/app/services/movies.service';
import { loadMovies } from 'src/app/state/actions/movies.actions';
import {
  selectFilteredMovies,
  selectMovies,
} from 'src/app/state/selectors/movie.selectors';

@Component({
  selector: 'movie-viewer',
  templateUrl: './movie-viewer.component.html',
  styleUrls: ['./movie-viewer.component.scss'],
})
export class MovieViewerComponent implements OnInit {
  movies$ = this.store.select(selectMovies);
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadMovies());
  }

  onQueryCreated(query: string) {
    this.movies$ = this.store.select(selectFilteredMovies(query));
  }
}
