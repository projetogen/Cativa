import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';

import { TemaComponent } from './tema/tema.component';

import { FooterComponent } from './footer/footer.component';

import { PostagemComponent } from './postagem/postagem.component';
import { LoginComponent } from './login/login.component';


import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreComponent } from './sobre/sobre.component';

import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';

import { TimeComponent } from './time/time.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuLogadoComponent } from './menu-logado/menu-logado.component';

import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';


@NgModule({
  declarations: [
    AppComponent,


    MenuComponent,

    TemaComponent,

    FooterComponent,


    PostagemComponent,
    LoginComponent,

      PostagemComponent,
      LoginComponent,
      TimeComponent,

    CadastrarComponent,
    SobreComponent,
    InicioComponent,
    LandingPageComponent,
    MenuLogadoComponent,
    TemaEditComponent,
    TemaDeleteComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
