import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';
import { HttpStatusCode } from '@angular/common/http';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  usuarioModel: UsuarioModel = new UsuarioModel();
  confirmarSenha: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  cadastrar() {
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
    } else {
      this.authService
        .cadastrar(this.usuarioModel)
        .subscribe((resp: UsuarioModel) => {
          this.usuarioModel = resp;
          this.router.navigate(['/entrar']);
          Swal.fire({
            title: 'Seu cadastro foi realizado com sucesso!',
            width: 600,
            padding: '3em',
            color: '#716add',
            background:
              '#fff url(https://sweetalert2.github.io/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left top
              no-repeat
            `,
          });
        });
    }
  }
}
