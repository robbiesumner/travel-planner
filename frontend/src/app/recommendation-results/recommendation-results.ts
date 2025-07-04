import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SuggestionService } from '../core/services/suggestion.service';
import { Destinations } from '../core/models/destination';
import { DestinationPreferences } from '../core/models/travelConfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendation-results',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './recommendation-results.html',
  styleUrls: ['./recommendation-results.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationResultsComponent {
  private suggestionService = inject(SuggestionService);
  destinations: Destinations = history.state.recommendations || [];
  private config: DestinationPreferences = history.state?.config || {};

  loading: boolean = false;

  constructor(private router: Router) {}

  getDetails(destination: string): void {
    this.loading = true;
    this.suggestionService
      .getTrip({
        destination: destination,
        ...this.config,
      })
      .subscribe({
        next: (trip) => {
          this.loading = false;
          this.router.navigate(['/trip-details'], {
            state: { trip: trip },
          });
        },
        error: (err) => {
          this.loading = false;
          console.error('Error fetching trip details:', err);
        },
      });
  }
}
