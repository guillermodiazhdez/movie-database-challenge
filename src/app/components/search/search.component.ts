import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() queryCreated = new EventEmitter<string>();

  searchFieldChanged(query: string) {
    this.queryCreated.emit(query);
    // this.moviesService
    //   .getMovies()
    //   .subscribe((movies) =>
    //     this.store.dispatch(retrievedMovieListFiltered({ movies, query }))
    //   );
  }
}
