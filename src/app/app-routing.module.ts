import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { TemaComponent } from './tema/tema.component';


const routes: Routes = [

  {path: '',redirectTo: 'entrar', pathMatch: 'full'},


  {path: 'entrar', component: LoginComponent},

  {path: 'cadastrar', component: CadastrarComponent},

  {path: 'tema', component: TemaComponent},

  {path: 'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
