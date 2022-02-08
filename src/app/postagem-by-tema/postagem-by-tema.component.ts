import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { PostagemModel } from '../model/PostagemModel';
import { TemaModel } from '../model/TemaModel';
import { UsuarioModel } from '../model/UsuarioModel';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-postagem-by-tema',
  templateUrl: './postagem-by-tema.component.html',
  styleUrls: ['./postagem-by-tema.component.css'],
})
export class PostagemByTemaComponent implements OnInit {

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
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService
  ) {}

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    window.scroll(0,0);
    let id = this.route.snapshot.params['id']
    this.findByIdTema(id);
    this.findPostagensByTemaId(id)
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: TemaModel) => {
      this.tema = resp
    })
  }

  findPostagensByTemaId(id: number) {
    this.postagemService.getByTemaId(id).subscribe((resp: PostagemModel[]) => {
      this.listaPostagens = resp
    })
  }


}
