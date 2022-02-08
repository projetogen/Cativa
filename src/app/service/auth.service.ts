import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/users/logar', userLogin)
  }

  cadastrar(user: UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>('http://localhost:8080/users/cadastrar', user)
  }

  getByIdUser(id: number): Observable<UsuarioModel>{
    return this.http.get<UsuarioModel>(`http://localhost:8080/usuario/${id}`)
  }

  atualizarUsuario(user: UsuarioModel): Observable<UsuarioModel> {
    return this.http.put<UsuarioModel>('http://localhost:8080/users/update', user)
  }

  logado() {
    let ok: boolean = false;

    if (environment.token != '') {
      ok = true;
    }

    return ok;
  }
}
