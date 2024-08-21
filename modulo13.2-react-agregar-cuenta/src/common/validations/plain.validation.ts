import validator from "validator";

export const isValidIban = (iban: string): boolean => validator.isIBAN(iban)

export const isPositiveNumber = (amount: number): boolean => {
	return amount > 0;
}

export const isDateAfterToday = (date: string): boolean => {
	return new Date(date) > new Date()
}

export const isEmailWellFormated = (email: string): boolean => {
	return validator.isEmail(email)
}

export const isStringValueInformed = (field: string): boolean => {
	return field !== '';
}

export const isValueNotNullOrUndefined = <T> (value: T): boolean => {
	return value !== undefined && value !== null
}
