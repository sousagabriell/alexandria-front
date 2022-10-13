import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreencherLivroComponent } from './tampletes/adicionar-livro/preencher-livro/preencher-livro.component';
import { TipoLivroComponent } from './tampletes/adicionar-livro/tipo-livro/tipo-livro.component';
import { DashboardComponent } from './tampletes/dashboard/dashboard.component';
import { ExcelComponent } from './tampletes/excel/excel.component';
import { LoginComponent } from './tampletes/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'excel', component: ExcelComponent },
  { path: 'adicionar-livro', component: TipoLivroComponent },
  { path: 'preencher-livro', component: PreencherLivroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
