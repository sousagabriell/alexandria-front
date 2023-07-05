import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { GlobalAbstractsService } from './shared/abstracts/global-abstracts.service';
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

  constructor( 
   private storeApp: Store<{app: BookState}>,
   public globalAbstractService: GlobalAbstractsService,
   private router: Router) { 
   }

  ngOnInit(): void {
    if(localStorage.getItem('visibleSidebar') == 'true'){
      this.globalAbstractService.noSidebar=true
    }
    this.storeApp.dispatch(getBookShelfKindle());
    this.storeApp.dispatch(getBookShelfFisic());
    this.storeApp.dispatch(getBookShelfPdf());
    this.storeApp.dispatch(getBookShelfTeses());
  }

}

