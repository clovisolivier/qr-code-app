import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { Token, User } from './models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:3000/auth/sign_in';
  private user: User;

  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string): Observable<Token> {
    const url = `${this.authUrl}`;
    this.user= {email:email, password :password};
    return this.http.post<Token>(url, this.user, httpOptions ).pipe(
      tap(_ => this.log(`fetched token`)),
      catchError(this.handleError<Token>(`Log in as email=${email}`))
    );
    
  };
/*
  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  };
*/
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
