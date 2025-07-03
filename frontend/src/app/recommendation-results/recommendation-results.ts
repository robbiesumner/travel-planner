import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-recommendation-results',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './recommendation-results.html',
  styleUrls: ['./recommendation-results.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendationResultsComponent {
  destinations = [
    {
      name: 'Rügen Island, Germany',
      description: 'Germany\'s largest island in the Baltic Sea, Rügen offers wide sandy beaches backed by dramatic chalk cliffs...'
    },
    {
      name: 'Sopot, Poland',
      description: 'A charming seaside resort town on the Polish Baltic coast, Sopot is renowned for its long wooden pier...'
    },
    {
      name: 'Skåne Coast, Sweden',
      description: 'The southern coast of Sweden, particularly the Skåne region, features long, pristine sandy beaches...'
    },
    {
      name: 'Bornholm, Denmark',
      description: 'This Danish island in the Baltic Sea is known for its rugged coastline, charming fishing villages...'
    },
    {
      name: 'Saaremaa Island, Estonia',
      description: 'Estonia\'s largest island, Saaremaa, boasts a rugged coastline with sandy and stony beaches...'
    }
  ];

  getDetails(destination: any): void {
    console.log('Trip details requested for:', destination.name);
    // Optional: navigate to a detail view or open a modal
  }
}
