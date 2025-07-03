import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Trip } from '../core/models/trip';

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
}
