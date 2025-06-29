import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PastTrip } from '../core/models/past-trip';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  constructor(private http: HttpClient) {}

  getHistory(): Observable<PastTrip[]> {
    return this.http.get<PastTrip[]>('/api/history');
  }
}
