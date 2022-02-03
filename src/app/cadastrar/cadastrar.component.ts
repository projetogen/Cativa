import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuarioModel: UsuarioModel = new UsuarioModel
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    this.usuarioModel.tipo = this.tipoUsuario;

    if (this.usuarioModel.senha != this.confirmarSenha) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'error',
        title: 'As senhas inseridas não são iguais!',
      });
    } else if (HttpStatusCode.BadRequest || HttpStatusCode.InternalServerError) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'error',
        title: 'Preencha os campos corretamente!',
      });
    } else {
      this.authService
        .cadastrar(this.usuarioModel)
        .subscribe((resp: UsuarioModel) => {
          this.usuarioModel = resp;
          this.router.navigate(['/entrar']);
          alert('Usuário cadastrado com sucesso!');
        });
    }

  }
}
