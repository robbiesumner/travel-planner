import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing/landing-page.component';
import { PreferencesComponent } from './preferences/preferences.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'preferences', component: PreferencesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
