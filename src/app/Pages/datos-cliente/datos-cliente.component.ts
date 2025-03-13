import { Component, OnInit } from '@angular/core';
import { ClienteCuentaService } from '../../Services/cliente-cuenta.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { Movimientos } from '../../Interfaces/Movimientos';
import { MovimientoService } from '../../Services/movimiento.service';


@Component({
  selector: 'app-datos-cliente',
  imports: [CommonModule, ModalComponent],
  templateUrl: './datos-cliente.component.html',
  styleUrl: './datos-cliente.component.css'
})
export default class DatosClienteComponent implements OnInit {

  datos:any = {}

  cuentasCliente:any = []=[];
  datosMovimientos:any = []=[];
 movimientoTransfer:Movimientos ={
      fkCuenta:{}
    }

  //Modales de Accion
  showModalTransferencia: boolean = false;
  showModalDeposito: boolean = false;
  showModalRetiro: boolean = false;
  showModalPagos: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private cuentaCliente:ClienteCuentaService,
    private serviceM:MovimientoService) { }


  ngOnInit(): void {
    this.loadData();

  }

  loadData():void{
    const clienteId:any = this.route.snapshot.paramMap.get('clienteId');
    this.cuentaCliente.visualizarDatos(clienteId).subscribe({
      next: (dbData) => {
        console.log('Datos obtenidos:', dbData);
        this.datos = dbData;
        if (this.datos && this.datos.cuentaId) {
          this.obtenerMovimientos(this.datos.cuentaId);
    
        }
      },
      error: (err) => {
        console.error('Error al obtener los datos:', err);
      },
    })

  }

  obtenerCuentas(id:number){
    this.cuentaCliente.obtnerDatosbyId(id).subscribe({
      next:(data)=>{
        this.cuentasCliente = data

      },
      error:(err)=>{
        console.log("No se pudo obtener los datos",err);
      }
    })
  }

  obtenerMovimientos(id:number){
    // const cueta:any = this.cuentasCliente.cuentaId
    // console.log(cueta);
    this.serviceM.obtnerMovimientosbyfk(id).subscribe({
      next:(data)=>{
        this.datosMovimientos = data
        console.log("datos movimientos",this.datosMovimientos);
      },
      error:(err)=>{
        console.log("No se pudo obtener los datos",err);
      }
    })
  }




  //Funciones de Modal
  openTransferenciaModal() {
    this.obtenerCuentas(this.datos.clienteId);
    this.showModalTransferencia = !this.showModalTransferencia;  // Cambia el estado del modal
  }

  openDepositoModal() {
    this.obtenerCuentas(this.datos.clienteId);
    this.showModalDeposito = !this.showModalDeposito;  // Cambia el estado del modal
  }

  openRetiroModal() {
    this.obtenerCuentas(this.datos.clienteId);
    this.showModalRetiro = !this.showModalRetiro;  // Cambia el estado del modal
  }

  openPagosModal() {
    this.obtenerCuentas(this.datos.clienteId);
    this.showModalPagos = !this.showModalPagos;  // Cambia el estado del modal
  }

}
