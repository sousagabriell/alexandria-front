import { Component, OnInit } from '@angular/core';
import { GlobalAbstractsService } from 'src/app/shared/abstracts/global-abstracts.service';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.scss']
})
export class NotificacoesComponent implements OnInit {

  constructor(
    public globalAbstractService: GlobalAbstractsService
  ) { }

  ngOnInit(): void {
  }

}
