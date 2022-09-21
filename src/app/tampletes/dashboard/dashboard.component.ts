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

  books$: Observable<Book[]> = this.appApi.getBooks();
  bookById$: Observable<Book> = this.appApi.getBookById(7);

  ngOnInit(): void {
  }

  getBookById(id: number) {
    this.bookById$ = this.appApi.getBookById(id);
  }



}
