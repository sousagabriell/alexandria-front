import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppApiService } from 'src/app/core/services/app-api.service';
import { BookState } from 'src/app/core/store';
import { getBookShelfKindle, getBookShelfPdf, getBookShelfFisic, getBookShelfTeses } from 'src/app/core/store/app.actions';
import { GlobalAbstractsService } from 'src/app/shared/abstracts/global-abstracts.service';

@Component({
  selector: 'app-preencher-livro',
  templateUrl: './preencher-livro.component.html',
  styleUrls: ['./preencher-livro.component.scss'],
})
export class PreencherLivroComponent implements OnInit {
  post$: any;

  constructor(
    public appApiService: AppApiService,
     private storeApp: Store<{ app: BookState }>,
     private router:Router,
     public globalAbstractService: GlobalAbstractsService
     ) {}

  ngOnInit(): void {
    this.post$ = {};
  }

  postBook(frm: NgForm) {
    switch (this.appApiService.bookType) {
      case 'kindle':
        this.appApiService.postBookKindle(this.post$).subscribe((response) => {
          console.log("------------------------- Kidle")
          console.log(response)
          this.storeApp.dispatch(getBookShelfKindle());
          frm.reset();
          this.globalAbstractService.notificationregisteredBook$=true
          if(this.globalAbstractService.notificationregisteredBook$ = true)
          setTimeout(()=>{
            this.globalAbstractService.notificationregisteredBook$=false
          },5000)
        });
        break;
      case 'pdf':
        this.appApiService.postPdf(this.post$).subscribe((response) => {
          console.log("------------------------- Pdf")
          console.log(response);  
          this.storeApp.dispatch(getBookShelfPdf());
          frm.reset();
          this.globalAbstractService.notificationregisteredBook$=true
        });
        break;
      case 'fisico':
        this.appApiService.postBookFisic(this.post$).subscribe((response) => {
          console.log("------------------------- Fisico")
          console.log(response);
          this.storeApp.dispatch(getBookShelfFisic());
          frm.reset();
          this.globalAbstractService.notificationregisteredBook$=true
        });
        break;
      case 'teses':
        this.appApiService.postTeses(this.post$).subscribe((response) => {
          console.log("------------------------- Teses")
          console.log(response);
          this.storeApp.dispatch(getBookShelfTeses());
          frm.reset();    
          this.globalAbstractService.notificationregisteredBook$=true
        });
        break;
    }
    this.router.navigate(['/dashboard'])
  }
}