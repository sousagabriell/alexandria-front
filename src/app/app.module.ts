import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './tampletes/login/login.component';
import { DashboardComponent } from './tampletes/dashboard/dashboard.component';
import { SidebarComponent } from './tampletes/sidebar/sidebar.component';
import {SidebarModule } from 'ng-sidebar';
import { HttpClientModule } from '@angular/common/http';
import { ExcelComponent } from './tampletes/excel/excel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    ExcelComponent,
    
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
