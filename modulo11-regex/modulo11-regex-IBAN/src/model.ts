export interface BancoSegunCodigo {
	codigo: string;
	banco: string;
}

export interface ResultadoFinal {
	formato: string;
	validez: string;
	banco: string;
	codigoSucursal: string;
	digitoDeControl: string;
	numeroDeCuenta: string;
}

export interface InformacionIBAN {
	banco: string;
	sucursal: string;
	digitosControl: string;
	numeroCuenta: string;
}

const defaultInformacionIBAN = {
	banco: '',
	sucursal: '',
	digitosControl: '',
	numeroCuenta: '',
};
export default defaultInformacionIBAN;
