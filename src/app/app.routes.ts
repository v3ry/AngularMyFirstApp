import { Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'myform', component: MyFormComponent },
  { path: '', component: UserProfileComponent },
];

export { ROUTES };