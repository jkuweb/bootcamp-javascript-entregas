import { commonPasswords } from "./data";
import { validacionInfo, validarClave } from "./motor";

const errorMsn = document.getElementById("errorMessage");

export const onFormSubmit = (event: HTMLFormElement) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const nombre = String(data.get("nombre"));
  const password = String(data.get("password"));
  validarClave(nombre, password, commonPasswords);

  if (
    errorMsn !== null &&
    errorMsn !== undefined &&
    errorMsn instanceof HTMLElement
  ) {
    const className = validacionInfo.esValida ? "correct-msn" : "error-msn";
    const validationText = validacionInfo.esValida
      ? "Contraseña válida"
      : validacionInfo.error;
    errorMsn.innerHTML = `<p class=${className}>${validationText}</p>`;
  }
};

const btnRefrescar = document.getElementById("refrescar");
btnRefrescar?.addEventListener("click", () => {
  window.location.reload();
});
