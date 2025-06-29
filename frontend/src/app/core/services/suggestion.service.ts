import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Preferences } from '../models/preferences';
import { Destination } from '../models/destination';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  constructor(private http: HttpClient) {}

  getSuggestions(prefs: Preferences): Observable<Destination[]> {
    return this.http.post<Destination[]>('/api/suggestions', prefs);
  }
}
