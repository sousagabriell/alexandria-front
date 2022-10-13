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

  getBookKindleById(id: number): Observable<Book> {
    return this.httpApi.get<Book>("/kindle", { 'id': id })
  }

  postBookFisic(body: any): Observable<any> {
    return this.httpApi.post("/fisico", body)
  }

  public bookType: string = "";



}
