import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {User} from '../user';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }

  token = '';

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


  login(email:string, password:string): void {
    this.token = this.authService.login(email, password);
  } 
}
