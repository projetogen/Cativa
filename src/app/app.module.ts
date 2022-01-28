import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';

import { Section1LandingpageComponent } from './section1-landingpage/section1-landingpage.component';

import { TemaComponent } from './tema/tema.component';

import { FooterComponent } from './footer/footer.component';

import { PostagemComponent } from './postagem/postagem.component';
import { LoginComponent } from './login/login.component';


import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreComponent } from './sobre/sobre.component';

import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';





@NgModule({
  declarations: [
    AppComponent,


    MenuComponent,

    Section1LandingpageComponent,

    TemaComponent,

    FooterComponent,


    PostagemComponent,
    LoginComponent,

      PostagemComponent,
      LoginComponent,

      




    CadastrarComponent,
    SobreComponent,
    InicioComponent
  
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
