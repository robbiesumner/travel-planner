import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing/landing-page.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { RegisterComponent } from './features/auth/register/register';
import { LoginComponent } from './features/auth/login/login';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'preferences', component: PreferencesComponent },

  { path: '', component: RegisterComponent },
  { path: 'register', component: RegisterComponent},

  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
