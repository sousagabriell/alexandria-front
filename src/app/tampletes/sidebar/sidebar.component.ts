import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }

  nameUser = environment.nome
  photoUser = environment.foto
  nicknameUser = environment.usuario

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.photoUser === ''){
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