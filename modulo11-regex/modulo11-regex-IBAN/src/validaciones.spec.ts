import { describe, expect, test } from 'vitest';
import { estaBienFormadoElIBAN } from './motor';

describe('estaBienFormadoElIBAN', () => {
	test.each([
		['ES21 1465 0100 72 2030876293', true],
		['ES2114650100722030876293', true],
		['ES21-1465-0100-72-2030876293', true],
		['ES6621000418401234567891', true],
		['ES66210004184012345678915', false],
		['ES-6621-0004-1840-12345678915', false],
		['ES662100041840123456789', false],
		['ES21  1465 0100 72 2030876293', false],
	])(
		'para el IBAN %s debería de devolver %s ',
		(IBAN: string, expected: boolean) => {
			expect(estaBienFormadoElIBAN(IBAN)).toBe(expected);
		}
	);
});
