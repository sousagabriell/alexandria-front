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
    return this.httpApi.get<Book[]>("/livroskindle");
  }
  
  getBooksFisics(): Observable<Book[]> {
    return this.httpApi.get<Book[]>("/livrosfisicos");
  }

  getBookKindleById(id: number): Observable<Book> {
    return this.httpApi.get<Book>("/livroskindle/id", { 'id': id })
  }

  getBooksFisicsById(id: number): Observable<Book> {
    return this.httpApi.get<Book>("/livrosfisicos/id", { 'id': id })
  }



}
