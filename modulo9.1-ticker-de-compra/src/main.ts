import { productos } from "./data";
import { calcularCuantia, calcularPrecioUnidadConIVA, calcularTotal, calcularTotalIVA, eliminarProductosSinCantidad } from "./helpers";
import {
  LineaTicket,
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

export const tiposDeIVA: TiposDeIva[] = [
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

