import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { SuggestionService } from '../core/services/suggestion.service';
import { Destinations } from '../core/models/destination';
import { inject } from '@angular/core';
import { DestinationPreferences } from '../core/models/travelConfig';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  templateUrl: './recommendations.html',
  styleUrls: ['./recommendations.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationsComponent {
  residency: string = '';
  cost: number = 100;
  durationDays: number = 7;
  destinationType: string = '';
  temperature: number = 20;
  recommendations: Destinations = [];
  private suggestionService = inject(SuggestionService);

  constructor(private router: Router) {}

  submit(): void {
    const prefs: DestinationPreferences = {
      residency: this.residency,
      cost: this.cost,
      duration_days: this.durationDays,
      destination_type: this.destinationType,
      temperature: this.temperature,
    };
    this.suggestionService.getDestinations(prefs).subscribe({
      next: (results) => {
        // redirect to recommendations page with results
        this.router.navigate(['/recommendation-results'], {
          state: { recommendations: results, config: prefs },
        });
      },
      error: (err) => {
        console.error('API error:', err);
      },
    });
  }
}
