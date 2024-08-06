import {
  IVA,
  PRECIO_POR_CADA_PERSONA_ADICIONAL_POR_NOCHE,
  PRECIO_SERVICIO_DESAYUNO,
  Reserva,
  tiposDeHabitacion,
} from './modelo';
import { reservasCaso2 } from './reservaData';

class Cliente {
  habitacionStandard: number;
  habitacionSuite: number;
  listaDeReservas: Reserva[];
  total: number;
  subTotal: number;
  IVA: number;

  constructor(listaDeResevas: Reserva[]) {
    this.listaDeReservas = listaDeResevas;
    this.total = 0;
    this.subTotal = 0;
    this.IVA = IVA;
    this.habitacionStandard;
    this.habitacionSuite;
  }

  getSubTotal = () => {
    return this.subTotal;
  };

  getTotal = (): number => {
    return this.total;
  };

  setSubTotal = (subtotal: number): void => {
    this.subTotal = subtotal;
  };

  setTotal = (total: number) => {
    this.total = total;
  };

  calcularPrecioSubtotalPorServicioAdicional = (reserva: Reserva): number => {
    return reserva.desayuno
      ? reserva.pax * PRECIO_SERVICIO_DESAYUNO * reserva.noches
      : 0;
  };

  calcularElSubtotal = (): void => {
    let subTotal = 0;

    for (const reserva of this.listaDeReservas) {
      const precioTipoHabitacion = this.obtenerPrecioSegunTipoDeHabitacion(
        reserva.tipoHabitacion
      );
      const precioAdicionalPorPax = this.calcularPrecioAdicionalSegunPax(
        reserva.pax
      );
      const precioSubtotalPorServicioAdicional =
        this.calcularPrecioSubtotalPorServicioAdicional(reserva);
      subTotal +=
        (precioTipoHabitacion + precioAdicionalPorPax) * reserva.noches +
        precioSubtotalPorServicioAdicional;
    }

    this.setSubTotal(subTotal);
  };

  calcularElTotal = () => {
    const calculoDelIVA = (this.getSubTotal() * IVA) / 100;
    const total = this.getSubTotal() + calculoDelIVA;
    this.setTotal(total);
  };

  obtenerPrecioSegunTipoDeHabitacion = (tipoDeHabitacion: string): number => {
    switch (tipoDeHabitacion) {
      case tiposDeHabitacion.standard:
        return this.habitacionStandard;
      case tiposDeHabitacion.suite:
        return this.habitacionSuite;
      default:
        return 0;
    }
  };

  calcularPrecioAdicionalSegunPax = (pax: number): number => {
    if (pax > 1) {
      return (pax - 1) * PRECIO_POR_CADA_PERSONA_ADICIONAL_POR_NOCHE;
    }

    return 0;
  };
}

class ClienteParticular extends Cliente {
  constructor(listaDeReservas: Reserva[]) {
    super(listaDeReservas);
    this.habitacionStandard = 100;
    this.habitacionSuite = 150;
  }
}

class ClienteTourOperador extends Cliente {
  porcentajeDescuentoServicioContratado: number;
  constructor(listaDeReservas: Reserva[]) {
    super(listaDeReservas);
    this.habitacionStandard = 100;
    this.habitacionSuite = 100;
    this.porcentajeDescuentoServicioContratado = 15;
  }

  aplicarDescuento = (precio: number) => {
    return (precio * this.porcentajeDescuentoServicioContratado) / 100;
  };

  calcularPrecioSubtotalPorServicioAdicional = (reserva: Reserva) => {
    if (reserva.desayuno) {
      const precioSubtotal =
        reserva.pax * PRECIO_SERVICIO_DESAYUNO * reserva.noches;
      const descuento = this.aplicarDescuento(precioSubtotal);

      return precioSubtotal - descuento;
    }

    return 0;
  };
}

const clienteParticular = new ClienteParticular(reservasCaso2);
clienteParticular.calcularElSubtotal();
let subTotal = clienteParticular.getSubTotal();
clienteParticular.calcularElTotal();
let total = clienteParticular.getTotal();
let resultado = {
  tipoDecliente: 'Particular',
  subTotal,
  total,
};
console.log(resultado);
const clienteTourOperador = new ClienteTourOperador(reservasCaso2);
clienteTourOperador.calcularElSubtotal();
subTotal = clienteTourOperador.getSubTotal();
clienteTourOperador.calcularElTotal();
total = clienteTourOperador.getTotal();
resultado = {
  tipoDecliente: 'Tour Operador',
  subTotal,
  total,
};
console.log(resultado);
