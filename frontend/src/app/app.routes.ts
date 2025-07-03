import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing/landing-page.component';
import { PreferencesComponent } from './preferences/preferences.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'preferences', component: PreferencesComponent },

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
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register').then(m => m.RegisterComponent)
  },
  {
    path: 'success',
    loadComponent: () =>
      import('./features/auth/success/success').then(m => m.SuccessComponent)
  },
  {
    path: 'recommendations',
    loadComponent: () =>
      import('./recommendations/recommendations').then(m => m.RecommendationsComponent)
  },
  {
    path: 'recommendation-results',
    loadComponent: () =>
      import('./recommendation-results/recommendation-results').then(m => m.RecommendationResultsComponent)
  },
  {
    path: 'trip-details',
    loadComponent: () =>
      import('./trip-details/trip-details').then(m => m.TripDetailsComponent)
  }
  
  
];

