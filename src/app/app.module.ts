import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighLightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { DisplayMoviesDirective } from './display-movies.directive';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';

import { ROUTES } from './app.routes';
import { MyFormComponent } from './my-form/my-form.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { ChildComponent } from './child/child.component';
import { AppMagicOvenComponent } from './app-magic-oven/app-magic-oven.component';
import { DevelopperComponent } from './developper/developper.component';
import { SkillComponent } from './skill/skill.component';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';



@NgModule({
  declarations: [
    AppComponent,
    MonComposantComponent,
    UserProfileComponent,
    HighLightDirective,
    DisplayGuestsDirective,
    DisplayMoviesDirective,
    SignUpComponent,
    MenuComponent,
    MyFormComponent,
    SearchMovieComponent,
    ChildComponent,
    AppMagicOvenComponent,
    DevelopperComponent,
    SkillComponent,
    CreateOnomatopiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
