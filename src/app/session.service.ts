import { Injectable } from '@angular/core';

import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  public setSession(authResult) {
    //const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('token', authResult.token);
    //localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("token");
    //localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    //return moment().isBefore(this.getExpiration());
    return (this.getSession()!=null);
  }

  getSession(){
    return localStorage.getItem('token');
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
