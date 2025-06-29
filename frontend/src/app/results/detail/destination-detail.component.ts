import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SuggestionService } from '../../core/services/suggestion.service';
import { Preferences } from '../../core/models/preferences';
import { Itinerary } from '../../core/models/itinerary';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.scss']
})
export class DestinationDetailComponent implements OnInit {
  itinerary: Itinerary = [];

  constructor(
    private route: ActivatedRoute,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    const prefs = (history.state?.preferences as Preferences) || (this.route.snapshot.queryParams as any);
    if (id && prefs) {
      this.suggestionService.getItinerary(prefs, id).subscribe(data => (this.itinerary = data));
    }
  }
}
