import { FC } from "react";
import { AccountVm } from "../../viewModels";
import classes from './movement-list-header.module.css';

interface Props {
	account: AccountVm
}

export const MovementListHeader: FC<Props> = (props) => {
	const { account } = props
	return (
		<div className={classes.headerContainer}>
			<h1>Saldos y Últimos movimientos</h1>
			<div className={classes.headerBalanceInfo}>
				<span>
					Saldo Disponible:
				</span>
				<span>{account.balance} &#8364; </span>
			</div>
		</div>
	)
}
