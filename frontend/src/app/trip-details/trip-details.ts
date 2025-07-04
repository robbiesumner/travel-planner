import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Trip } from '../core/models/trip';
import { TripService } from '../core/services/trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './trip-details.html',
  styleUrls: ['./trip-details.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripDetailsComponent {
  trip: Trip = history.state.trip;

  constructor(private tripService: TripService, private router: Router) {}

  saveTrip() {
    this.tripService.saveTrip(this.trip).subscribe({
      next: (savedTrip) => {
        console.log('Trip saved successfully:', savedTrip);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error saving trip:', error);
        // Handle the error appropriately, e.g., show an error message
      },
    });
  }
}
