import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { AccountVm, createEmptyTransferError, createEmptyTransferVm, TransferError, TransferVm } from "../transfer.vm";
import { validateForm } from "../validations";
import classes from './transfer-form.component.module.css';

interface Props {
	accountList: AccountVm[],
	onTransfer: (transfer: TransferVm) => void,
	defaultAccountId?: string,
}

export const TransferFormComponent: FC<Props> = (props) => {
	const { accountList, onTransfer, defaultAccountId } = props
	const [transfer, setTransfer] = useState<TransferVm>(createEmptyTransferVm)
	const [errors, setErrors] = useState<TransferError>(createEmptyTransferError())

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formValidationResult = validateForm(transfer)
		setErrors(formValidationResult.errors);
		if (formValidationResult.succeeded) {
			onTransfer(transfer)
		}
	}

	useEffect(() => {
		if (defaultAccountId) {
			setTransfer((prevTransfer) => ({
				...prevTransfer,
				accountId: defaultAccountId
			}))
		}
	}, [])

	const handleFieldChange = (e: | ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
		setTransfer({
			...transfer,
			[e.target.name]: e.target.value
		})
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className={classes.formContainer}>
					<div>
						<label>Seleccione una cuenta origen:</label>
						<select
							name="accountId"
							className={classes.large}
							value={transfer.accountId}
							onChange={handleFieldChange}
						>
							<option value="">Seleccione una cuenta</option>
							{accountList.map((account) => (
								<option value={account.id} key={account.id}>{account.alias}</option>
							))}
						</select>
						<p className={classes.error}>{errors.accountId}</p>
					</div>
					<div>
						<label htmlFor="iban" >Ingrese el IBAN de destino:</label>
						<input
							type="text"
							id="iban"
							name='iban'
							className={classes.large}
							onChange={handleFieldChange}
						/>
						<p className={classes.error}>{errors.iban}</p>
					</div>
					<div>
						<label htmlFor="name">Beneficiario:</label>
						<input
							type="text"
							name="name"
							className={classes.large}
							id="name"
							onChange={handleFieldChange}
						/>
						<p className={classes.error}>{errors.name}</p>
					</div>
					<div>
						<label htmlFor="amount"> <span>(EUR)</span>  Importe:</label>
						<input
							type="number" name="amount"
							className={classes.large}
							id="amount"
							value={transfer.amount}
							onChange={handleFieldChange}
						/>
						<p className={classes.error}>{errors.amount}</p>
					</div>
					<div>
						<label htmlFor="concept">Concepto:</label>
						<input
							type="text"
							name="concept"
							className={classes.large}
							id="concept"
							value={transfer.concept}
							onChange={handleFieldChange}
						/>
						<p className={classes.error}>{errors.concept}</p>
					</div>
					<div>
						<label htmlFor="notes">Observaciones:</label>
						<input
							type="text"
							name="notes"
							className={classes.large}
							id="notes"
							value={transfer.notes}
							onChange={handleFieldChange}
						/>
						<p className={classes.error}>{errors.notes}</p>
					</div>
				</div>
				<div className={classes.formContainer}>
					<div>
						<p>
							Para que la tranferencia se realice en otra fecha diferente a la de hoy, por favor, indíquemos la fecha de ejecución:
						</p>
						<div>
							<label htmlFor="realDateTransfer">Fecha de ejecución:</label>
							<input
								type="date"
								name="realDateTransfer"
								className={classes.large}
								id="realDateTransfer"
								value={transfer.realDateTransfer}
								onChange={handleFieldChange}
							/>
							<p className={classes.error}>{errors.realDateTransfer}</p>
						</div>
					</div>

				</div>
				<div className={classes.formContainer}>
					<div>
						<p>Escriba una dirección de email para dar aviso al beneficiario:</p>
						<div>
							<label htmlFor="email">Email del beneficiario: </label>
							<input
								type="email"
								id="email"
								name="email"
								className={classes.large}
								value={transfer.email}
								onChange={handleFieldChange}
							/>
							<p className={classes.root}>{errors.email}</p>
						</div>


					</div>
				</div>
				<button className={classes.button} type="submit">REALIZAR LA TRANSFERENCIA</button>
			</form>
		</div>

	)
}
