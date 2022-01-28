import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.post<UserLogin>('https://cativa-back.herokuapp.com/users/logar', userLogin)
  }

  cadastrar(user: UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>('https://cativa-back.herokuapp.com/users/cadastrar', user)
  }
}
