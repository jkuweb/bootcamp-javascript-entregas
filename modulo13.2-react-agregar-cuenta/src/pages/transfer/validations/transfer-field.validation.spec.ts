import { INVALID_AMOUNT_MESSAGE, INVALID_EMAIL_MESSAGE, INVALID_IBAN_MESSAGE, INVALID_REAL_DATE_MESSAGE, REQUIRED_FIELD_MESSAGE } from "@/common/validations";
import { validateAccounIdField, validateAmountField, validateConceptField, validateEmailField, validateIBANField, validateNameField, validateRealDateTransferField } from "./transfer-field.validation";

describe('transfer-field.validation specs', () => {
	describe('validationIBANfield', () => {
		it('should return false when iban is empty', () => {
			// Arrange
			const iban = '';

			// Act
			const result = validateIBANField(iban);

			// Asert
			expect(result.succeeded).toBeFalsy()
			expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE)
		})
		it('should return false when iban is not well formed', () => {
			// Arrange 
			const iban = "ES91 2100 0418 4502 0003 1333";

			// Act
			const result = validateIBANField(iban)

			// Assert 
			expect(result.succeeded).toBeFalsy();
			expect(result.errorMessage).toEqual(INVALID_IBAN_MESSAGE);
		})
		it('should return true when iban is well formed', () => {
			// Arrange
			const iban = "ES91 2100 0418 4502 0005 1332";

			// Act
			const result = validateIBANField(iban);

			// Assert
			expect(result.succeeded).toBeTruthy()
		})
	})
	describe('validateAccountIdField', () => {
		it('should return false when account id is empty', () => {
			// Arrange
			const value = '';

			// Act
			const result = validateAccounIdField(value);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE)
		})
		it('should return true when account id is informed', () => {
			// Arrange
			const value = '1';

			// Act 
			const result = validateAccounIdField(value);

			// Assert
			expect(result.succeeded).toBeTruthy()
		})
	})
	describe('validateNameField', () => {
		it('should return false when name is empty', () => {
			// Arrange
			const value = '';

			// Act
			const result = validateNameField(value)

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE)
		})
		it('should return true when name is informed', () => {
			// Arrange
			const value = 'John Doe';

			// Act
			const result = validateNameField(value);

			// Assert
			expect(result.succeeded).toBeTruthy();
		})
	})
	describe('validateAmountField', () => {
		it('should return false when amount is negative', () => {
			// Arrange
			const value = -1;

			// Act 
			const result = validateAmountField(value);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errorMessage).toEqual(INVALID_AMOUNT_MESSAGE)
		})
		it('should return true when amount is positive', () => {
			// Arrange
			const value = 1;

			// Act
			const result = validateAmountField(value);

			// Assert
			expect(result.succeeded).toBeTruthy();
		})
	})
	describe('validateConceptField', () => {
		it('should return false when concept is empty', () => {
			// Arrange
			const value = '';

			// Act
			const result = validateConceptField(value);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE)
		})
		it('should return true when concept is informed', () => {
			// Arrange
			const value = 'John Doe';

			// Act
			const result = validateConceptField(value);

			// Assert
			expect(result.succeeded).toBeTruthy();
		})
	})
	describe('validateRealDateTranferField', () => {
		it('should return true when date is not informed', () => {
			// Arrange
			const value = undefined;

			// Act 
			const result = validateRealDateTransferField(value);

			// Assert
			expect(result.succeeded).toBeTruthy();
		})
		it('should return false when date is before today', () => {
			// Arrange
			const value = new Date();
			value.setDate(value.getDate() - 1);

			// Act
			const result = validateRealDateTransferField(value.toISOString());

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errorMessage).toEqual(INVALID_REAL_DATE_MESSAGE)
		})
		it('should return true when date is after today', () => {
			// Arrange
			const value = new Date();
			value.setDate(value.getDate() + 1);

			// Act
			const result = validateRealDateTransferField(value.toISOString());

			// Assert
			expect(result.succeeded).toBeTruthy();
		})
	})
	describe('validateEmailField', () => {
		it('should return true when email is not informed', () => {
			// Arrange
			const value = undefined;

			// Act
			const result = validateEmailField(value);

			// Assert 
			expect(result.succeeded).toBeTruthy();
		})
		it('should return false when email is not well formed', () => {
			// Arrange
			const value = 'john@email';

			// Act
			const result = validateEmailField(value);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errorMessage).toEqual(INVALID_EMAIL_MESSAGE);
		})
		it('should return true when email is well formed', () => {
			// Arrange
			const value = 'john@email.com';

			// Act
			const result = validateEmailField(value);

			// Assert
			expect(result.succeeded).toBeTruthy();
		})
	})
})
