import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable, switchMap } from 'rxjs';
import { GlobalAbstractsService } from 'src/app/shared/abstracts/global-abstracts.service';
import { Book } from 'src/app/core/interfaces/book';
import { AppApiService } from 'src/app/core/services/app-api.service';
import { BookState } from 'src/app/core/store';
import { getBookShelfFisic } from 'src/app/core/store/app.actions';
import {
  selectBookShelfFisic,
  selectBookShelfKindle,
  selectBookShelfPdf,
  selectBookShelfTeses,
} from 'src/app/core/store/app.selector';

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
        this.appService.deleteBookKindle(id);
        break;
      case 'fisico':
        this.appService.deleteBookFisic(id);
        break;
      case 'pdf':
        this.appService.deletePdf(id)
        break;
      case 'teses':
        this.appService.deleteTese(id)
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
}
