import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../auth/AuthenticationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    const username = (document.getElementById('username') as HTMLInputElement)
      .value;
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;
    this.loginReguest(username, password).then(res => this.router.navigate(['']));
  }

  async loginReguest(username, password) {
    await this.authService.login(username, password);
  }
}
