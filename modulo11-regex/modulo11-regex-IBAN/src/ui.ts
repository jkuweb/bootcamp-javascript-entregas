import { ResultadoFinal } from './model';
import {
	estaBienFormadoElIBAN,
	esValidoElIBAN,
	obtenerInformacionIBAN,
	obtenerNombreDelBancoSegunCodigo,
} from './motor';

const mostrarMensajeDeValidacionFormato = (
	esFormatoValido: boolean
): string => {
	return esFormatoValido
		? 'El IBAN está bien formado'
		: 'El IBAN no está bien formado';
};

const mostrarMensajeDeValidacion = (esValido: boolean): string => {
	return esValido ? 'El IBAN es válido' : 'El IBAN no es válido';
};

const vaciarCajaBusqueda = () => {
	const elementoInputBusqueda = document.getElementById('busqueda');
	if (
		elementoInputBusqueda &&
		elementoInputBusqueda instanceof HTMLInputElement
	) {
		elementoInputBusqueda.value = '';
	}
};

const vaciarListadoResultados = () => {
	const contenedorListado = document.getElementById('listadoResultados');
	if (contenedorListado && contenedorListado instanceof HTMLElement) {
		contenedorListado.innerHTML = '';
	}
};

const obtenerIBAN = (): string => {
	const elementoInputBusqueda = document.getElementById('busqueda');
	let IBAN = '';

	if (
		elementoInputBusqueda &&
		elementoInputBusqueda instanceof HTMLInputElement
	) {
		IBAN = elementoInputBusqueda.value;
	}

	return IBAN || '';
};

const crearElementoSpan = (categoria: string): HTMLSpanElement => {
	const elementoSpan = document.createElement('span');
	elementoSpan.textContent = categoria;
	elementoSpan.classList.add('categoria');

	return elementoSpan;
};

const crearElementoLista = (): HTMLElement => {
	const item = document.createElement('ul');

	return item;
};

const crearElementoListItem = (texto: string): HTMLElement => {
	const item = document.createElement('li');
	item.textContent = texto;
	item.classList.add('info-text');

	return item;
};

const crearContenedorResultados = (resultado: ResultadoFinal) => {
	const elementoLista = crearElementoLista();
	const formato = crearElementoListItem(resultado.formato);
	elementoLista.append(formato);

	const validez = crearElementoListItem(resultado.validez);
	elementoLista.appendChild(validez);

	const banco = crearElementoListItem(resultado.banco);
	const nombreBanco = crearElementoSpan('Banco');
	banco.insertBefore(nombreBanco, banco.firstChild);
	elementoLista.appendChild(banco);

	const sucursal = crearElementoListItem(resultado.codigoSucursal);
	const nombreSucursal = crearElementoSpan('Surcursal');
	sucursal.insertBefore(nombreSucursal, sucursal.firstChild);
	elementoLista.appendChild(sucursal);

	const digitoDeControl = crearElementoListItem(resultado.digitoDeControl);
	const nombreDigitoDeControl = crearElementoSpan('Digito de control');
	digitoDeControl.insertBefore(
		nombreDigitoDeControl,
		digitoDeControl.firstChild
	);
	elementoLista.appendChild(digitoDeControl);

	const numeroDeCuenta = crearElementoListItem(resultado.numeroDeCuenta);
	const nombreNumeroDeCuenta = crearElementoSpan('Numero de cuenta');
	numeroDeCuenta.insertBefore(nombreNumeroDeCuenta, numeroDeCuenta.firstChild);
	elementoLista.appendChild(numeroDeCuenta);

	return elementoLista;
};

const obtenerResultados = (): ResultadoFinal[] => {
	const IBAN = obtenerIBAN();
	const validarFormatoIBAN = estaBienFormadoElIBAN(IBAN);
	const validarIBAN = esValidoElIBAN(IBAN);
	const informacionIBAN = obtenerInformacionIBAN(IBAN);
	const nombreDelBanco = obtenerNombreDelBancoSegunCodigo(
		informacionIBAN.banco
	);

	return [
		{
			formato: mostrarMensajeDeValidacionFormato(validarFormatoIBAN),
			validez: mostrarMensajeDeValidacion(validarIBAN),
			banco: nombreDelBanco,
			codigoSucursal: informacionIBAN.sucursal,
			digitoDeControl: informacionIBAN.digitosControl,
			numeroDeCuenta: informacionIBAN.numeroCuenta,
		},
	];
};

const mostrarListadoDeResultados = () => {
	const contenedor = document.getElementById('listadoResultados');
	const resultados = obtenerResultados();
	vaciarCajaBusqueda();
	vaciarListadoResultados();
	resultados.forEach(resultado => {
		const contenedorListado = crearContenedorResultados(resultado);
		if (contenedor && contenedor instanceof HTMLElement) {
			contenedor.appendChild(contenedorListado);
		}
	});
};

export const inicializarFormulario = () => {
	const formulario = document.getElementById('formulario');
	if (formulario && formulario instanceof HTMLElement) {
		formulario.addEventListener('submit', evento => {
			evento.preventDefault();
			mostrarListadoDeResultados();
		});
	}
};
