import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalAbstractsService {

  public noSidebar:boolean=false
  public notificationregisteredBook$:boolean=false
  public notificationMessage: string = ''

  constructor(
    private router: Router
  ) { }

  noSideBarOnInit(){
    if(this.router.url=="/cadastro" ){
    this.noSidebar=false
  } else if(this.router.url=="/login" ){
    this.noSidebar=false
  }
  }
}
