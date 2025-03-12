export interface Cuenta {
  cuentaId?: number;
  tipoCuenta?: string;
  saldo?: number;
  numeroCuenta?: string;
  fechaApertura?: string;
  fechaCaducidad?: string;
  estado?: string;
  fkCliente: {
    clienteId?: number;
  };
}
