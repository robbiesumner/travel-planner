import { Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register';
import { LoginComponent } from './features/auth/login/login';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  // if is logged in, redirect to recommendations, otherwise to login page
  {
    path: '',
    component:
      localStorage.getItem('isLoggedIn') === 'true'
        ? HomeComponent
        : LoginComponent,
  },

  { path: '', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'success',
    loadComponent: () =>
      import('./features/auth/success/success').then((m) => m.SuccessComponent),
  },
  {
    path: 'recommendations',
    loadComponent: () =>
      import('./recommendations/recommendations').then(
        (m) => m.RecommendationsComponent
      ),
  },
  {
    path: 'recommendation-results',
    loadComponent: () =>
      import('./recommendation-results/recommendation-results').then(
        (m) => m.RecommendationResultsComponent
      ),
  },
  {
    path: 'trip-details',
    loadComponent: () =>
      import('./trip-details/trip-details').then((m) => m.TripDetailsComponent),
  },
    {
    path: 'home',
    loadComponent: () =>
      import('./home/home').then((m) => m.HomeComponent),
  },
];

