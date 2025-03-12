import { Cliente } from './../../Interfaces/Cliente';
import { CuentaService } from './../../Services/cuenta.service';
import { routes } from './../../app.routes';
import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../../Interfaces/Cuenta';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClienteCuentaService } from '../../Services/cliente-cuenta.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-confirmar-cuenta',
  imports: [FormsModule, CommonModule],
  templateUrl: './confirmar-cuenta.component.html',
  styleUrl: './confirmar-cuenta.component.css'
})
export default class ConfirmarCuentaComponent implements OnInit {
  data: any = {};

  constructor(
    private route: ActivatedRoute,
    private CuentaCliente: ClienteCuentaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void {
    const clienteId: any = this.route.snapshot.paramMap.get('clienteId');
    console.log("clienteId obtenido de la URL:", clienteId);
    this.CuentaCliente.visualizarDatos(clienteId).subscribe({
      next: (dbData) => {
        console.log('Datos obtenidos:', dbData);
        this.data = dbData;

      },
      error: (err) => {
        console.error('Error al obtener los datos:', err);

      },
    }
    )

  }
  btnConfirmar(): void {
    const clienteId: any = this.route.snapshot.paramMap.get('clienteId');
    this.router.navigate(['/DatosCliente', clienteId]);
  }




}
