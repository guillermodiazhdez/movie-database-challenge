import { PopularMovie } from '../models/popular-movie.model';

export interface AppState {
  movies: ReadonlyArray<PopularMovie>;
  movie: PopularMovie;
}
