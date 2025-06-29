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
  }
];
