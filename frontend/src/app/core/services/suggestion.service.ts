import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Preferences } from '../models/preferences';
import { Destination } from '../models/destination';
import { Itinerary } from '../models/itinerary';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  constructor(private http: HttpClient) {}

  getSuggestions(prefs: Preferences): Observable<Destination[]> {
    return this.http.post<Destination[]>('/api/suggestions', prefs);
  }

  getItinerary(prefs: Preferences, id: string): Observable<Itinerary> {
    return this.http.post<Itinerary>('/api/itinerary', { id, prefs });
  }
}
