import { Reserva } from './modelo';

export const reservasCaso1: Reserva[] = [
  {
    tipoHabitacion: 'standard',
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: 'standard',
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: 'suite',
    pax: 2,
    noches: 1,
  },
];

export const reservasCaso2: Reserva[] = [
  {
    tipoHabitacion: 'standard',
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: 'standard',
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: 'suite',
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];
