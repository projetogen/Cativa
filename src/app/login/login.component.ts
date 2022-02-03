import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }
  entrar() {
    this.auth.entrar(this.userLogin).subscribe(
      (resp: UserLogin) => {
        this.userLogin = resp;

        environment.token = this.userLogin.token;
        environment.nome = this.userLogin.nome;
        environment.foto = this.userLogin.foto;
        environment.id = this.userLogin.id;

        this.router.navigate(['/inicio']);
      },
      (erro) => {
        if (erro.status == 400 || erro.status == 500) {
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
            title: 'Usuário ou senha incorretos!',
          });
        }
      }
    );
  }
}
