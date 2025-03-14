import { Component, OnInit } from '@angular/core';
import { MovimientoService } from '../../../../Services/movimiento.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-movimientos-admin',
  imports: [NgFor,CommonModule],
  templateUrl: './movimientos-admin.component.html',
  styleUrl: './movimientos-admin.component.css'
})
export class MovimientosAdminComponent implements OnInit {

datos:any={};

constructor(private serviceM:MovimientoService) { }

  ngOnInit( ): void {
    this.loadData();
  }

  loadData():void{

    this.serviceM.obtnerMovimientos().subscribe({
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
