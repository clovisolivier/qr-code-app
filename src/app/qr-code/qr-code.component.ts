import { Component, OnInit, Input } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {


  json = {email:'', unique:''};
  value = '';

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {

    //Check if user is logged in  
    if (sessionService.isLoggedOut()) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.sessionService.getSession());
    this.json.email = decodedToken.email;
    // encoded Base 64
    this.value = btoa(JSON.stringify(this.json));
    //console.log(this.value);
  }

}
