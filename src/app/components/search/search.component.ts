import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MoviesService } from 'src/app/services/movies.service';
import { retrievedMovieListFiltered } from 'src/app/state/actions/movies.actions';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private moviesService: MoviesService, private store: Store) {}

  searchFieldChanged(query: string) {
    this.moviesService
      .getMovies()
      .subscribe((movies) =>
        this.store.dispatch(retrievedMovieListFiltered({ movies, query }))
      );
  }
}
