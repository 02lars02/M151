import { Component } from '@angular/core';
import { AuthenticationService } from 'src/auth/AuthenticationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'webshop';

  constructor(private authService: AuthenticationService) {}
  logout() {
    this.authService.logout();
  }
}
