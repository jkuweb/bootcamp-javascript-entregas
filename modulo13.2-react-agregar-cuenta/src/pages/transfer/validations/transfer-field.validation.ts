import { buildRequiredFieldValidationFailedResponse, buildValidationFailedResult, buildValidationSucceededResult, FieldValidationResult, INVALID_AMOUNT_MESSAGE, INVALID_EMAIL_MESSAGE, INVALID_IBAN_MESSAGE, INVALID_REAL_DATE_MESSAGE, isDateAfterToday, isEmailWellFormated, isPositiveNumber, isStringValueInformed, isValidIban, isValueNotNullOrUndefined } from "@/common/validations";


export const validateAccounIdField = (value: string): FieldValidationResult => {
	if (!isStringValueInformed(value)) {
		return buildRequiredFieldValidationFailedResponse()
	}
	return buildValidationSucceededResult()
}

export const validateIBANField = (value: string): FieldValidationResult => {
	if (!isStringValueInformed(value)) {
		return buildRequiredFieldValidationFailedResponse()
	}

	if (!isValidIban(value)) {
		return buildValidationFailedResult(INVALID_IBAN_MESSAGE)
	}

	return buildValidationSucceededResult()
}

export const validateNameField = (value: string): FieldValidationResult => {
	if (!isStringValueInformed(value)) {
		return buildRequiredFieldValidationFailedResponse()
	}

	return buildValidationSucceededResult()
}

export const validateAmountField = (value: number): FieldValidationResult => {
	if (!isPositiveNumber(value)) {
		return buildValidationFailedResult(INVALID_AMOUNT_MESSAGE)
	}
	return buildValidationSucceededResult()
}

export const validateConceptField = (value: string): FieldValidationResult => {
	if (!isStringValueInformed(value)) {
		return buildRequiredFieldValidationFailedResponse()
	}
	return buildValidationSucceededResult()
}

export const validateNotesField = (_: string): FieldValidationResult => {
	return buildValidationSucceededResult()
}

export const validateRealDateTransferField = (value?: string): FieldValidationResult => {
	if (!isValueNotNullOrUndefined(value)) {
		return buildValidationSucceededResult()
	}

	if (value && !isDateAfterToday(value)) {
		return buildValidationFailedResult(INVALID_REAL_DATE_MESSAGE)
	}

	return buildValidationSucceededResult()
}

export const validateEmailField = (value?: string): FieldValidationResult => {
	if (!isValueNotNullOrUndefined(value)) {
		return buildValidationSucceededResult();
	}

	if (value && !isEmailWellFormated(value)) {
		return buildValidationFailedResult(INVALID_EMAIL_MESSAGE)
	}

	return buildValidationSucceededResult();
}
