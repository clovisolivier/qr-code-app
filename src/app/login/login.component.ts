import { Component, OnInit, Input } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../auth.service';
import { SessionService } from '../session.service';
import { FormControl, Validators } from '@angular/forms';
import { Token } from '../models';


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
    private sessionService: SessionService
  ) { }

  ngOnInit() {
  }

  login(email: string, password: string): void {
    this.authService.login(email, password)
      .subscribe(
        token => {
          this.sessionService.setSession(token);
          this.token = this.sessionService.getSession();
          console.log(this.token);
          const helper = new JwtHelperService();

          const decodedToken = helper.decodeToken(this.token);
          console.log(decodedToken);
        },
        error => {
          this.errors = error;
        }
      );
  }

}
