import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppApiService } from 'src/app/core/services/app-api.service';

@Component({
  selector: 'app-tipo-livro',
  templateUrl: './tipo-livro.component.html',
  styleUrls: ['./tipo-livro.component.scss']
})
export class TipoLivroComponent implements OnInit {

  constructor(
   private router: Router,
   private appApiService: AppApiService
  ) { }

  ngOnInit(): void {
  }

  goToKindle(){
    this.router.navigate(['/preencher-livro'])
    this.appApiService.bookType="kindle"
  }

  goToBooksFisics(){
    this.router.navigate(['/preencher-livro'])
    this.appApiService.bookType="fisico"
  }

  goToPdf(){
    this.router.navigate(['/preencher-livro'])
    this.appApiService.bookType="pdf"
  }

  goToTheses(){
    this.router.navigate(['/preencher-livro'])
    this.appApiService.bookType="teses"
  } 

}
