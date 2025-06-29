import { Component, OnInit }      from '@angular/core';
import { CommonModule }           from '@angular/common';
import { ActivatedRoute }         from '@angular/router';
import { RouterLink }             from '@angular/router';
import { SuggestionService }      from '../../core/services/suggestion.service';
import { Preferences }            from '../../core/models/preferences';
import { Itinerary }              from '../../core/models/itinerary';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink             
  ],
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.scss']
})
export class DestinationDetailComponent implements OnInit {
  id: string = '';
  itinerary: Itinerary = [];

  constructor(
    private route: ActivatedRoute,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    // ID aus der URL
    this.id = this.route.snapshot.paramMap.get('id') || '';

    // Preferences aus History State oder QueryParams
    const prefs =
      (history.state?.preferences as Preferences) ||
      (this.route.snapshot.queryParams as unknown as Preferences);

    if (this.id && prefs) {
      this.suggestionService
        .getItinerary(prefs, this.id)
        .subscribe(data => (this.itinerary = data));
    }
  }
}
