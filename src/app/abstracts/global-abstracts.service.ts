import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalAbstractsService {

  public noSidebar:boolean=false

  constructor(
    private router: Router
  ) { }

  noSideBarOnInit(){
    if(this.router.url=="/cadastro"){
    this.noSidebar=false}
  }
}
