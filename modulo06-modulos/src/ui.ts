import {
  isGameOver,
  obtenerNumeroAleatorio,
  generarCarta,
  obtenerPuntosDeLaCarta,
  calcularPuntuacionTotal,
  valorarResultado
} from "./motor";

import {
  puntuacion,
  mePlanto,
  setMePlanto,
} from "./modelo";

const appBox = document.getElementById("app");
const element = document.getElementById("mostrar-puntuacion");
const textoMensaje = document.getElementById("mensaje");
const botonDameCarta = document.getElementById("dame-carta");
const botonMePlanto = document.getElementById("me-planto");
const ImgMostrarCarta = document.getElementById("mostrar-carta");
const botonReload = document.createElement("button");
const botonFuturo = document.createElement("button");
botonReload.innerText = "nueva-partida";
botonFuturo.innerText = "QUE HABRÍA PASADO";

enum Cartas {
  cartaBocaAbajo,
  unoDeCopas,
  dosDeCopas,
  tresDeCopas,
  cuatroDeCopas,
  cincoDeCopas,
  seisDeCopas,
  sieteDeCopas,
  sotaDeCopas = 10,
  caballoDeCopas,
  reyDeCopas,
}

export const obtenerUrlImage = (carta: number) => {
  const baseUrl =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas";
  switch (carta) {
    case Cartas.cartaBocaAbajo:
      return `${baseUrl}/back.jpg`;
    case Cartas.unoDeCopas:
      return `${baseUrl}/copas/1_as-copas.jpg`;
    case Cartas.dosDeCopas:
      return `${baseUrl}/copas/2_dos-copas.jpg`;
    case Cartas.tresDeCopas:
      return `${baseUrl}/copas//3_tres-copas.jpg`;
    case Cartas.cuatroDeCopas:
      return `${baseUrl}/copas/4_cuatro-copas.jpg`;
    case Cartas.cincoDeCopas:
      return `${baseUrl}/copas/5_cinco-copas.jpg`;
    case Cartas.seisDeCopas:
      return `${baseUrl}/copas/6_seis-copas.jpg`;
    case Cartas.sieteDeCopas:
      return `${baseUrl}/copas/7_siete-copas.jpg`;
    case Cartas.sotaDeCopas:
      return `${baseUrl}/copas/10_sota-copas.jpg`;
    case Cartas.caballoDeCopas:
      return `${baseUrl}/copas/11_caballo-copas.jpg`;
    case Cartas.reyDeCopas:
      return `${baseUrl}/copas/12_rey-copas.jpg`;
    default:
      return `${baseUrl}/back.jpg`;
  }
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

const mostrarPrediccion = () => {
  pedirCarta();
};

export const mostrarImagenCarta = (urlCarta: string) => {
  if (
    ImgMostrarCarta !== null &&
    ImgMostrarCarta !== undefined &&
    ImgMostrarCarta instanceof HTMLImageElement
  ) {
    ImgMostrarCarta.src = urlCarta;
  }
};

export const mostrarPuntuacion = () => {
  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLElement
  ) {
    element.innerHTML = String(puntuacion);
  }
};
const insertarClaseAlBoton = (boton: HTMLButtonElement) => {
  boton.classList.add("btn-inhabilitado");
};

export const mostarBotonesDeshabilitados = () => {
  if (
    botonDameCarta !== null &&
    botonDameCarta !== undefined &&
    botonDameCarta instanceof HTMLButtonElement
  ) {
    insertarClaseAlBoton(botonDameCarta);
  }

  if (
    botonMePlanto !== null &&
    botonMePlanto !== undefined &&
    botonMePlanto instanceof HTMLButtonElement
  ) {
    insertarClaseAlBoton(botonMePlanto);
  }
  if (mePlanto && isGameOver()) {
    if (
      botonFuturo !== null &&
      botonFuturo !== undefined &&
      botonFuturo instanceof HTMLButtonElement
    ) {
      insertarClaseAlBoton(botonFuturo);
    }
  }
};

export const mostrarBotonReinicio = () => {
  if (
    appBox !== null &&
    appBox !== undefined &&
    appBox instanceof HTMLElement
  ) {
    appBox.append(botonReload);
  }
};

export const mostrarMensaje = (mensaje: string) => {
  if (
    textoMensaje !== null &&
    textoMensaje !== undefined &&
    textoMensaje instanceof HTMLElement
  ) {
    textoMensaje.innerText = mensaje;
  }
};

export const mostrarBtnPrediccion = () => {
  botonFuturo.classList.add("mostrar-futuro");
  appBox?.append(botonFuturo);
};

if (
  botonDameCarta !== null &&
  botonMePlanto !== undefined &&
  botonDameCarta instanceof HTMLButtonElement
) {
  botonDameCarta.addEventListener("click", () => {
    if (isGameOver() || mePlanto) return;
    pedirCarta();
  });
}
if (
  botonMePlanto !== null &&
  botonMePlanto !== undefined &&
  botonMePlanto instanceof HTMLButtonElement
) {
  botonMePlanto.addEventListener("click", () => {
    if (isGameOver() || mePlanto) return;
    pedirMePlanto();
  });
}

botonReload.addEventListener("click", () => {
  window.location.reload();
});

botonFuturo.addEventListener("click", () => {
  if (isGameOver()) return;
  mostrarPrediccion();
});
