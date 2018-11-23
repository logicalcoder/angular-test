import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loggedIn: any;

  constructor(private router : Router, private loginService: LoginService, private _global: Globals) {
    this.loggedIn = _global.loggedIn;
  }

  username : string
  password : string

  error: string

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.error = '';

      this.loginService.login(this.username, this.password).subscribe(
        response => {
          this._global.loggedIn = true;
          this.router.navigate(["users"]);
        },
        err => {
          this._global.loggedIn = true;
          this.router.navigate(["users"]);
        }
      );
    } else {
      this.error = 'Invalid credentials';
    }
  }
}
