import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'http://localhost:8001/auth'; // Update with your OAuth2 endpoint

  constructor(private http: HttpClient) {}

  register(
    username: string,
    fullName: string,
    password: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = {
      username: username,
      full_name: fullName,
      password: password,
    };
    return this.http.post<any>(this.authUrl + '/register', body, { headers });
  }

  login(username: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', 'password');
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    return this.http.post<any>(this.authUrl + '/token', body.toString(), {
      headers,
    });
  }
}
