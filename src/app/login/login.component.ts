
import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    this.loginService.login(this.email, this.password).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['home']); 
      },
      error => {
        console.error(error);
        if (error.status === 401) {
          this.errorMessage = 'Usuario no existe';
        } else {
          this.errorMessage = 'Error al iniciar sesión';
        }
      }
    );
  }
}
