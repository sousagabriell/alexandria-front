import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './core/interfaces/book';
import { AppApiService } from './core/services/app-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'alexandria';
  constructor(private appApi: AppApiService) { }

  books$: Observable<Book[]> = this.appApi.getBooks();


  ngOnInit(): void {
    
    console.log(this.appApi.getBooks())
    
  }


  
}
