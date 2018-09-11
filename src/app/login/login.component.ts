import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { SessionService } from '../session.service';
import { FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() errors: Error;

  token : string;

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  password = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(email: string, password: string): void {
    this.authService.login(email, password)
      .subscribe(
        token => {
          this.sessionService.setSession(token);
          this.router.navigate(['qrcode']);
        },
        error => {
          this.errors = error;
        }
      );
  }

}
