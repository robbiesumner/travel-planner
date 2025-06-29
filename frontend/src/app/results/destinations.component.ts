import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { SuggestionService } from '../core/services/suggestion.service';
import { Destination } from '../core/models/destination';
import { Preferences } from '../core/models/preferences';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss'
})
export class DestinationsComponent implements OnInit {
  destinations: Destination[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit() {
    const statePrefs = this.router.getCurrentNavigation()?.extras.state as { prefs?: Preferences };
    const prefs: Preferences | undefined = statePrefs?.prefs || (this.route.snapshot.queryParams as any);
    if (prefs) {
      this.suggestionService.getSuggestions(prefs).subscribe(data => this.destinations = data);
    }
  }

  openDetails(id: string) {
    this.router.navigate(['/results', id]);
  }
}
