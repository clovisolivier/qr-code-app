import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


import { AuthService } from '../auth.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() errors: Error;
  private _success = new Subject<string>();
  successMessage: string;
  private _fail = new Subject<string>();
  failMessage: string;

  name = new FormControl('', [
    Validators.required,
  ]);

  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  password = new FormControl('', [
    Validators.required,
  ]);

  confirmPassword = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(3000)
    ).subscribe(() => {
      this.successMessage = null
      // this.router.navigate(['qrcode'])
    }
    );

    this._fail.subscribe((message) => this.failMessage = message);
    this._fail.pipe(
      debounceTime(5000)
    ).subscribe(() => this.failMessage = null);
  }


  register(fullName: string, email: string, password: string): void {
    console.log(fullName, email, password);
    this.authService.register(fullName, email, password)
      .subscribe(
        user => {
          //  this.sessionService.setSession(token);
          this._success.next(`User registered !`);
        },
        error => {
          this.errors = error;
          this._fail.next(`Registration failed !`);
        }
      );
  }
}


