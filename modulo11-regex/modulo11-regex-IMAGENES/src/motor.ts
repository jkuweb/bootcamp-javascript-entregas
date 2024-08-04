import { Imagen } from './model';

const patron =
	/<img\s(?=.*(src=(("|')(?<imgURL>https?:\/\/[A-z,0-9]*(.|:|\/)?[A-z,0-9]*(.|:|\/)?.{1,})('|"))\s?(\/>)))/g;

export const comprobarSiExistenEtiquetasIMG = (HTML: string): boolean => {
	const regex = new RegExp(patron);

	return regex.test(HTML);
};

export const obtenerUrlDeLasImagenesDelHTML = (HTML: string) => {
	const regex = new RegExp(patron);

	const urlImagenes: Imagen[] = [];
	let array1;

	while ((array1 = regex.exec(HTML)) !== null) {
		urlImagenes.push({
			imagenURL: array1.groups.imgURL,
		});
	}
	return urlImagenes;
};
