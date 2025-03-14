import { routes } from './../../app.routes';
import { Component, OnInit } from '@angular/core';
import { User } from '../../Interfaces/User';
import { UserService } from '../../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-empleado',
  imports: [FormsModule,CommonModule],
  templateUrl: './registro-empleado.component.html',
  styleUrl: './registro-empleado.component.css'
})
export default class RegistroEmpleadoComponent implements OnInit {
  clienteId1?:number

  register: User={};

  constructor(private serviceUser:UserService,private route: ActivatedRoute,private router: Router){}

  ngOnInit(): void {
    const clienteId:any = this.route.snapshot.paramMap.get('clienteId');
    console.log("clienteId obtenido de la URL:", clienteId);
    this.clienteId1 = clienteId
    this.register.fkCliente = this.clienteId1
    console.log("clienteId asignado a cuenta.fkCliente:", this.clienteId1);
  }

  createUser():void{
    this.serviceUser.createUser(this.register).subscribe(
      (response:any)=>{
        console.log("Usuario creado con exito",response);
        this.router.navigate(['/login']);
      },
      (error:any)=>{
        console.error("Error al crear el usuario",error);
      }
    );
  }



}
