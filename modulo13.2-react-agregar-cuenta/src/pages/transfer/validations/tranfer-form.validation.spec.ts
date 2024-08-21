import { vi } from 'vitest';
import { TransferVm } from "../transfer.vm";
import * as transferFieldValidation from './transfer-field.validation';
import { validateForm } from './transfer-form.validation';

describe('transfer-form.validation specs', () => {
	describe('validateForm', () => {
		it('should return true when all fields are correct', () => {
			// Arrange
			const transfer: TransferVm = {
				accountId: '1',
				iban: "ES91 2100 0418 4502 0005 1332",
				name: 'John Doe',
				amount: 1,
				concept: 'test',
				notes: '',
				dateTransfer: '',
				realDateTransfer: undefined,
				email: ''
			}

			vi.spyOn(transferFieldValidation, 'validateIBANField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateNameField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateAmountField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateConceptField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateNotesField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateRealDateTransferField').mockReturnValue({ succeeded: true })
			vi.spyOn(transferFieldValidation, 'validateEmailField').mockReturnValue({ succeeded: true })

			// Act 
			const result = validateForm(transfer)

			// Assert 
			expect(result.succeeded).toBeTruthy();
			expect(result.errors).toEqual({
				accountId: '',
				iban: '',
				name: '',
				amount: '',
				concept: '',
				notes: '',
				realDateTransfer: '',
				email: '',
				dateTransfer: ''
			})
		})

		it('should return false when validateIban is incorrect', () => {
			// Arrange 
			const transfer: TransferVm = {
				accountId: '1',
				iban: "",
				name: 'John Doe',
				amount: 1,
				concept: 'test',
				notes: '',
				dateTransfer: '',
				realDateTransfer: undefined,
				email: ''
			}
			vi.spyOn(transferFieldValidation, 'validateIBANField').mockReturnValue({
				succeeded: false,
				errorMessage: 'Error'
			})
			vi.spyOn(transferFieldValidation, 'validateNameField').mockReturnValue({
				succeeded: true,
			})
			vi.spyOn(transferFieldValidation, 'validateAmountField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateConceptField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateNotesField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateRealDateTransferField').mockReturnValue({ succeeded: true })
			vi.spyOn(transferFieldValidation, 'validateEmailField').mockReturnValue({ succeeded: true })

			// Act 
			const result = validateForm(transfer);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errors).toEqual({
				accountId: '',
				iban: 'Error',
				name: '',
				amount: '',
				concept: '',
				notes: '',
				realDateTransfer: '',
				email: '',
				dateTransfer: ''

			})
		})


		it('should return false when validateNameField is incorrect', () => {
			// Arrange 
			const transfer: TransferVm = {
				accountId: '1',
				iban: "ES91 2100 0418 4502 0005 1332",
				name: '',
				amount: 1,
				concept: 'test',
				notes: '',
				dateTransfer: '',
				realDateTransfer: undefined,
				email: ''
			}
			vi.spyOn(transferFieldValidation, 'validateIBANField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateNameField').mockReturnValue({
				succeeded: false,
				errorMessage: 'Error'
			})
			vi.spyOn(transferFieldValidation, 'validateAmountField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateConceptField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateNotesField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateRealDateTransferField').mockReturnValue({ succeeded: true })
			vi.spyOn(transferFieldValidation, 'validateEmailField').mockReturnValue({ succeeded: true })

			// Act 
			const result = validateForm(transfer);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errors).toEqual({
				accountId: '',
				iban: '',
				name: 'Error',
				amount: '',
				concept: '',
				notes: '',
				realDateTransfer: '',
				email: '',
				dateTransfer: ''

			})

		})
		it('should return false when validateAmount is incorrect', () => {
			// Arrange 
			const transfer: TransferVm = {
				accountId: '1',
				iban: "ES91 2100 0418 4502 0005 1332",
				name: 'John Doe',
				amount: -1,
				concept: 'test',
				notes: '',
				dateTransfer: '',
				realDateTransfer: undefined,
				email: ''
			}
			vi.spyOn(transferFieldValidation, 'validateIBANField').mockReturnValue({
				succeeded: true,
			})
			vi.spyOn(transferFieldValidation, 'validateNameField').mockReturnValue({
				succeeded: true,
			})
			vi.spyOn(transferFieldValidation, 'validateAmountField').mockReturnValue({
				succeeded: false,
				errorMessage: 'Error'
			})
			vi.spyOn(transferFieldValidation, 'validateConceptField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateNotesField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateRealDateTransferField').mockReturnValue({ succeeded: true })
			vi.spyOn(transferFieldValidation, 'validateEmailField').mockReturnValue({ succeeded: true })

			// Act 
			const result = validateForm(transfer);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errors).toEqual({
				accountId: '',
				iban: '',
				name: '',
				amount: 'Error',
				concept: '',
				notes: '',
				realDateTransfer: '',
				email: '',
				dateTransfer: ''

			})
		})
		it('should return false when validateConcept is incorrect', () => {
			// Arrange 
			const transfer: TransferVm = {
				accountId: '1',
				iban: "ES91 2100 0418 4502 0005 1332",
				name: 'John Doe',
				amount: 1,
				concept: '',
				notes: '',
				dateTransfer: '',
				realDateTransfer: undefined,
				email: ''
			}
			vi.spyOn(transferFieldValidation, 'validateIBANField').mockReturnValue({
				succeeded: true,
			})
			vi.spyOn(transferFieldValidation, 'validateNameField').mockReturnValue({
				succeeded: true,
			})
			vi.spyOn(transferFieldValidation, 'validateAmountField').mockReturnValue({
				succeeded: true,
			})
			vi.spyOn(transferFieldValidation, 'validateConceptField').mockReturnValue({
				succeeded: false,
				errorMessage: 'Error'
			})
			vi.spyOn(transferFieldValidation, 'validateNotesField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateRealDateTransferField').mockReturnValue({ succeeded: true })
			vi.spyOn(transferFieldValidation, 'validateEmailField').mockReturnValue({ succeeded: true })

			// Act 
			const result = validateForm(transfer);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errors).toEqual({
				accountId: '',
				iban: '',
				name: '',
				amount: '',
				concept: 'Error',
				notes: '',
				realDateTransfer: '',
				email: '',
				dateTransfer: ''

			})
		})
		it('should return false when validateEmail is incorrect', () => {
			// Arrange 
			const transfer: TransferVm = {
				accountId: '1',
				iban: "ES91 2100 0418 4502 0005 1332",
				name: 'John Doe',
				amount: 1,
				concept: 'test',
				notes: '',
				dateTransfer: '',
				realDateTransfer: undefined,
				email: 'john@email'
			}
			vi.spyOn(transferFieldValidation, 'validateIBANField').mockReturnValue({
				succeeded: true,
			})
			vi.spyOn(transferFieldValidation, 'validateNameField').mockReturnValue({
				succeeded: true,
			})
			vi.spyOn(transferFieldValidation, 'validateAmountField').mockReturnValue({
				succeeded: true,
			})
			vi.spyOn(transferFieldValidation, 'validateConceptField').mockReturnValue({
				succeeded: true,
			})
			vi.spyOn(transferFieldValidation, 'validateNotesField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateRealDateTransferField').mockReturnValue({ succeeded: true })
			vi.spyOn(transferFieldValidation, 'validateEmailField').mockReturnValue({ succeeded: false, errorMessage: 'Error' })

			// Act 
			const result = validateForm(transfer);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errors).toEqual({
				accountId: '',
				iban: '',
				name: '',
				amount: '',
				concept: '',
				notes: '',
				realDateTransfer: '',
				email: 'Error',
				dateTransfer: ''
			})
		})
		it('should return false when validateRealDateField is incorrect', () => {
			// Arrange 
			const date = new Date();
			date.setDate(date.getDate() - 1);

			const transfer: TransferVm = {
				accountId: '1',
				iban: "ES91 2100 0418 4502 0005 1332",
				name: 'John Doe',
				amount: 1,
				concept: 'test',
				notes: '',
				dateTransfer: date.toISOString(),
				realDateTransfer: undefined,
				email: 'john@email.com'
			}
			vi.spyOn(transferFieldValidation, 'validateIBANField').mockReturnValue({
				succeeded: true,
			})
			vi.spyOn(transferFieldValidation, 'validateNameField').mockReturnValue({
				succeeded: true,
			})
			vi.spyOn(transferFieldValidation, 'validateAmountField').mockReturnValue({
				succeeded: true,
			})
			vi.spyOn(transferFieldValidation, 'validateConceptField').mockReturnValue({
				succeeded: true,
			})
			vi.spyOn(transferFieldValidation, 'validateNotesField').mockReturnValue({
				succeeded: true
			})
			vi.spyOn(transferFieldValidation, 'validateRealDateTransferField').mockReturnValue({
				succeeded: false,
				errorMessage: 'Error'
			})
			vi.spyOn(transferFieldValidation, 'validateEmailField').mockReturnValue({ succeeded: true, })

			// Act 
			const result = validateForm(transfer);

			// Assert
			expect(result.succeeded).toBeFalsy();
			expect(result.errors).toEqual({
				accountId: '',
				iban: '',
				name: '',
				amount: '',
				concept: '',
				notes: '',
				realDateTransfer: 'Error',
				email: '',
				dateTransfer: ''
			})
		})
	})
})
