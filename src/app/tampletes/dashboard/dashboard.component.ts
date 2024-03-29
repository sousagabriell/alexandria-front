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
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private storeApp: Store<{ app: BookState }>,
    private appService: AppApiService,
    public globalAbstractService: GlobalAbstractsService,
    public router: Router
  ) { }

  bookShelf$: Observable<Book[]> = this.storeApp.pipe(
    select(selectBookShelfKindle)
  );
  bookById$!: Observable<Book>;
  filtro: any;
  put$: any;
  navActive$: boolean = false;
  nameUser: string = environment.nome


  ngOnInit(): void {
    this.getBooks()
    this.getBookById(0);
  }

  getBooks() {
      this.storeApp.dispatch(getBookShelfKindle());
      this.storeApp.dispatch(getBookShelfFisic());
      this.storeApp.dispatch(getBookShelfPdf());
      this.storeApp.dispatch(getBookShelfTeses());
  }

  activeTab = 'kindle';

  routerKindle(activeTab: string) {
    switch (activeTab) {
      case 'kindle':
        this.activeTab = activeTab;
        break
      case 'fisicos':
        this.activeTab = activeTab;
        break
      case 'pdf':
        this.activeTab = activeTab;
        break
      case 'teses':
        this.activeTab = activeTab;
        break
    }
  }

  fisicos(activeTab: string) {
    this.activeTab = activeTab;
  }

  getBookKindle(kindle: string) {
    this.bookShelf$ = this.storeApp.pipe(select(selectBookShelfKindle));
    this.navActive$ = true
    this.routerKindle(kindle)
  }

  getBookFisics(fisicos: string) {
    this.bookShelf$ = this.storeApp.pipe(select(selectBookShelfFisic));
    this.routerKindle(fisicos)
  }

  getBookPdf(pdf: string) {
    this.bookShelf$ = this.storeApp.pipe(select(selectBookShelfPdf));
    this.routerKindle(pdf)
  }

  getBookTeses(teses: string) {
    this.bookShelf$ = this.storeApp.pipe(select(selectBookShelfTeses));
    this.routerKindle(teses)
  }

  deleteBookById(id: number, type: string) {
    switch (type) {
      case 'kindle':
        debugger;
        this.appService.deleteBookKindle(id).subscribe((response: any) => {
          this.storeApp.dispatch(getBookShelfKindle());
        });
        break;
      case 'fisico':
        this.appService.deleteBookFisic(id).subscribe((response: any) => {
          this.storeApp.dispatch(getBookShelfFisic());
        });
        break;
      case 'pdf':
        this.appService.deletePdf(id).subscribe((response: any) => {
          this.storeApp.dispatch(getBookShelfPdf());
        });
        break;
      case 'teses':
        this.appService.deleteTese(id).subscribe((response: any) => {
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
    this.bookById$= this.bookShelf$.pipe(
      switchMap((bookShelf) => {
        return bookShelf.filter((book) => book.titulo == titulo);
      })
    );
  }

  setPutByBookId(id: number, type: string) {
    this.router.navigate(['/edit'], {
      queryParams: { bookId: id, bookType: type },
    });
  }

  putBook(frm: NgForm, type: string) {
    switch (type) {
      case 'kindle':
        this.appService.putBookKindle(this.put$).subscribe((response: any) => {
          this.storeApp.dispatch(getBookShelfKindle());
          frm.reset();
        });
        break;
      case 'pdf':
        this.appService.postPdf(this.bookById$).subscribe((response: any) => {
          this.storeApp.dispatch(getBookShelfPdf());
          frm.reset();
        });
        break;
      case 'fisico':
        this.appService
          .postBookFisic(this.bookById$)
          .subscribe((response: any) => {
            this.storeApp.dispatch(getBookShelfFisic());
            frm.reset();
          });
        break;
      case 'teses':
        this.appService.postTeses(this.bookById$).subscribe((response: any) => {
          this.storeApp.dispatch(getBookShelfTeses());
          frm.reset();
        });
        break;
    }
  }

  copyText(autor?:string, titulo?:string, subtitulo?:string, edicao?:string, cidade?:string, editora?:string, ano?:string) {
    const formattedAutor = autor ?? '';
    const formattedTitulo = titulo ?? '';
    const formattedSubtitulo = subtitulo ?? '';
    const formattedCidade = cidade ?? '';
    const formattedEditora = editora ?? '';
    const formattedText = `${this.formatAuthorName(formattedAutor)}. ${this.formatCamelCase(formattedTitulo)}: ${this.formatCamelCase(formattedSubtitulo)}.${edicao}ª ed. ${this.formatCamelCase(formattedCidade)}: ${this.formatCamelCase(formattedEditora)}, ${ano}`;
    this.copyToClipboard(formattedText);
  }

  formatCamelCase(value: string) {
    const words = value.split(' ');
    const capitalizedWords = words.map((word) => {
      const firstChar = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();
      return firstChar + rest;
    });
    const formatText = capitalizedWords.join(' ');
    return formatText;
  }

  formatAuthorName(authorName: string): string {
    const names = authorName.split(' ');
    const lastName = names.pop();
    let firstName = names.join(' ');
    if (lastName) {
      firstName = firstName.replace(/\b\w/g, (match) => match.toLowerCase());
      firstName = firstName.replace(/\b\w/g, (match) => match.charAt(0).toUpperCase() + match.slice(1));
      firstName = firstName.replace(/\s+/g, ' ');
      return `${lastName.toUpperCase()}, ${firstName}`;
    } else {
      return authorName;
    }
  }
  
  copyToClipboard(text: string) {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }
}
