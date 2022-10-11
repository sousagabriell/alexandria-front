import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { BookState } from './core/store';
import { getBookShelfKindle, getBookShelfFisic, getBookShelfPdf, getBookShelfTeses } from './core/store/app.actions';

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
    this.storeApp.dispatch(getBookShelfKindle());
    this.storeApp.dispatch(getBookShelfFisic());
    this.storeApp.dispatch(getBookShelfPdf());
    this.storeApp.dispatch(getBookShelfTeses());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  
}
