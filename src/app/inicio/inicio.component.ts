import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
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

  foto = environment.foto
  nome = environment.nome
  tipo = environment.tipo
  id = environment.id
 

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
    this.getAllPostagens();

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

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: PostagemModel[]) => {
        this.listaPostagens = resp;
      });
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: UsuarioModel) => {
      this.user = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    this.user.id = this.idUser;
    this.postagem.usuario = this.user;

    this.postagemService
      .postPostagem(this.postagem).subscribe((resp: PostagemModel) => {
        this.postagem = resp;
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Publicado com sucesso!'
        })
        this.postagem = new PostagemModel();
        this.getAllPostagens()
      });
  }
}
