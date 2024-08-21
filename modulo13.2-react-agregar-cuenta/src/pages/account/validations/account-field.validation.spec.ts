import { REQUIRED_FIELD_MESSAGE } from "@/common/validations";
import { validateAccountTypeField, validateAliasField } from "./account-field.validation";

describe('account-field.validation specs', () => {
	describe('validateAccountTypeField', () => {
		it('should return false when account type is not informed', () => {
			// Arrange 
			const accountType = '';

			// Act
			const result = validateAccountTypeField(accountType);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
		})
		it('should return true when account type is informed', () => {
			// Arrange
			const accountType = '1';

			// Act
			const result = validateAccountTypeField(accountType);

			// Assert
			expect(result.succeeded).toBeTruthy();
		})
	})
	describe('validateAliasField', () => {
		it('should return false when alias is not informed', () => {
			// Arrange 
			const alias = '';

			// Act
			const result = validateAliasField(alias);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
		})
		it('should return true when account type is informed', () => {
			// Arrange
			const alias = '1';

			// Act
			const result = validateAliasField(alias);

			// Assert
			expect(result.succeeded).toBeTruthy();
		})
	})
})


