import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/core/services/authentication-service.service';
import { GlobalAbstractsService } from 'src/app/shared/abstracts/global-abstracts.service';
import { environments } from 'src/environments/environment.prod';
import { UserLogin } from 'src/app/core/interfaces/usersLogin';


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

  ngOnInit(
  ): void {

  }
  goToDashboard(){
    this.router.navigate(['/dashboard']);
    this.globalAbstractService.noSidebar=true
  }
  checkLogin() {
    this.authenticationServiceService.authenticate(this.username, this.password).subscribe(
      data => {
        // console.log(this.username + "---------" +this.password)
        this.router.navigate(['/dashboard'])
        this.globalAbstractService.noSidebar=true
        environments.token = this.userLogin.token
        this.invalidLogin = false
        console.log(this.userLogin.usuario + "---------------------aqui")
      },
      error => {
        this.invalidLogin = true

      }
    )
    

  }
}

