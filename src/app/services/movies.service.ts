import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=3fa4fbacaa2e7abb78ef691e344b6c3b&language=en-US&page=1'
    );
  }
}
