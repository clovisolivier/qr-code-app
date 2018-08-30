import { Injectable } from '@angular/core';


import { Observable, of } from 'rxjs';

import {catchError, map, tap} from'rxjs/operators';

import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
/** 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  */
  private authUrl = 'api/auth';

  constructor(
  ) {  }

  login(user : User) : String {
    return 'msE7ayYMbFquqlRZpKZDTRBgBfMUCZ6R7TUH';
  };


    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
