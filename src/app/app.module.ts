import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighLightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { DisplayMoviesDirective } from './display-movies.directive';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';

import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MonComposantComponent,
    UserProfileComponent,
    HighLightDirective,
    DisplayGuestsDirective,
    DisplayMoviesDirective,
    SignUpComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
