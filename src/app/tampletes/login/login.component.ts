import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/core/services/authentication-service.service';
import { GlobalAbstractsService } from 'src/app/shared/abstracts/global-abstracts.service';
import { UserLogin } from 'src/app/core/interfaces/userLogin';


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
        this.router.navigate(['/dashboard'])
        this.globalAbstractService.noSidebar=true;
      },
      error => {
        this.invalidLogin = true

      }
    )
    

  }
}

