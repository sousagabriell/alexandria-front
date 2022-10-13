import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class AppApiService {

  constructor(private httpApi: HttpApiService) { }

  getBooksKindle(): Observable<Book[]> {
    return this.httpApi.get<Book[]>("/kindle");
  }

  getBooksFisics(): Observable<Book[]> {
    return this.httpApi.get<Book[]>("/fisico");
  }

  getPdf(): Observable<Book[]> {
    return this.httpApi.get<Book[]>("/pdf");
  }

  getTeses(): Observable<Book[]> {
    return this.httpApi.get<Book[]>("/teses");
  }

  postBookKindle(body: any): Observable<any> {
    return this.httpApi.post("/kindle", body)
  }

  postBookFisic(body: any): Observable<any> {
    return this.httpApi.post("/fisico", body)
  }

  postPdf(body: any): Observable<any> {
    return this.httpApi.post("/pdf", body)
  }

  postTeses(body: any): Observable<any> {
    return this.httpApi.post("/teses", body)
  }

  public bookType: string = "";

}
