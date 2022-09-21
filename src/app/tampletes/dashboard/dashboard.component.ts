import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable, switchMap } from 'rxjs';
import { Book } from 'src/app/core/interfaces/book';
import { AppApiService } from 'src/app/core/services/app-api.service';
import { BookState } from 'src/app/core/store';
import { selectBookShelf } from 'src/app/core/store/app.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private appApi: AppApiService, private storeApp: Store<{ app: BookState }>) { }

  bookShelf$: Observable<Book[]> = this.storeApp.pipe(select(selectBookShelf));
  bookById$: Observable<Book> = this.appApi.getBookKindleById(1);

  ngOnInit(): void {

  }

  getBookKindle() {
    this.bookShelf$ = this.storeApp.pipe(select(selectBookShelf));
  }

  getBookFisics() {
    this.bookShelf$ = this.appApi.getBooksFisics();
  }

  getBookById(id: number) {
    this.bookById$ = this.bookShelf$.pipe(
      switchMap(bookShelf => {
        return bookShelf.filter(book => book.id == id)
      })
    )
  }

  getBookByName(name: string) {
    debugger
    this.bookShelf$ = this.bookShelf$.pipe(
      map(bookShelf => {
        return bookShelf.filter(book => book.titulo?.includes(name))
      })
    )
  }

  postBookFisic() {
    debugger
    this.appApi.postBookFisic({
      autor: "JK",
      titulo: "Harry Potter 8",
      subtitulo: "Pedra Filosofal",
      ano: "1999",
      cidade: "ferwf",
      genero: "Romance",
      subgenero: "Ficção",
      nacional: true,
      idioma: "PT-BR",
      foto: "https://a-static.mlcdn.com.br/1500x1500/title-reference/magazineluiza/225550400/91f8f89fbbc0b205d649ce1bf88dff86.jpg",
      edicao: "3",
      editora: "JK"
    });
  }








}
