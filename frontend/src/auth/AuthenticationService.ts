import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/model/User';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(username, password) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('' + username + ':' + password + ''),
      }),
    };
    this.http.get('api/user/loginInfo', httpOptions).subscribe((res) => {
      localStorage.setItem('currentUser', JSON.stringify(res));
    });
  }

  async register(username, password) {
    const user = new User();
    user.username = username;
    user.password = password;
    user.userGroup = 'CUSTOMER';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    await this.http.post('/api/user/rergister', JSON.stringify(user), {
      headers: header,
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
