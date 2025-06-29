import { Routes }                  from '@angular/router';
import { LandingPageComponent }    from './landing/landing-page.component';
import { PreferencesComponent }    from './preferences/preferences.component';
import { DestinationsComponent }   from './results/destinations.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: 'results', component: DestinationsComponent },
  { path: 'results/:id', component: DestinationsComponent }
];
