import { Component } from '@angular/core';

@Component({
  selector: 'app-abrir-cuenta',
  templateUrl: './abrir-cuenta.component.html',  // Verifica esta ruta
  styleUrls: ['./abrir-cuenta.component.css']
})
export default class AbrirCuentaComponent {
  ngOnInit() {
    const clienteIdInput = document.querySelector("input[name='clienteId']") as HTMLInputElement;
    if (clienteIdInput && clienteIdInput.value) {
      localStorage.setItem('clienteId', clienteIdInput.value);
    }

    const storedClienteId = localStorage.getItem('clienteId');
    if (storedClienteId) {
      clienteIdInput.value = storedClienteId;
    }
  }
}
