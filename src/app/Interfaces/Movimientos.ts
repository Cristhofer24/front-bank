export interface Movimientos {
    movimientoId?: number;
    tipoMovimiento?: string;
    descripcion?: string;
    monto?: number;
    fechaMovimiento?: string;
    cuentaOrigen?: string;
    cuentaDestino?: string;
    fkCuenta: {
      cuentaId?: number;
    }

}
