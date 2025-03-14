import { Component } from '@angular/core';
import { User } from '../Interfaces/User';
import { UserService } from '../Services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';
  role: string = '';
  clienteId?: number;

constructor(private userService:UserService , private router: Router){}
loginUser() {
  this.userService.Login(this.username, this.password).subscribe(
    (response) => {
      console.log(response);
      this.message = response.message;
      this.role = response.role;
      if (this.role === 'CLIENTE') {
        this.clienteId = response.clienteId;
        this.router.navigate(['/DatosCliente', this.clienteId]);
      }else{
        this.router.navigate(['/Dashboard']);
      }
    },
    (error) => {
      this.message = 'Error en el login';
      console.error(error);
    }
  );
}
}






