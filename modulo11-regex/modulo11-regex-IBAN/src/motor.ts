import * as ibantools from 'ibantools';
import { bancosSegunCodigo } from './data';
import defaultInformacionIBAN, { InformacionIBAN } from './model';

const patron =
	'^(ES\\d{2})([^\\d]|\\s|-)?(?<banco>(\\d){4})([^\\d]|\\s|-)?(?<sucursal>(\\d){4})([^\\d]|\\s|-)?(?<digitosControl>(\\d){2})([^\\d]|\\s|-)?(?<numeroCuenta>(\\d){10})$';

export const estaBienFormadoElIBAN = (IBAN: string): boolean => {
	const regex = new RegExp(patron);

	return regex.test(IBAN);
};

export const esValidoElIBAN = (IBAN: string) => {
	ibantools.countrySpecs.ES;

	return ibantools.isValidIBAN(IBAN);
};

export const obtenerInformacionIBAN = (IBAN: string): InformacionIBAN => {
	const regex = new RegExp(patron);

	const groups = regex.exec(IBAN)?.groups;
	let informacionIBAN = defaultInformacionIBAN;

	if (groups) {
		informacionIBAN = {
			banco: groups.banco,
			sucursal: groups.sucursal,
			digitosControl: groups.digitosControl,
			numeroCuenta: groups.numeroCuenta,
		};
	}

	return informacionIBAN;
};

export const obtenerNombreDelBancoSegunCodigo = (codigo: string): string => {
	let nombreDelBanco = '';
	for (const bancoSegunCodigo of bancosSegunCodigo) {
		if (bancoSegunCodigo.codigo === codigo) {
			nombreDelBanco = bancoSegunCodigo.banco;
		}
	}

	return nombreDelBanco;
};
