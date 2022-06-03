import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/core/interfaces/book';
import { AppApiService } from 'src/app/core/services/app-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private appApi: AppApiService) { }

  books$: Observable<Book[]> = this.appApi.getBooksKindle();
  bookById$: Observable<Book> = this.appApi.getBookKindleById(1);

  ngOnInit(): void {
  }

  getBookKindle() {
    this.books$ = this.appApi.getBooksKindle();
  }

  getBookFisics() {
    this.books$ = this.appApi.getBooksFisics();
  }

  getBookById(id: number, tipe: string) {
    switch (tipe) {
      case "fisico": {
        this.bookById$ = this.appApi.getBooksFisicsById(id);
        break;
      }
      case "kindle": {
        this.bookById$ = this.appApi.getBookKindleById(id);
        break;
      }
      default: {
        this.bookById$ = this.appApi.getBookKindleById(id);
        break;
      }
    }
  }







}
