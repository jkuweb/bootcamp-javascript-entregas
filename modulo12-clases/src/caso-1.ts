import {
  IVA,
  PRECIO_HABITACION_STANDARD,
  PRECIO_HABITACION_SUITE,
  PRECIO_POR_CADA_PERSONA_ADICIONAL_POR_NOCHE,
  Reserva,
  tiposDeHabitacion,
} from './modelo';
import { reservasCaso1 } from './reservaData';

class ReservaCliente {
  listaDeReservas: Reserva[];
  total: number;
  subTotal: number;

  constructor(listaDeResevas: Reserva[]) {
    this.listaDeReservas = listaDeResevas;
    this.total = 0;
    this.subTotal = 0;
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

  calcularElSubtotal = (): void => {
    let subTotal = 0;

    for (const reserva of this.listaDeReservas) {
      const precioTipoHabitacion = this.obtenerPrecioSegunTipoDeHabitacion(
        reserva.tipoHabitacion
      );
      const precioAdicionalPorPax = this.calcularPrecioAdicionalSegunPax(
        reserva.pax
      );
      subTotal +=
        (precioTipoHabitacion + precioAdicionalPorPax) * reserva.noches;
    }

    this.setSubTotal(subTotal);
  };

  calcularElTotal = () => {
    const calculoDelIVA = (this.getSubTotal() * IVA) / 100;
    const total = this.getSubTotal() + calculoDelIVA;
    this.setTotal(total);
  };

  calcularPrecioAdicionalSegunPax = (pax: number): number => {
    if (pax > 1) {
      return (pax - 1) * PRECIO_POR_CADA_PERSONA_ADICIONAL_POR_NOCHE;
    }

    return 0;
  };

  obtenerPrecioSegunTipoDeHabitacion = (tipoDeHabitacion: string): number => {
    switch (tipoDeHabitacion) {
      case tiposDeHabitacion.standard:
        return PRECIO_HABITACION_STANDARD;
      case tiposDeHabitacion.suite:
        return PRECIO_HABITACION_SUITE;
      default:
        return 0;
    }
  };
}

const reservaClientes: Reserva[] = reservasCaso1;
const reserva = new ReservaCliente(reservaClientes);
reserva.calcularElSubtotal();
console.log(reserva.getSubTotal());
reserva.calcularElTotal();
console.log(reserva.getTotal());
