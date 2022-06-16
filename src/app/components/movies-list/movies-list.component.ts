import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PopularMovie } from 'src/app/models/popular-movie.model';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
  @Input() movies: ReadonlyArray<PopularMovie> | null = [];
  @Output() select = new EventEmitter<number>();
}
