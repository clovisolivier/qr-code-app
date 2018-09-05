import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {

 
  value = 'Sivolvitch';

  constructor( 
    private authService: AuthService, 
    private router: Router) { 

    //Check if user is logged in  
    if(authService.isLoggedOut()){
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    
  }

}
