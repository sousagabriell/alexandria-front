import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalAbstractsService } from 'src/app/shared/abstracts/global-abstracts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(
    private router: Router,
    public globalAbstractService: GlobalAbstractsService
  ) { 
  }

  ngOnInit(
  ): void {
  }
  goToDashboard(){
    this.router.navigate(['/dashboard']);
    this.globalAbstractService.noSidebar=true
  }

}
