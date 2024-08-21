export interface AccountVm {
	type: string;
	alias: string;
}

export const createEmptyAccount = (): AccountVm => {
	return {
		type: '',
		alias: ''
	}
}

export interface AccountError {
	type: string,
	alias: string
}

export const createEmptyAccountError = (): AccountError => {
	return {
		type: '',
		alias: '',
	}
}

