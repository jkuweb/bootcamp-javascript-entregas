import {
  PUNTUACION_GANADORA,
  PUNTUACION_BAJA,
  PUNTUACION_MEDIA,
  PUNTUACION_ALTA,
  puntuacion,
  setPuntuacion,
  setMePlanto,
} from "./modelo";

import {
  mostrarImagenCarta,
  mostrarPuntuacion,
  obtenerUrlImage,
  mostrarMensaje,
  mostrarBtnPrediccion,
  mostrarBotonReinicio,
  mostarBotonesDeshabilitados,
} from "./ui";

const obtenerNumeroAleatorio = () => {
  return Math.ceil(Math.random() * 10);
};

const generarCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7 || numeroAleatorio > 9) {
    numeroAleatorio += 2;
  }

  return numeroAleatorio;
};

const obtenerPuntosDeLaCarta = (numeroCarta: number) => {
  if (numeroCarta >= 10) {
    numeroCarta = 0.5;
  }
  return numeroCarta;
};

const calcularPuntuacionTotal = (puntos: number) => {
  setPuntuacion(puntuacion + puntos);
  return puntuacion;
};

export const isGameOver = () => {
  return puntuacion > PUNTUACION_GANADORA ? true : false;
};

// PEDIR CARTA

export const pedirCarta = () => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const carta = generarCarta(numeroAleatorio);
  const urlCarta = obtenerUrlImage(carta);
  mostrarImagenCarta(urlCarta);
  const puntoCarta = obtenerPuntosDeLaCarta(carta);
  calcularPuntuacionTotal(puntoCarta);
  mostrarPuntuacion();
  if (isGameOver()) {
    mostrarMensaje("Game Over");
    mostarBotonesDeshabilitados();
    mostrarBotonReinicio();
  }
};

const valorarResultado = () => {
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

// PEDIR PLANTO

export const pedirMePlanto = () => {
  setMePlanto(true);
  const mensajeValoracion = valorarResultado();
  mostrarMensaje(mensajeValoracion);
  mostarBotonesDeshabilitados();
  mostrarBtnPrediccion();
  if (isGameOver()) {
    mostrarBotonReinicio();
  }
};

// MOSTRAR PREDICCIÓN

export const mostrarPrediccion = () => {
  pedirCarta();
};
