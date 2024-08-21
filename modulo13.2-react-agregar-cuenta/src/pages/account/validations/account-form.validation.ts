import { FormValidationResult } from "@/common/validations";
import { AccountError, AccountVm } from "../account.vm";
import { validateAccountTypeField, validateAliasField } from "./account-field.validation";

export const validateForm = (account: AccountVm): FormValidationResult<AccountError> => {
	const fieldValidationResults = [
		validateAccountTypeField(account.type),
		validateAliasField(account.alias)
	];

	const formValidationResult: FormValidationResult<AccountError> = {
		succeeded: fieldValidationResults.every((f) => f.succeeded),
		errors: {
			type: fieldValidationResults[0].errorMessage ?? '',
			alias: fieldValidationResults[1].errorMessage ?? ''
		}
	};

	return formValidationResult;
}
