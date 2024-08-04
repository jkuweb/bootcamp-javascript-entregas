import { describe, expect, test } from 'vitest';
import { comprobarSiExistenEtiquetasIMG } from './motor';

describe('obtenerEtiquetasIMG', () => {
	test.each([
		['<img src="http://localhost:3000/./mortadelo.webp" />', true],
		[
			'<img class="custom" src="http://localhost:3000/./mortadelo.webp" />',
			true,
		],
		['<img src="http://localhost:3000/./mortadelo.webp"/>', true],
		["<img src='http://localhost:3000/./mortadelo.webp'/>", true],
		["<img src='https://localhost:3000/./mortadelo.webp'/>", true],
		[
			'<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Grib_skov.jpg/638px-Grib_skov.jpg" />"',
			true,
		],
		['<img src="" />', false],
	])(
		'para la etiqueta %s debería de devolver %s ',
		(HTML: string, expected: boolean) => {
			expect(comprobarSiExistenEtiquetasIMG(HTML)).toBe(expected);
		}
	);
});
