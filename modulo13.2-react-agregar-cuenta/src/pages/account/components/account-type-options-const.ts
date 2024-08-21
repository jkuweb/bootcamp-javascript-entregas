export const CUENTA_CORRIENTE_ID = '1';
export const CUENTA_AHORRO_ID = '2';

const CUENTA_CORRIENTE = 'cuenta corriente';
const CUENTA_AHORRO = 'cuenta ahorro';

export const getAccountTypes = () => {
	return {
		'cuentaCorriente': CUENTA_CORRIENTE,
		'cuentaAhorro': CUENTA_AHORRO
	}
}
