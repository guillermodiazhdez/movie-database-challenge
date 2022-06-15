import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './state/effects/movies.effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from './state/reducers/movies.reducer';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { MovieDescriptionComponent } from './components/movie-description/movie-description.component';
import { MovieViewerComponent } from './components/movie-viewer/movie-viewer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, MoviesListComponent, MovieDescriptionComponent, MovieViewerComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ movies: movieReducer }),
    EffectsModule.forRoot([MoviesEffects]),
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
