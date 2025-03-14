import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../../Interfaces/Cuenta';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteCuentaService } from '../../Services/cliente-cuenta.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-confirmar-cuenta',
  imports: [FormsModule,CommonModule],
  templateUrl: './confirmar-cuenta.component.html',
  styleUrl: './confirmar-cuenta.component.css'
})
export default class ConfirmarCuentaComponent implements OnInit {
  clienteId?: number;

  data: any = {};

  cuenta: Cuenta = {
    fkCliente: {}
  };
  private subscription: Subscription | null = null;
  constructor(
    private route: ActivatedRoute,
    private CuentaCliente: ClienteCuentaService,
    private router: Router
  ) { }


  ngOnInit(): void {

    this.loadData();

  }

  loadData():void{
    const clienteId:any = this.route.snapshot.paramMap.get('clienteId');
    console.log("clienteId obtenido de la URL:", clienteId);

      this.subscription = this.CuentaCliente.visualizarDatos(clienteId).subscribe({
      next:(dbData)=>{
        this.data = dbData;
        console.log('Datos obtenidos:', this.data);
      },
      error: (err) => {
        console.error('Error al obtener los datos:', err);

      },
    }

    )


  }

  enviar():void{
    const clienteId:any = this.route.snapshot.paramMap.get('clienteId');
    this.router.navigate(['/user', clienteId]);
  }




}
