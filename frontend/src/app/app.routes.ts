import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing/landing-page.component';
import { PreferencesComponent } from './preferences/preferences.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'preferences', component: PreferencesComponent }
];
