import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(username, password) {
      // TODO:
  }

  register(username, password) {
      // TODO:
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
