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
import { SearchComponent } from './components/search/search.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './state/effects/movies.effects';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDescriptionComponent,
    MovieViewerComponent,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([MoviesEffects]),
    StoreModule.forRoot({ movies: moviesReducer, router: routerReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
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
