import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { catchError, shareReplay } from 'rxjs/operators';

import * as queryString from 'query-string';

import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { generalError } from '../store/app.actions';


@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private http: HttpClient, private storeApp: Store<{ app: any }>) { }

  get<payloadT>(endPointUrl: string, payload?: any): Observable<payloadT> {
    const params = payload
      ? new HttpParams({
        fromString: queryString.stringify(payload, { skipNull: true }),
      })
      : {};

    return new Observable((observer) => {
      this.http
        .get<payloadT>(environment.baseUrl + endPointUrl, {
          params
        })
        .pipe(shareReplay(), catchError((error) => this.handleError(error)))
        .subscribe((res: any) => {
          res?.error ? observer.error(res.error) : observer.next(res);
          observer.complete();
        });
    });
  }

  put<payloadT>(endPointUrl: string, payload: any): Observable<any> {
    return new Observable((observer) => {
      this.http
        .put<payloadT>(
          `${environment.baseUrl}/${endPointUrl}`,
          payload,
        )
        .pipe(shareReplay(), catchError((error) =>
          this.handleError(error)
        ))
        .subscribe((res: any) => {
          res?.error ? observer.error(res.error) : observer.next(res);
          observer.complete();
        });
    });
  }

  post<payloadT>(endPointUrl: string, payload: any): Observable<any> {
    return new Observable((observer) => {
      this.http
        .post<payloadT>(
          `${environment.baseUrl}/${endPointUrl}`,
          payload
        )
        .pipe(catchError((error) =>
          this.handleError(error)
        ))
        .subscribe((res: any) => {
          res?.error ? observer.error(res.error) : observer.next(res);
          observer.complete();
        });
    });
  }

  handleError(error: string) {
    this.storeApp.dispatch(
      generalError({ data: { isErro: true, errorMessagr: error } })
    );
    return of({
      error
    })
  }
}