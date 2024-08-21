import { FormValidationResult } from "@/common/validations";
import { validatePasswordField, validateUserField } from "./login-field.validation";
import {
	CredentialsFormErrors
} from "./login.vm";

export const validateForm = (
	credentials: CredentialsFormErrors
): FormValidationResult<CredentialsFormErrors> => {
	const fieldValidationResults = [
		validateUserField(credentials.user),
		validatePasswordField(credentials.password)
	];

	const formValidationResult: FormValidationResult<CredentialsFormErrors> = {
		succeeded: fieldValidationResults.every((f) => f.succeeded),
		errors: {
			user: fieldValidationResults[0].errorMessage ?? '',
			password: fieldValidationResults[1].errorMessage ?? ''
		}
	}
	return formValidationResult;
};
