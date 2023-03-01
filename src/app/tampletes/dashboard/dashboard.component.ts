import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, first, map, Observable, switchMap } from 'rxjs';
import { GlobalAbstractsService } from 'src/app/shared/abstracts/global-abstracts.service';
import { Book } from 'src/app/core/interfaces/book';

import { BookState } from 'src/app/core/store';
import {
  getBookShelfFisic,
  getBookShelfKindle,
  getBookShelfPdf,
  getBookShelfTeses,
} from 'src/app/core/store/app.actions';
import {
  selectBookShelfFisic,
  selectBookShelfKindle,
  selectBookShelfPdf,
  selectBookShelfTeses,
} from 'src/app/core/store/app.selector';
import { NgForm } from '@angular/forms';
import { AppApiService } from 'src/app/core/services/app-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private storeApp: Store<{ app: BookState }>,
    private appService: AppApiService
  ) {}

  bookShelf$: Observable<Book[]> = this.storeApp.pipe(
    select(selectBookShelfKindle)
  );
  bookById$!: Observable<Book>;
  filtro: any;
  put$:any


  ngOnInit(): void {
    this.getBookById(1);
  }

  getBookKindle() {
    this.bookShelf$ = this.storeApp.pipe(select(selectBookShelfKindle));
  }

  getBookFisics() {
    this.bookShelf$ = this.storeApp.pipe(select(selectBookShelfFisic));
  }

  getBookPdf() {
    this.bookShelf$ = this.storeApp.pipe(select(selectBookShelfPdf));
  }

  getBookTeses() {
    this.bookShelf$ = this.storeApp.pipe(select(selectBookShelfTeses));
  }

  deleteBookById(id: number, tipe: string) {
    switch (tipe) {
      case 'kindle':
        this.appService.deleteBookKindle(id).subscribe((response: any) => {
          console.log('------------------------- Kidle');
          console.log(response);
          this.storeApp.dispatch(getBookShelfKindle());
        });
        break;
      case 'fisico':
        this.appService.deleteBookFisic(id).subscribe((response: any) => {
          console.log('------------------------- Fisico');
          console.log(response);
          this.storeApp.dispatch(getBookShelfFisic());
        });
        break;
      case 'pdf':
        this.appService.deletePdf(id).subscribe((response: any) => {
          console.log('------------------------- PDF');
          console.log(response);
          this.storeApp.dispatch(getBookShelfPdf());
        });
        break;
      case 'teses':
        this.appService.deleteTese(id).subscribe((response: any) => {
          console.log('------------------------- Teses');
          console.log(response);
          this.storeApp.dispatch(getBookShelfTeses());
        });
        break;
    }
  }

  getBookById(id: number) {
    this.bookById$ = this.bookShelf$.pipe(
      switchMap((bookShelf) => {
        return bookShelf.filter((book) => book.id == id);
      })
    );
  }

  getBookByTitulo(titulo: string) {
    this.bookById$ = this.bookShelf$.pipe(
      switchMap((bookShelf) => {
        return bookShelf.filter((book) => book.titulo == titulo);
      })
    );
  }


setPutByBookId(id:number){
  this.getBookById(id)
  this.bookById$.subscribe(data=>{
    this.put$=data
  })
}

  putBook(frm: NgForm, type:string) {
    switch (type) {
      case 'kindle':
        this.appService.putBookKindle(this.put$).subscribe((response: any) => {
          console.log("------------------------- Kidle")
          console.log(response)
          this.storeApp.dispatch(getBookShelfKindle());
          frm.reset();
        });
        break;
      case 'pdf':
        this.appService.postPdf(this.bookById$).subscribe((response: any) => {
          console.log("------------------------- Pdf")
          console.log(response);  
          this.storeApp.dispatch(getBookShelfPdf());
          frm.reset();
        });
        break;
      case 'fisico':
        this.appService.postBookFisic(this.bookById$).subscribe((response: any) => {
          console.log("------------------------- Fisico")
          console.log(response);
          this.storeApp.dispatch(getBookShelfFisic());
          frm.reset();
        });
        break;
      case 'teses':
        this.appService.postTeses(this.bookById$).subscribe((response: any) => {
          console.log("------------------------- Teses")
          console.log(response);
          this.storeApp.dispatch(getBookShelfTeses());
          frm.reset();
        });
        break;
    }
  }
}
