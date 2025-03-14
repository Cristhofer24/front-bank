import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../../Services/cliente.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-admin-cliente',
  imports: [NgFor,CommonModule],
  templateUrl: './admin-cliente.component.html',
  styleUrl: './admin-cliente.component.css'
})
export default class AdminClienteComponent implements OnInit {
  datos:any={};

  constructor(private serviceClient:ClienteService) { }
  ngOnInit(): void {
    this.loadData();
  }


 loadData():void{

    this.serviceClient.getClientes().subscribe({
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
