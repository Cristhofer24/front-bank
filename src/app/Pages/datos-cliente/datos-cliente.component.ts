import { Component, OnInit } from '@angular/core';
import { ClienteCuentaService } from '../../Services/cliente-cuenta.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datos-cliente',
  imports: [CommonModule],
  templateUrl: './datos-cliente.component.html',
  styleUrl: './datos-cliente.component.css'
})
export default class DatosClienteComponent implements OnInit {

  datos:any = {}

  constructor(
    private route: ActivatedRoute,
    private cuentaCliente:ClienteCuentaService) { }


  ngOnInit(): void {
    this.loadData();
  }

  loadData():void{
    const clienteId:any = this.route.snapshot.paramMap.get('clienteId');
    this.cuentaCliente.visualizarDatos(clienteId).subscribe({
      next: (dbData) => {
        console.log('Datos obtenidos:', dbData);
        this.datos = dbData;
      },
      error: (err) => {
        console.error('Error al obtener los datos:', err);
      },
    })

  }

}
