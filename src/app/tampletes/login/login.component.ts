import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/core/services/authentication-service.service';
import { GlobalAbstractsService } from 'src/app/shared/abstracts/global-abstracts.service';
import { UserLogin } from 'src/app/core/interfaces/userLogin';
import { environment } from '../../../environments/environment.prod';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  userLogin: UserLogin = new UserLogin()

  constructor(
    private router: Router,
    public globalAbstractService: GlobalAbstractsService,
    public authenticationServiceService: AuthenticationServiceService,
    public globalAbstractsService: GlobalAbstractsService,
  ) {
  }
  errorUser: boolean = false
  ngOnInit(
  ): void {
    this.globalAbstractService.noSideBarOnInit()
  }
  goToDashboard() {
    this.router.navigate(['/dashboard']);
    this.globalAbstractService.noSidebar = true
  }
  checkLogin() {
    this.authenticationServiceService.authenticate(this.username, this.password).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      localStorage.setItem('photo', resp.foto);
      localStorage.setItem('name', resp.nome);
      localStorage.setItem('username', resp.usuario);
      localStorage.setItem('password', resp.senha);
      environment.token = this.userLogin.token
      environment.foto = this.userLogin.foto
      environment.nome = this.userLogin.nome
      environment.usuario = this.userLogin.usuario
      this.router.navigate(['/dashboard'])
      this.globalAbstractService.noSidebar=true;
    })
    this.errorLogin()
    localStorage.setItem('visibleSidebar', 'true');
  }

  errorLogin() {
    setTimeout(() => {
      if (this.userLogin.usuario == '') {
        this.errorUser = true
      }
    }, 2000);
  }
}
