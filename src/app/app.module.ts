import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './tampletes/login/login.component';
import { DashboardComponent } from './tampletes/dashboard/dashboard.component';
import { SidebarComponent } from './tampletes/sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './core/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './core/store/app.effects';
import { ExcelComponent } from './tampletes/excel/excel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    ExcelComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
