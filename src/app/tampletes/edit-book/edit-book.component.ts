import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/core/interfaces/book';
import { AppApiService } from 'src/app/core/services/app-api.service';
import { BookState } from 'src/app/core/store';
import {
  getBookShelfKindle,
  getBookShelfPdf,
  getBookShelfFisic,
  getBookShelfTeses,
} from 'src/app/core/store/app.actions';
import { GlobalAbstractsService } from 'src/app/shared/abstracts/global-abstracts.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  put$: any;
  bookId: any;
  bookType: any;

  constructor(
    public appApiService: AppApiService,
    private storeApp: Store<{ app: BookState }>,
    private router: Router,
    private route: ActivatedRoute,
    public globalAbstractService: GlobalAbstractsService
  ) {
    this.bookId = route.snapshot.queryParamMap.get('bookId');
    this.bookType = route.snapshot.queryParamMap.get('bookType');
    this.getBookToEdit(this.bookType);
  }

  ngOnInit(): void { }

  putBook(frm: NgForm) {
    switch (this.bookType) {
      case 'kindle':
        this.appApiService.putBookKindle(this.put$).subscribe((response) => {
          this.storeApp.dispatch(getBookShelfKindle());
          frm.reset();
          this.globalAbstractService.notificationregisteredBook$ = true;
          this.globalAbstractService.notificationMessage = "atualizado"
          if ((this.globalAbstractService.notificationregisteredBook$ = true))
            setTimeout(() => {
              this.globalAbstractService.notificationregisteredBook$ = false;
            }, 5000);
        });
        break;
      case 'pdf':
        this.appApiService.postPdf(this.put$).subscribe((response) => {

          this.storeApp.dispatch(getBookShelfPdf());
          frm.reset();
          this.globalAbstractService.notificationMessage = "atualizado"
          this.globalAbstractService.notificationregisteredBook$ = true;
        });
        break;
      case 'fisico':
        this.appApiService.postBookFisic(this.put$).subscribe((response) => {
          this.storeApp.dispatch(getBookShelfFisic());
          frm.reset();
          this.globalAbstractService.notificationMessage = "atualizado"
          this.globalAbstractService.notificationregisteredBook$ = true;
        });
        break;
      case 'teses':
        this.appApiService.postTeses(this.put$).subscribe((response) => {
          this.storeApp.dispatch(getBookShelfTeses());
          frm.reset();
          this.globalAbstractService.notificationMessage = "atualizado"
          this.globalAbstractService.notificationregisteredBook$ = true;
        });
        break;
    }
    this.router.navigate(['/dashboard']);
  }

  getBookToEdit(type: string): void {
    switch (type) {
      case 'kindle':
        this.appApiService
          .getBooksKindleById(this.bookId)
          .subscribe((response) => {
            this.put$ = response;
          });
        break;
      case 'pdf':
        this.appApiService.getPdfById(this.bookId).subscribe((response) => {
          this.put$ = response;
        });
        break;
      case 'fisico':
        this.appApiService
          .getBooksFisicsById(this.bookId)
          .subscribe((response) => {
            this.put$ = response;
          });
        break;
      case 'teses':
        this.appApiService.getTesesById(this.bookId).subscribe((response) => {
          this.put$ = response;
        });
        break;
    }
  }
}
