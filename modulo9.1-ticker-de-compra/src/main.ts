import { productos } from "./data";
import {
  LineaTicket,
  Producto,
  ResultadoLineaTicket,
  ResultadoTotalTicket,
  TicketFinal,
  TipoIVA,
  TotalPorTipoIva,
} from "./modelo";

interface TiposDeIva {
  tipoDeIVA: TipoIVA;
  porcentaje: number;
}

const tiposDeIVA: TiposDeIva[] = [
  {
    tipoDeIVA: "general",
    porcentaje: 21,
  },
  {
    tipoDeIVA: "reducido",
    porcentaje: 10,
  },
  {
    tipoDeIVA: "sinIva",
    porcentaje: 0,
  },
  {
    tipoDeIVA: "superreducidoA",
    porcentaje: 5,
  },
  {
    tipoDeIVA: "superreducidoB",
    porcentaje: 4,
  },
  {
    tipoDeIVA: "superreducidoC",
    porcentaje: 0,
  },
];

/*
calcularTotalTipoIva()

Un desglose del total por tipo de IVA, es decir, la suma de los importes correspondientes a cada tipo de IVA
*/
const calcularTotalTipoIva = (): TotalPorTipoIva[] => {
  const listadDeProductosPorTipoDeIva = tiposDeIVA.map((tipoDeIva) => {
    let productoAgrupados = productos.filter(
      (producto) => producto.producto.tipoIva === tipoDeIva.tipoDeIVA
    );

    return {
      tipoIva: tipoDeIva.tipoDeIVA,
      cuantia: calcularCuantia(productoAgrupados, tipoDeIva.porcentaje),
    };
  });

  return eliminarProductosSinCantidad(listadDeProductosPorTipoDeIva);
};

const calcularCuantia = (
  productoAgrupados: LineaTicket[],
  porcentaje: number
) => {
  return productoAgrupados.reduce((acc, producto) => acc + (producto.cantidad * producto.producto.precio * porcentaje) / 100, 0)

};

const eliminarProductosSinCantidad = (
  listadDeProductosPorTipoDeIva: TotalPorTipoIva[]
): TotalPorTipoIva[] => {
  return listadDeProductosPorTipoDeIva.filter((productoPorTipoDeIva) => productoPorTipoDeIva.cuantia !== 0)
};

/*
    calculaTotalTicket()

    En cuanto a los totales:

    El total sin IVA.
    El IVA.    
    El total del ticket, incluyendo el IVA.
*/
const calculaTotalTicket = (
  lineaTickets: ResultadoLineaTicket[]
): ResultadoTotalTicket => {
  const totalConIVA = calcularTotal(lineaTickets, true);
  const totalSinIVA = calcularTotal(lineaTickets, false);
  const totalIVA = calcularTotalIVA(totalConIVA, totalSinIVA);
  return {
    totalSinIva: totalSinIVA,
    totalConIva: totalConIVA,
    totalIva: totalIVA,
  };
};

const calcularTotal = (
  lineaTickets: ResultadoLineaTicket[],
  totalConIVA: boolean
): number => {
  let total = 0;
  for (const lineaTicket of lineaTickets) {
    const cantidad = lineaTicket.cantidad;
    total += totalConIVA
      ? lineaTicket.precioConIva * cantidad
      : lineaTicket.precioSinIva * cantidad;
  }
  return total;
};

const calcularTotalIVA = (totalConIva: number, totalSinIva: number): number => {
  let total = totalConIva - totalSinIva;
  return parseFloat(total.toFixed(2));
};

/*
La función calculaTicket devolverá un ticket que contendrá la siguiente información:

    Por cada producto queremos el nombre, la cantidad, el precio sin IVA, el tipo de IVA y el precio con IVA.

*/
const calcularLineaTicket = (lineaTicket: LineaTicket): ResultadoLineaTicket => {
  const producto = lineaTicket.producto;
  const precioUnidadConIVA = calcularPrecioUnidadConIVA(producto);

  return {
    nombre: producto.nombre,
    cantidad: lineaTicket.cantidad,
    precioSinIva: producto.precio,
    tipoIva: producto.tipoIva,
    precioConIva: precioUnidadConIVA,
  };
};

const calcularPrecioUnidadConIVA = (producto: Producto): number => {
  const precio = producto.precio;
  const porcentajeDeIVA = obtenerPorcentaje(producto.tipoIva);
  return precio + (precio * porcentajeDeIVA) / 100;
};

const obtenerPorcentaje = (tipoIva: string): number => {
  const tipoDeIVA = tiposDeIVA.filter((iva) => iva.tipoDeIVA === tipoIva);
  const porcentaje = tipoDeIVA[0].porcentaje;
  return porcentaje;
};

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  const lineaTickets: ResultadoLineaTicket[] = [];

  for (let i = 0; i < lineasTicket.length; i++) {
    lineaTickets.push(calcularLineaTicket(lineasTicket[i]));
  }

  const totalTickets = calculaTotalTicket(lineaTickets);
  const totalTipoIva = calcularTotalTipoIva();

  return {
    lineas: lineaTickets,
    total: totalTickets,
    desgloseIva: totalTipoIva,
  };
};

console.log(calculaTicket(productos));
