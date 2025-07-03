import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing/landing-page.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { RegisterComponent } from './features/auth/register/register';
import { LoginComponent } from './features/auth/login/login';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'preferences', component: PreferencesComponent },

  { path: '', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'results',
    loadComponent: () =>
      import('./results/destinations.component').then(m => m.DestinationsComponent)
  },
  {
    path: 'results/:id',
    loadComponent: () =>
      import('./results/detail/destination-detail.component').then(
        m => m.DestinationDetailComponent
      )
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./history/history.component').then(m => m.HistoryComponent)
  },
  {
    path: 'success',
    loadComponent: () =>
      import('./features/auth/success/success').then(m => m.SuccessComponent)
  }
];

