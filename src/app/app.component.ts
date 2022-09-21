import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { BookState } from './core/store';
import { getBookShelf } from './core/store/app.actions';
import { selectBookShelf } from './core/store/app.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'alexandria';
  books$!: Observable<any>;

  subscription = new Subscription();

  constructor( private storeApp: Store<{app: BookState}>) { }

  ngOnInit(): void {
    this.storeApp.dispatch(getBookShelf());
    this.initializeStore();
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initializeStore() {
    this.books$ = this.storeApp.pipe(select(selectBookShelf))
  }

  
}
