import { PUNTUACION_INICIAL } from "./modelo";
import { mostrarImagenCarta, mostrarPuntuacion, obtenerUrlImage } from "./ui";

import "./style.css";

const mostrarPantallaDeInicio = () => {
  mostrarPuntuacion();
  const cartaInicial = obtenerUrlImage(PUNTUACION_INICIAL);
  mostrarImagenCarta(cartaInicial);
};

document.addEventListener("DOMContentLoaded", () => {
  mostrarPantallaDeInicio();
});
