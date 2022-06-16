import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectMovie } from 'src/app/state/selectors/movie.selectors';

@Component({
  selector: 'movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss'],
})
export class MovieDescriptionComponent {
  movie$ = this.store.select(selectMovie);

  constructor(private store: Store) {}
}
