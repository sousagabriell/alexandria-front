import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';
import { HeaderList } from '../interfaces/header-list.interface';
import { ParametersList } from '../interfaces/parameter-list.interface';
import { ConectorApiService } from './conector-api/conector-api.service';

@Injectable({
  providedIn: 'root',
})
export class AppApiService {
  header = new Array<HeaderList>();
  username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');
  autenticator: HeaderList = {
    value: 'Basic ' + btoa(this.username + ':' + this.password),
    label: 'Authorization',
  };

  constructor(private httpApi: ConectorApiService) {
    this.header.push(this.autenticator);
  }

  getBooksKindleByTitle(title: string): Observable<Book[]> {
    return this.httpApi.getApiByHttpClient(
      `/kindle/title/${title}`,
      this.header
    );
  }

  getBooksKindle(): Observable<Book[]> {
    return this.httpApi.getApiByHttpClient('/kindle', this.header);
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

  getBooksKindleById(id: number): Observable<Book[]> {
    let paramId: ParametersList = {
      value: id.toString(),
      label: 'id',
    };
    return this.httpApi.getApiByHttpClient('/kindle', this.header, [paramId]);
  }

  getBooksFisicsById(id: number): Observable<Book[]> {
    let paramId: ParametersList = {
      value: id.toString(),
      label: 'id',
    };
    return this.httpApi.getApiByHttpClient('/fisico/' + id, this.header, [
      paramId,
    ]);
  }

  getPdfById(id: number): Observable<Book[]> {
    let paramId: ParametersList = {
      value: id.toString(),
      label: 'id',
    };
    return this.httpApi.getApiByHttpClient('/pdf/' + id, this.header, [
      paramId,
    ]);
  }

  getTesesById(id: number): Observable<Book[]> {
    let paramId: ParametersList = {
      value: id.toString(),
      label: 'id',
    };
    return this.httpApi.getApiByHttpClient('/teses/' + id, this.header, [
      paramId,
    ]);
  }

  postBookKindle(body: any): Observable<any> {
    return this.httpApi.postApiByHttpClient('/kindle', body, this.header);
  }

  postBookFisic(body: any): Observable<any> {
    return this.httpApi.postApiByHttpClient('/fisico', body, this.header);
  }

  postPdf(body: any): Observable<any> {
    return this.httpApi.postApiByHttpClient('/pdf', body, this.header);
  }

  postTeses(body: any): Observable<any> {
    return this.httpApi.postApiByHttpClient('/teses', body, this.header);
  }

  putBookKindle(body: any): Observable<any> {
    return this.httpApi.putApiByHttpClient('/kindle', body, this.header);
  }

  putBookFisic(body: any): Observable<any> {
    return this.httpApi.putApiByHttpClient('/fisico', body, this.header);
  }

  putPdf(body: any): Observable<any> {
    return this.httpApi.putApiByHttpClient('/pdf', body, this.header);
  }

  putTeses(body: any): Observable<any> {
    return this.httpApi.putApiByHttpClient('/teses', body, this.header);
  }

  deleteBookKindle(id: number): Observable<Book[]> {
    return this.httpApi.deleteApiByHttpClient(`/kindle/${id}`, this.header);
  }

  deleteBookFisic(id: number): Observable<Book[]> {
    return this.httpApi.deleteApiByHttpClient(`/fisico/${id}`, this.header);
  }

  deletePdf(id: number): Observable<Book[]> {
    return this.httpApi.deleteApiByHttpClient(`/pdf/${id}`, this.header);
  }

  deleteTese(id: number): Observable<Book[]> {
    return this.httpApi.deleteApiByHttpClient(`/teses/${id}`, this.header);
  }

  public bookType: string = '';
}
