import { ValidacionClave } from "./modelo";

const __LONGITUD_MININA = 8;

const errorMensaje = {
  minMax: "La clave debe de tener mayúsculas y minúsculas",
  numeros: "La clave debe de tener números",
  caracteresEspeciales: "La clave debe de tener caracteres especiales",
  longitudMinima: "La clave debe de tener una longitud mínima de 8 caracteres",
  noTenerNombreUsuario: "La clave no debe tener el nombre del usuario",
  palabrasComunes: "La clave no debe de contener palabras comunes",
};

export const validacionInfo: ValidacionClave = {
  esValida: true,
};

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  tieneMayusculasYMinusculas(clave);
  tieneNumeros(clave);
  tieneCaracteresEspeciales(clave);
  tieneLongitudMinima(clave);
  tieneNombreUsuario(nombreUsuario, clave);
  tienePalabrasComunes(clave, commonPasswords);

  return validacionInfo;
};

const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const regex = /(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{0,}/g;
  console.log(clave.match(regex)?.length);
  if (clave.match(regex)?.length) {
    return generarInfoValidacion(true);
  }
  return generarInfoValidacion(false, errorMensaje.minMax);
};

const tieneNumeros = (clave: string): ValidacionClave => {
  const regex = /[0-9]/g;
  const coincidencias = clave.match(regex);
  if (coincidencias !== null) {
    if (coincidencias.length >= 1) {
      return generarInfoValidacion(true);
    }
  }
  return generarInfoValidacion(false, errorMensaje.numeros);
};

const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
  if (clave.match(regex)?.length) {
    return generarInfoValidacion(true);
  }
  return generarInfoValidacion(false, errorMensaje.caracteresEspeciales);
};

const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length >= __LONGITUD_MININA) {
    return generarInfoValidacion(true);
  }
  return generarInfoValidacion(false, errorMensaje.longitudMinima);
};

const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  const regex = new RegExp(`${nombreUsuario}`, "g");
  if (clave.match(regex) === null) {
    return generarInfoValidacion(true);
  }
  return generarInfoValidacion(false, errorMensaje.noTenerNombreUsuario);
};

const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const regexResult = commonPasswords.filter((commonPassword) => {
    const regex = new RegExp(`${commonPassword}`);
    if (clave.match(regex) !== null) {
      return true;
    }
  });
  if (regexResult.length === 0) {
    return generarInfoValidacion(true);
  }
  return generarInfoValidacion(false, errorMensaje.palabrasComunes);
};

const generarInfoValidacion = (
  esValida: boolean,
  mensajeDeError: string = ""
): ValidacionClave => {
  if (!validacionInfo.error) {
    validacionInfo.esValida = esValida;
    validacionInfo.error = mensajeDeError;
  }
  return validacionInfo;
};
