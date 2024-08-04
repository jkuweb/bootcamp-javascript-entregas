import { Imagen } from './model';
import {
	comprobarSiExistenEtiquetasIMG,
	obtenerUrlDeLasImagenesDelHTML,
} from './motor';

const vaciarCajaDeTexto = (): void => {
	const cajaDeTexto = document.getElementById('cajaDeTexto');
	if (cajaDeTexto && cajaDeTexto instanceof HTMLTextAreaElement) {
		cajaDeTexto.value = '';
	}
};

const mostrarAlerta = (): void => {
	alert('No existe ninguna imagen');
	vaciarCajaDeTexto();
};

const obtenerHTML = (): string => {
	const elementoTextArea = document.getElementById('cajaDeTexto');
	let HTML;
	if (elementoTextArea && elementoTextArea instanceof HTMLTextAreaElement) {
		HTML = elementoTextArea.value;
	}

	return HTML;
};

const crearElementoImagen = (imagenURL: string): HTMLImageElement => {
	const elementoImagen = document.createElement('img');
	elementoImagen.src = `${imagenURL}`;
	elementoImagen.classList.add('caja__imagen');

	return elementoImagen;
};

const crearElementoSpan = (imagenURL: string): HTMLSpanElement => {
	const elementoSpan = document.createElement('span');
	elementoSpan.textContent = imagenURL;
	elementoSpan.classList.add('caja__imagenURL');

	return elementoSpan;
};

const crearContenedorDeImagene = (imagen: Imagen): HTMLElement => {
	const contenedorDeImagenes = document.createElement('article');
	contenedorDeImagenes.classList.add('caja');

	const elementoImagen = crearElementoImagen(imagen.imagenURL);
	contenedorDeImagenes.appendChild(elementoImagen);

	const elementoSpan = crearElementoSpan(imagen.imagenURL);
	contenedorDeImagenes.append(elementoSpan);

	return contenedorDeImagenes;
};

const mostrarListadoDeImagenes = (): void => {
	const contenedorListadoImagenes = document.getElementById('listadoImagenes');

	const HTML = obtenerHTML();
	const existenImagenes = comprobarSiExistenEtiquetasIMG(HTML);
	const imagenes = obtenerUrlDeLasImagenesDelHTML(HTML);

	if (!existenImagenes) {
		mostrarAlerta();
	}

	imagenes.forEach(imagen => {
		const contenedorDeImagen = crearContenedorDeImagene(imagen);
		if (contenedorListadoImagenes) {
			contenedorListadoImagenes.appendChild(contenedorDeImagen);
		}
	});
};

export const inicializarFormulario = (): void => {
	const formulario = document.getElementById('formulario');
	if (formulario && formulario instanceof HTMLElement) {
		formulario.addEventListener('submit', evento => {
			evento.preventDefault();
			mostrarListadoDeImagenes();
		});
	}
};
