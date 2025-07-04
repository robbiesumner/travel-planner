import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { Trip } from '../core/models/trip';

import { TripService } from '../core/services/trip.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  trips$!: Observable<Trip[]>;

  constructor(private tripService: TripService, private router: Router) {}

  ngOnInit(): void {
    this.trips$ = this.tripService.getAllTrips();
  }

  openTrip(id: string): void {
    this.router.navigate([`/trip/${id}`]);
  }
}
