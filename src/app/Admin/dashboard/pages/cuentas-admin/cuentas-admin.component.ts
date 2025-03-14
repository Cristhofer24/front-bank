import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../../../../Services/cuenta.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-cuentas-admin',
  imports: [NgFor,CommonModule],
  templateUrl: './cuentas-admin.component.html',
  styleUrl: './cuentas-admin.component.css'
})
export class CuentasAdminComponent implements OnInit {

  datos:any={};

  constructor(private serviceCount:CuentaService) { }


  ngOnInit(): void {
    this.loadData();
  }

  loadData():void{

    this.serviceCount.getCuentas().subscribe({
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
