import { MensajeReglasJuego, Tablero } from "./modelo";
import {
  esPartidaCompleta,
  parejaEncontrada,
  parejaNoEncontrada,
  sePuedeVoltearLaCarta,
  sonPareja,
  voltearLaCarta,
} from "./motor";

const imagenes = document.getElementsByTagName("img");
const cajas = document.querySelectorAll(".grid-item");
const notificacion = document.getElementById("notificacion");
const contador = document.getElementById("contador");

const mostrarEfectoHover = (indice: number) => {
  const caja = cajas[indice];
  caja.classList.add("efecto-hover");
};

const eliminarEfectoHover = (indiceA: number, indiceB: number) => {
  cajas[indiceA].classList.remove("efecto-hover");
  cajas[indiceB].classList.remove("efecto-hover");
};

const mostrarImagen = (tablero: Tablero, indice: number) => {
  const imagenSrc = tablero.cartas[indice].imagen;
  const imagen = imagenes[indice];
  imagen.setAttribute("src", imagenSrc);
  mostrarEfectoHover(indice);
};

const ocultarImagenes = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
) => {
  const imagenA = imagenes[indiceA];
  const imagenB = imagenes[indiceB];
  imagenA.setAttribute("src", "");
  imagenB.setAttribute("src", "");
  parejaNoEncontrada(tablero, indiceA, indiceB);
  eliminarEfectoHover(indiceA, indiceB);
};

const mostrarFinalPartida = () => {
  const box = document.getElementById("mensaje");

  if (box !== undefined && box !== null && box instanceof HTMLElement) {
    box.classList.add("mensaje");
  }
};

let count = 0;
const mostrarContador = () => {
  if (
    contador !== null &&
    contador !== undefined &&
    contador instanceof HTMLElement
  ) {
    contador.innerText = String(++count);
  }
};

const mostrarCarta = (tablero: Tablero, indice: number) => {
  if (sePuedeVoltearLaCarta(tablero, indice)) {
    voltearLaCarta(tablero, indice);
    mostrarImagen(tablero, indice);
  }
};

const comprobarReglasJuego = (tablero: Tablero, indice: number) => {
  let mensaje = "";

  if (tablero.cartas[indice].estaVuelta)
    mensaje = MensajeReglasJuego.CARTA_VOLTEADA;
  if (
    tablero.estadoPartida === "DosCartasLevantadas" &&
    !tablero.cartas[indice].estaVuelta
  )
    mensaje = MensajeReglasJuego.TERCERA_CARTA;

  if (
    notificacion !== null &&
    notificacion !== undefined &&
    notificacion instanceof HTMLElement
  ) {
    notificacion.innerText = mensaje;
    setTimeout(() => {
      notificacion.innerText = "";
    }, 1500);
  }
};

const comprobarSiSonPareja = (tablero: Tablero) => {
  const indiceA = tablero.indiceCartaVolteadaA;
  const indiceB = tablero.indiceCartaVolteadaB;

  if (indiceA !== undefined && indiceB !== undefined) {
    if (sonPareja(indiceA, indiceB, tablero)) {
      parejaEncontrada(tablero, indiceA, indiceB);
      return true;
    } else {
      setTimeout(() => {
        ocultarImagenes(tablero, indiceA, indiceB);
      }, 1000);
      return false;
    }
  }
};

const comprobarSiEsFinalPartida = (tablero: Tablero) => {
  if (esPartidaCompleta(tablero)) {
    mostrarFinalPartida();
  }
};

export const handleCompruebaClick = (tablero: Tablero, indice: number) => {
  comprobarReglasJuego(tablero, indice);
  mostrarCarta(tablero, indice);
  if (tablero.estadoPartida === "DosCartasLevantadas") {
    mostrarContador();
    if (comprobarSiSonPareja(tablero)) {
      comprobarSiEsFinalPartida(tablero);
    }
  }
};
