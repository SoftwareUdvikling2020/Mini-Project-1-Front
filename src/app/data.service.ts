import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "http://localhost:8080/";

  constructor(private http: HttpClient,) { }

  getCalc(url: string, num: number): Observable<any> {
    return this.http.get<any>(this.url + url + num)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<any>('get', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log("FAAIL")

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
