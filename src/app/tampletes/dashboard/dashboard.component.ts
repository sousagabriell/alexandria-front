import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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

  constructor(private appApi: AppApiService,  private storeApp: Store<{app: BookState}>) { }

  books$: Observable<Book[]> = this.storeApp.pipe(select(selectBookShelf));
  bookById$: Observable<Book> = this.appApi.getBookKindleById(1);

  ngOnInit(): void {

  }

  getBookKindle() {
    this.books$ = this.storeApp.pipe(select(selectBookShelf));
  }

  getBookFisics() {
    this.books$ = this.appApi.getBooksFisics();
  }

  getBookById(id: number, tipe: string) {
    debugger
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
