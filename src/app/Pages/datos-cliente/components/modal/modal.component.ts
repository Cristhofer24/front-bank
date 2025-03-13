
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movimientos } from '../../../../Interfaces/Movimientos';
import { MovimientoService } from '../../../../Services/movimiento.service';
import { catchError, of } from 'rxjs';
import { AlertComponent } from "./Alerts/alert/alert.component";

@Component({
  selector: 'app-modal',
  imports: [FormsModule, CommonModule, AlertComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{

  @Input() Title: string = 'Escriba un titulo';
  @Input() ButtonName: string = 'Ingrese el nombre del boton';
  @Input() ShowModal:boolean = false;
  @Input() cuentas: any[] = [];
  @Output() CloseModal = new EventEmitter<void>();

  movimiento:Movimientos ={
    fkCuenta:{}
  }

  selectCount:any=null;
   tableVisible: boolean = true;
   transferVisible: boolean = false;
   inputVisible: boolean = false;
   inputVisible2: boolean = false;
   errorMessage: string = '';
  visibleAlert: boolean = false;


constructor(private service:MovimientoService) { }

  ngOnInit(): void {
    this.movimiento.fechaMovimiento = new Date().toISOString().split('T')[0];

  }

//Conexion con la api send DB

onSubmit() {
  this.errorMessage = ''; // Limpiar mensaje antes de enviar

  this.service.createMovimiento(this.movimiento).subscribe({
    next: (response) => {
      console.log('Movimiento creado con éxito', response);
      // alert('Movimiento realizado con éxito');
      this.visibleAlert=true;
      // Solo recarga si la transacción fue exitosa
    },
    error: (error) => {
      console.error('Error al crear movimiento', error);
      if (error.error && error.error.message) {
        this.errorMessage = error.error.message; // Capturar mensaje del backend
      } else {
        this.errorMessage = 'Ocurrio un error Inesperado por favor revisa tus datos';
      }
    }
  });
}




//Acciones del Modal
  onSelect(cuenta:any){
    this.selectCount = cuenta
    this.transferVisible = true;
    this.tableVisible = false
    this.movimiento.cuentaOrigen = cuenta.numeroCuenta;
    this.movimiento.fkCuenta = { cuentaId: cuenta.cuentaId };
    this.movimiento.tipoMovimiento= this.Title;
    this.hideInput();
  }
  closeModal() {
    this.CloseModal.emit();
  }
hideInput(): void {
  if(this.Title != 'Transferencia'){
    this.inputVisible = false;

  }else{
    this.inputVisible = true;
    this.inputVisible2 = true;
  }

  if(this.Title == 'Deposito' || this.Title == 'Retiro'){
    this.inputVisible2 = false;
  }

  if(this.Title == 'Pagos'){
    this.inputVisible2 = true;
  }


}


}
