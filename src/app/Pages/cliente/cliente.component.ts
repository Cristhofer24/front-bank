import { Component } from '@angular/core';
import { ClienteService } from '../../Services/cliente.service';
import { Cliente } from '../../Interfaces/Cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  imports: [FormsModule,CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export default class ClienteComponent {
  cliente: Cliente = {
    cedula: '',
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: '',
    direccion: ''
  };
    constructor(private clienteService:ClienteService) { }

    RegistroCliente(): void {
      this.clienteService.createCliente(this.cliente).subscribe(
        (response) => {
          console.log("Sus datos fueron guardados exitosamente");
        },
        (error) => {
          console.error("Error al guardar sus datos:", error); // Muestra el error completo
        }
      );
    }

}
