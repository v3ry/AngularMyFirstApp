import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighLightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { DisplayMoviesDirective } from './display-movies.directive';

@NgModule({
  declarations: [
    AppComponent,
    MonComposantComponent,
    UserProfileComponent,
    HighLightDirective,
    DisplayGuestsDirective,
    DisplayMoviesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
