import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from './state/reducers/movies.reducer';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { MovieDescriptionComponent } from './components/movie-description/movie-description.component';
import { MovieViewerComponent } from './components/movie-viewer/movie-viewer.component';
import { HeaderComponent } from './components/header/header.component';

import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDescriptionComponent,
    MovieViewerComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ movies: moviesReducer, router: routerReducer }),
    RouterModule.forRoot([
      {
        path: ':movieId',
        component: MovieDescriptionComponent,
      },
    ]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
