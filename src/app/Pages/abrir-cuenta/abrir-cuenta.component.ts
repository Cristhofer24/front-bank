import { Cuenta } from './../../Interfaces/Cuenta';
import { Cliente } from './../../Interfaces/Cliente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CuentaService } from '../../Services/cuenta.service';
import { catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abrir-cuenta',
  imports: [FormsModule, CommonModule],
  templateUrl: './abrir-cuenta.component.html',  // Verifica esta ruta
  styleUrls: ['./abrir-cuenta.component.css']
})
export default class AbrirCuentaComponent  implements OnInit {
  clienteId?: number;

  cuenta: Cuenta = {
    fkCliente: {}
  };

  constructor(
    private route: ActivatedRoute,
    private cuentaService: CuentaService,
    private router: Router
  ) { }


    ngOnInit(): void {
      const clienteId = this.route.snapshot.paramMap.get('clienteId');
      console.log("clienteId obtenido de la URL:", clienteId);

      if (clienteId && !isNaN(+clienteId)) {
        this.clienteId = +clienteId;

        // Asegurar que cuenta.fkCliente está inicializado
        if (!this.cuenta.fkCliente) {
          this.cuenta.fkCliente = { clienteId: this.clienteId };
        } else {
          this.cuenta.fkCliente.clienteId = this.clienteId;
        }

        console.log("clienteId asignado a cuenta.fkCliente:", this.cuenta.fkCliente.clienteId);
      }
    }


  enviarDatos() {
    this.cuentaService.createCuenta(this.cuenta)
      .pipe(
        catchError(error => {
          console.error('Error al crear cuenta', error);
          return of(null);
        })
      )
      .subscribe(response => {
        if (response) {
          console.log('Cuenta creada con éxito', response);
          this.router.navigate(['/ConfirmarCuenta', response.cuentaId]);
        } else {
          console.log('No se pudo crear la cuenta');
        }
      });
  }

  onTipoCuentaChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const tipoCuenta = selectElement.value;

    if (tipoCuenta) {
      this.cuentaService.generarCuenta(tipoCuenta).subscribe(
        (data: any) => {
          if (data) {
            this.cuenta = { ...this.cuenta,
              tipoCuenta: data.tipoCuenta,
              numeroCuenta: data.numeroCuenta,
              saldo: data.saldo,
              fechaApertura: data.fechaApertura,
              fechaCaducidad: data.fechaCaducidad,
              estado: data.estado
            };

          } else {
            console.error('No se recibieron datos para la cuenta.');
          }
        },
        (error) => {
          console.error('Error al obtener los valores de la cuenta:', error);
        }
      );
    } else {
      console.log("Tipo de cuenta no seleccionado");
    }
  }
  }

