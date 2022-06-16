import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PopularMovie } from '../models/popular-movie.model';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Array<PopularMovie>> {
    return this.http
      .get<{ results: PopularMovie[] }>(
        'https://api.themoviedb.org/3/movie/popular?api_key=3fa4fbacaa2e7abb78ef691e344b6c3b&language=en-US&page=1'
      )
      .pipe(map((fetchedMovies) => fetchedMovies.results || []));
  }
}
