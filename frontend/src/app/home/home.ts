import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  savedTrips = [
    {
      id: 'trip-001',
      destination: 'Paris',
      duration_days: 3,
      itinerary: [{ day: 1, activities: ['...'], notes: '...' }],
      tips: ['...']
    },
    {
      id: 'trip-002',
      destination: 'Sopot',
      duration_days: 2,
      itinerary: [],
      tips: []
    }
  ];

  constructor(private router: Router) {}

  openTrip(id: string): void {
    this.router.navigate(['/trip-details'], { queryParams: { id } });
  }
}
