import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {

  }

  register(fullName: string, email: string, password: string): void {
    console.log(fullName, email, password);
  }

}
