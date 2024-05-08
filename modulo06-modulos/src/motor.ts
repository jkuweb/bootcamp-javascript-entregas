import {
  PUNTUACION_GANADORA,
  PUNTUACION_BAJA,
  PUNTUACION_MEDIA,
  PUNTUACION_ALTA,
  puntuacion,
  setPuntuacion,
} from "./modelo";

export const obtenerNumeroAleatorio = () => {
  return Math.ceil(Math.random() * 10);
};

export const generarCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7 || numeroAleatorio > 9) {
    numeroAleatorio += 2;
  }

  return numeroAleatorio;
};

export const obtenerPuntosDeLaCarta = (numeroCarta: number) => {
  if (numeroCarta >= 10) {
    numeroCarta = 0.5;
  }
  return numeroCarta;
};

export const calcularPuntuacionTotal = (puntos: number) => {
  setPuntuacion(puntuacion + puntos);
  return puntuacion;
};

export const isGameOver = () => {
  return puntuacion > PUNTUACION_GANADORA ? true : false;
};

export const valorarResultado = () => {
  if (puntuacion < PUNTUACION_BAJA) {
    return "Eres muy conservador...";
  } else if (puntuacion <= PUNTUACION_MEDIA) {
    return "Te ha entrado el canguelo eh?";
  } else if (puntuacion <= PUNTUACION_ALTA) {
    return "Casi casi...";
  } else if (puntuacion === PUNTUACION_GANADORA) {
    return "¡ Lo has clavado! ¡Enhorabuena!";
  } else {
    return "";
  }
};
