import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {User} from '../user';

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
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  login(email:string, password:string): void {
    this.token = this.authService.login(email, password);
  } 
}
