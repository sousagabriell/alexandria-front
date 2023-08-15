import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Router } from '@angular/router';
import { GlobalAbstractsService } from 'src/app/shared/abstracts/global-abstracts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  opened = false;

  toggleSidebar() {
    this.opened = !this.opened;
  }

  nameUser = environment.nome
  photoUser = environment.foto
  nicknameUser = environment.usuario

  constructor(
    private router: Router,
    private globalAbstractService: GlobalAbstractsService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('visibleSidebar') == 'true') {
      if (this.nameUser == "") {
        this.nicknameUser = localStorage.getItem('username') ?? '';
        this.nameUser = localStorage.getItem('name') ?? '';
        this.photoUser = localStorage.getItem('photo') ?? '';
      }
    }
    if (this.photoUser == '') {
      this.photoUser = "../../../assets/img-perfil.png"
    }
  }

  logout() {
    this.router.navigate(['/login'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.usuario = ''
  }

}