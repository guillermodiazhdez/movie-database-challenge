import { PopularMovie } from './popular-movie.model';

export interface PopularMoviesResponse {
  page: number;
  results: PopularMovie[];
  total_results: number;
  total_pages: number;
}
