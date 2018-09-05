import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private authService: AuthService,
    private router: Router,
  ) {
    //If user is logged, auto redirection to qrcode
    if(authService.isLoggedIn()){
      this.router.navigate(['qrcode']);
    }

  }

  title = 'QR Code';
  

  

}
