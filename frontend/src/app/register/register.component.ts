import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../auth/AuthenticationService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  register() {
    const username = (document.getElementById('username') as HTMLInputElement)
      .value;
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;
      this.registerRequest(username, password).then(res => console.log(res));
    }
  
    async registerRequest(username, password) {
      await this.authService.register(username, password);
    }
}
