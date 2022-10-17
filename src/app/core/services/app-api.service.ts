import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';
import { HeaderList } from '../interfaces/header-list.interface';
import { ConectorApiService } from './conector-api/conector-api.service';

@Injectable({
  providedIn: 'root',
})
export class AppApiService {

  header = new Array<HeaderList>();

  autenticator: HeaderList = {
    value: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')),
    label: 'Authorization',
  };

  constructor(private httpApi: ConectorApiService) {
    this.header.push(this.autenticator);
  }

  getBooksKindle(): Observable<Book[]> {
    return this.httpApi.getApiByHttpClient('/kindle', this.header);
  }

  getBooksKindleByTitle(title: string): Observable<Book[]> {
    return this.httpApi.getApiByHttpClient(`/title/${title}`, this.header);
  }

  getBooksFisics(): Observable<Book[]> {
    return this.httpApi.getApiByHttpClient('/fisico', this.header);
  }

  getPdf(): Observable<Book[]> {
    return this.httpApi.getApiByHttpClient('/pdf', this.header);
  }
  
  getTeses(): Observable<Book[]> {
    return this.httpApi.getApiByHttpClient('/teses', this.header);
  }

  postBookKindle(body: any): Observable<any> {
    return this.httpApi.postApiByHttpClient('/kindle', body);
  }

  postBookFisic(body: any): Observable<any> {
    return this.httpApi.postApiByHttpClient('/fisico', body);
  }

  postPdf(body: any): Observable<any> {
    return this.httpApi.postApiByHttpClient('/pdf', body);
  }

  postTeses(body: any): Observable<any> {
    return this.httpApi.postApiByHttpClient('/teses', body);
  }

  public bookType: string = '';
}
