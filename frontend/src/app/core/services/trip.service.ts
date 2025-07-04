import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  private apiUrl = environment.travelServiceUrl;
  constructor(private http: HttpClient) {}

  saveTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiUrl + 'trips/', trip);
  }

  getTripById(id: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.apiUrl}trips/${id}/`);
  }

  getAllTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiUrl}trips/`);
  }
}
