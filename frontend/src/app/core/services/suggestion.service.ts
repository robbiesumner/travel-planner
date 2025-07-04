import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DestinationPreferences, TravelConfig } from '../models/travelConfig';
import { Destinations } from '../models/destination';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  private apiUrl = 'http://localhost:8000/';
  constructor(private http: HttpClient) {}

  getDestinations(prefs: DestinationPreferences): Observable<Destinations> {
    return this.http.post<Destinations>(
      this.apiUrl + 'recommendations/destinations/',
      prefs
    );
  }

  getTrip(prefs: TravelConfig): Observable<Trip> {
    return this.http.post<Trip>(this.apiUrl + 'recommendations/trip/', prefs);
  }
}
