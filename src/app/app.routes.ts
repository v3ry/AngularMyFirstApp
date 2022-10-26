import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { DevelopperComponent } from './developper/developper.component';
import { MyFormComponent } from './my-form/my-form.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'search', component: SearchMovieComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'myform', component: MyFormComponent },
  { path: 'child', component: ChildComponent },
  { path: 'dev', component: DevelopperComponent },
  { path: '', component: UserProfileComponent },
];

export { ROUTES };