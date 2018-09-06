import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, Validators } from '@angular/forms';
import { Token } from '../models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() token: Token;
  @Input() errors: Error;

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  password = new FormControl('', [
    Validators.required,
  ]);

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(email: string, password: string): void {
    this.authService.login(email, password)
      .subscribe(
        token => {
          this.token = token
        },
        error => {
          this.errors = error;
        }
      );
  }

}
