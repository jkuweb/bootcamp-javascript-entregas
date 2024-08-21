import { vi } from 'vitest';
import { AccountVm } from "../account.vm";
import * as accountFieldValidation from './account-field.validation';
import { validateForm } from "./account-form.validation";

describe('account-form.validation specs', () => {
	describe('validateForm', () => {
		it('should return true when all fields are correct', () => {
			// Arrange 
			const account: AccountVm = {
				type: '1',
				alias: 'ahorros',
			}

			vi.spyOn(accountFieldValidation, 'validateAccountTypeField').mockReturnValue({ succeeded: true })
			vi.spyOn(accountFieldValidation, 'validateAliasField').mockReturnValue({
				succeeded: true
			})

			// Act
			const result = validateForm(account)

			// Assert
			expect(result.succeeded).toBeTruthy();
			expect(result.errors).toEqual({
				type: '',
				alias: ''
			})
		})
		it('should return false when account type field not informed', () => {
			// Arrange 
			const account: AccountVm = {
				type: '',
				alias: 'ahorros',
			}

			vi.spyOn(accountFieldValidation, 'validateAccountTypeField').mockReturnValue({ succeeded: false, errorMessage: 'Error' })
			vi.spyOn(accountFieldValidation, 'validateAliasField').mockReturnValue({
				succeeded: true
			})

			// Act
			const result = validateForm(account)

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errors).toEqual({
				type: 'Error',
				alias: ''
			})
		})
		it('should return false when alias field not informed', () => {
			// Arrange 
			const account: AccountVm = {
				type: '1',
				alias: '',
			}

			vi.spyOn(accountFieldValidation, 'validateAccountTypeField').mockReturnValue({ succeeded: true })
			vi.spyOn(accountFieldValidation, 'validateAliasField').mockReturnValue({
				succeeded: false, errorMessage: 'Error'
			})

			// Act
			const result = validateForm(account)

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errors).toEqual({
				type: '',
				alias: 'Error'
			})
		})
	})
})
