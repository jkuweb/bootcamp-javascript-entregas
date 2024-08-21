import { ChangeEvent, FC, FormEvent, useState } from "react";
import { AccountError, AccountVm, createEmptyAccount, createEmptyAccountError } from "../account.vm";
import { validateForm } from "../validations/account-form.validation";
import classes from './account-form.component.module.css';
import { CUENTA_AHORRO_ID, CUENTA_CORRIENTE_ID, getAccountTypes } from "./account-type-options-const";

interface Props {
	onCreateAccount: (account: AccountVm) => void
}

export const AccountFormComponent: FC<Props> = (props) => {
	const [account, setAccount] = useState(createEmptyAccount())
	const [errors, setErrors] = useState<AccountError>(createEmptyAccountError());
	const { onCreateAccount } = props;
	const accountTypes = getAccountTypes();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formValidationResult = validateForm(account);
		setErrors(formValidationResult.errors)
		if (formValidationResult.succeeded) {
			onCreateAccount(account)
		}
	}

	const handleChangeField = (e:
		| ChangeEvent<HTMLSelectElement>
		| ChangeEvent<HTMLInputElement>
	) => {
		setAccount({
			...account,
			[e.target.name]: e.target.value
		})
	}

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<div className={classes.formContainer}>
				<div>
					<label htmlFor="accountType">Tipo de cuenta: </label>
					<select
						className={classes.large}
						name="type"
						id="accountType"
						onChange={handleChangeField}
					>
						<option value="">Seleccionar</option>
						<option value={CUENTA_CORRIENTE_ID}>{accountTypes.cuentaCorriente}</option>
						<option value={CUENTA_AHORRO_ID}>{accountTypes.cuentaAhorro}</option>
					</select>
					<p className={classes.error}>{errors.type}</p>
				</div>
				<div>
					<label htmlFor="alias">Alías:</label>
					<input
						className={classes.large}
						type="text"
						name="alias"
						id="alias"
						onChange={handleChangeField}
					/>
					<p className={classes.error}>{errors.alias}</p>
				</div>
				<button type="submit" className={classes.button}>CREAR CUENTA</button>
			</div>
		</form>
	)
}
