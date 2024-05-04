export const PUNTUACION_INICIAL = 0;
export const PUNTUACION_GANADORA = 7.5;
export const PUNTUACION_BAJA = 4;
export const PUNTUACION_MEDIA = 5;
export const PUNTUACION_ALTA = 7;

export let puntuacion = 0;
export let mePlanto = false;

export const setPuntuacion = (nuevaPuntuacion: number) => puntuacion = nuevaPuntuacion

export const setMePlanto = (value: boolean) => mePlanto = value