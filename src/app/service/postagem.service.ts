import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { PostagemModel } from '../model/PostagemModel';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<PostagemModel[]> {
    return this.http.get<PostagemModel[]>('https://cativa-back.herokuapp.com/postagem', this.token)
  }

  getByIdPostagem(id: number): Observable<PostagemModel> {
    return this.http.get<PostagemModel>(`https://cativa-back.herokuapp.com/postagem/${id}`, this.token)
  }

  getByTitulo(titulo: string): Observable<PostagemModel[]> {
    return this.http.get<PostagemModel[]>(`https://cativa-back.herokuapp.com/postagem/titulo/${titulo}`, this.token)
  }

  postPostagem(postagem: PostagemModel): Observable<PostagemModel> {
    return this.http.post<PostagemModel>('https://cativa-back.herokuapp.com/postagens/save', postagem, this.token)
  }

  putPostagem(postagem: PostagemModel): Observable<PostagemModel> {
    return this.http.put<PostagemModel>('https://cativa-back.herokuapp.com/update', postagem, this.token)
  }

  deletePostagem(id: number) {
    return this.http.delete(`https://cativa-back.herokuapp.com/remove/${id}`, this.token)
  }

}
