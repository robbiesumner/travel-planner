import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripService } from '../core/services/trip.service';
import { Trip } from '../core/models/trip';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './trip.html',
  styleUrls: ['./trip.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripComponent implements OnInit {
  trip: Trip | null = null;
  loading = true;
  error: string | null = null;

  constructor(
    private tripService: TripService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tripService.getTripById(id).subscribe({
        next: (trip) => {
          this.trip = trip;
          this.loading = false;
          this.cdr.markForCheck();
        },
        error: (err) => {
          console.error('Failed to load trip', err);
          this.error = 'Failed to load trip.';
          this.loading = false;
          this.cdr.markForCheck();
        },
      });
    } else {
      this.error = 'No trip ID provided.';
      this.loading = false;
      this.cdr.markForCheck();
    }
  }
}
