import "./style.css";

const PUNTUACION_INICIAL = 0;
const PUNTUACION_GANADORA = 7.5;
const PUNTUACION_BAJA = 4;
const PUNTUACION_MEDIA = 5;
const PUNTUACION_ALTA = 7;

let puntuacion = 0;
let mePlanto = false;

const obtenerNumeroAleatorio = () => {
  return Math.ceil(Math.random() * 10);
};

const generarCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7 || numeroAleatorio > 9) {
    numeroAleatorio += 2;
  }

  return numeroAleatorio;
};

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

const obtenerUrlImage = (carta: number) => {
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

const mostrarImagenCarta = (urlCarta: string) => {
  if (
    ImgMostrarCarta !== null &&
    ImgMostrarCarta !== undefined &&
    ImgMostrarCarta instanceof HTMLImageElement
  ) {
    ImgMostrarCarta.src = urlCarta;
  }
};

const obtenerPuntosDeLaCarta = (numeroCarta: number) => {
  if (numeroCarta >= 10) {
    numeroCarta = 0.5;
  }
  return numeroCarta;
};

const calcularPuntuacionTotal = (puntos: number) => {
  puntuacion = puntuacion + puntos;
  return puntuacion;
};

const mostrarPuntuacion = () => {
  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLElement
  ) {
    element.innerHTML = String(puntuacion);
  }
};

const isGameOver = () => {
  return puntuacion > PUNTUACION_GANADORA ? true : false;
};

const insertarClaseAlBoton = (boton: HTMLButtonElement) => {
  boton.classList.add("btn-inhabilitado");
};

const mostarBotonesDeshabilitados = () => {
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

const mostrarBotonReinicio = () => {
  if (
    appBox !== null &&
    appBox !== undefined &&
    appBox instanceof HTMLElement
  ) {
    appBox.append(botonReload);
  }
};

const mostrarMensaje = (mensaje: string) => {
  if (
    textoMensaje !== null &&
    textoMensaje !== undefined &&
    textoMensaje instanceof HTMLElement
  ) {
    textoMensaje.innerText = mensaje;
  }
};

// PEDIR CARTA

const pedirCarta = () => {
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

const mostrarBtnPrediccion = () => {
  botonFuturo.classList.add("mostrar-futuro");
  appBox?.append(botonFuturo);
};

// PEDIR PLANTO

const pedirMePlanto = () => {
  mePlanto = true;
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

const mostrarPantallaDeInicio = () => {
  mostrarPuntuacion();
  const cartaInicial = obtenerUrlImage(PUNTUACION_INICIAL);
  mostrarImagenCarta(cartaInicial);
};

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

document.addEventListener("DOMContentLoaded", () => {
  mostrarPantallaDeInicio();
});
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
