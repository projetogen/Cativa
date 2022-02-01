import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { PostagemModel } from '../model/PostagemModel';
import { TemaModel } from '../model/TemaModel';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  postagem: PostagemModel = new PostagemModel();
  listaPostagens: PostagemModel[];

  tema: TemaModel = new TemaModel();
  listaMaterias: TemaModel[];
  idTema: number;

  user: UsuarioModel = new UsuarioModel();
  idUser = environment.id;

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }

    this.findAllTemas();
  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: TemaModel[]) => {
      this.listaMaterias = resp;
    });
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: TemaModel) => {
      this.tema = resp;
    });
  }

  publicar() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    this.user.id = this.idUser;
    this.postagem.usuario = this.user; 

    this.postagemService.postPostagem(this.postagem).subscribe((resp: PostagemModel) => {
        this.postagem = resp;
        alert('Postagem realizada com sucesso!');
        this.postagem = new PostagemModel();
      });
  }
}