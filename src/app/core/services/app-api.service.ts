import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';
import { ConectorApiService } from './conector-api/conector-api.service';

@Injectable({
  providedIn: 'root'
})
export class AppApiService {
  constructor(private httpApi: ConectorApiService) { }

  getBooksKindle(): Observable<Book[]> {
    return this.httpApi.getApiByHttpClient("/kindle");
  }

  getBooksFisics(): Observable<Book[]> {
    return this.httpApi.getApiByHttpClient("/fisico");
  }

  getPdf(): Observable<Book[]> {
    return this.httpApi.getApiByHttpClient("/pdf");
  }

  getTeses(): Observable<Book[]> {
    return this.httpApi.getApiByHttpClient("/teses");
  }

  postBookKindle(body: any): Observable<any> {
    return this.httpApi.postApiByHttpClient("/kindle", body)
  }

  postBookFisic(body: any): Observable<any> {
    return this.httpApi.postApiByHttpClient("/fisico", body)
  }

  postPdf(body: any): Observable<any> {
    return this.httpApi.postApiByHttpClient("/pdf", body)
  }

  postTeses(body: any): Observable<any> {
    return this.httpApi.postApiByHttpClient("/teses", body)
  }

  public bookType: string = "";
  
}