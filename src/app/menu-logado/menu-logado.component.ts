import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu-logado',
  templateUrl: './menu-logado.component.html',
  styleUrls: ['./menu-logado.component.css']
})
export class MenuLogadoComponent implements OnInit {



  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  sair(){

    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }
}
