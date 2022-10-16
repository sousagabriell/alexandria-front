import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/core/services/authentication-service.service';
import {  NgForm } from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  users$: any;


  constructor(
    private authenticationServiceService:AuthenticationServiceService,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.users$ = {};
  }

  postUser(frm: NgForm){
    this.authenticationServiceService.postNewUser(this.users$).subscribe((response)=>{
      console.log(response)
      this.router.navigate(['/login'])
    })
  }

}
