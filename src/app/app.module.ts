import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule
} from '@angular/material';

import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { QrCodeComponent } from './qr-code/qr-code.component';


import { NgxQRCodeModule } from 'ngx-qrcode2';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QrCodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    FormsModule,
    AppRoutingModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
