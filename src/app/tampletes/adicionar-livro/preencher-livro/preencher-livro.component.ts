import { Component, OnInit } from '@angular/core';
import { AppApiService } from 'src/app/core/services/app-api.service';

@Component({
  selector: 'app-preencher-livro',
  templateUrl: './preencher-livro.component.html',
  styleUrls: ['./preencher-livro.component.scss']
})
export class PreencherLivroComponent implements OnInit {

  constructor(
    public appApiService: AppApiService
  ) { }

  ngOnInit(): void {
  }

}
