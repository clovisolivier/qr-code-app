import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {

 
  value = 'Sivolvitch';

  constructor( 
    private sessionService: SessionService, 
    private router: Router) { 

    //Check if user is logged in  
    if(sessionService.isLoggedOut()){
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    
  }

}
