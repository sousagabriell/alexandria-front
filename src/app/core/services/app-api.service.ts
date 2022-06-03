import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class AppApiService {

  constructor(private httpApi: HttpApiService) { }

  getBooks(): Observable<Book[]> {
    return this.httpApi.get<Book[]>("/livroskindle");
  }

  

}
