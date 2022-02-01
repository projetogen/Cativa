import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { TemaComponent } from './tema/tema.component';
import { TimeComponent } from './time/time.component'

const routes: Routes = [

  {path: '',redirectTo: 'landingPage', pathMatch: 'full'},


  {path: 'entrar', component: LoginComponent},

  {path: 'cadastrar', component: CadastrarComponent},

  {path: 'inicio', component: InicioComponent},

  {path: 'tema', component: TemaComponent},

  {path: 'sobre', component: SobreComponent},

 
  {path: 'time', component: TimeComponent}

  {path: 'landingPage', component: LandingPageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
