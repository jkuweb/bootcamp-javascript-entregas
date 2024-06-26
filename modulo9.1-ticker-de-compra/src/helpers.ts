import { tiposDeIVA } from "./main";
import { LineaTicket, Producto, ResultadoLineaTicket, TotalPorTipoIva } from "./modelo";

export const calcularPrecioUnidadConIVA = (producto: Producto): number => {
  const precio = producto.precio;
  const porcentajeDeIVA = obtenerPorcentaje(producto.tipoIva);
  return precio + (precio * porcentajeDeIVA) / 100;
};

export const obtenerPorcentaje = (tipoIva: string): number => {
  const tipoDeIVA = tiposDeIVA.filter((iva) => iva.tipoDeIVA === tipoIva);
  const porcentaje = tipoDeIVA[0].porcentaje;
  return porcentaje;
};

export const calcularTotal = (
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

export const calcularTotalIVA = (totalConIva: number, totalSinIva: number): number => {
  let total = totalConIva - totalSinIva;
  return parseFloat(total.toFixed(2));
};

export const calcularCuantia = (
  productoAgrupados: LineaTicket[],
  porcentaje: number
) => {
  return productoAgrupados.reduce((acc, producto) => acc + (producto.cantidad * producto.producto.precio * porcentaje) / 100, 0)

};

export const eliminarProductosSinCantidad = (
  listadDeProductosPorTipoDeIva: TotalPorTipoIva[]
): TotalPorTipoIva[] => {
  return listadDeProductosPorTipoDeIva.filter((productoPorTipoDeIva) => productoPorTipoDeIva.cuantia !== 0)
};



