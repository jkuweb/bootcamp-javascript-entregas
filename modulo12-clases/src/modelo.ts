export interface Reserva {
  tipoHabitacion: 'standard' | 'suite';
  pax: number;
  noches: number;
  desayuno?: boolean;
}

export const tiposDeHabitacion = {
  standard: 'standard',
  suite: 'suite',
};

export const IVA = 21;
export const PRECIO_POR_CADA_PERSONA_ADICIONAL_POR_NOCHE = 40;
export const PRECIO_HABITACION_STANDARD = 100;
export const PRECIO_HABITACION_SUITE = 150;
export const PRECIO_SERVICIO_DESAYUNO = 15;
