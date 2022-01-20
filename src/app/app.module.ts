import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';

import { Section1LandingpageComponent } from './section1-landingpage/section1-landingpage.component';

import { TemaComponent } from './tema/tema.component';

import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,


    MenuComponent,

    Section1LandingpageComponent,
    
    TemaComponent,

    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
