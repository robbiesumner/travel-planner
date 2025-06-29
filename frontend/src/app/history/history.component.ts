import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HistoryService } from './history.service';
import { PastTrip } from '../core/models/past-trip';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  trips: PastTrip[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.historyService.getHistory().subscribe(data => (this.trips = data));
  }
}
