import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/core/services/authentication-service.service';
import {  FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { GlobalAbstractsService } from 'src/app/shared/abstracts/global-abstracts.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  users$: any;
  errorSignUpMessage: string = "";
  form!: FormGroup
  currentStep: number = 1;


  constructor(
    private authenticationServiceService:AuthenticationServiceService,
    private router:Router,
    private formBuilder: FormBuilder,
    private globalAbstractService: GlobalAbstractsService

  ) { }

  ngOnInit(): void {
    this.users$ = {};
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      user: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]]
    });
    this.globalAbstractService.noSideBarOnInit()
  }

  nextStep(): void {
    this.currentStep += 1;
  }

  previousStep(): void {
    this.currentStep -= 1;
  }

  postUser(){
    this.authenticationServiceService.postNewUser(this.users$).subscribe((response)=>{
      this.router.navigate(['/login'])
    })
  }

}
