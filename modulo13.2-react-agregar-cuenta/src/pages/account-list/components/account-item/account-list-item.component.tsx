import { appRoutes } from "@/core/router";
import { ChangeEvent, FC } from "react";
import { generatePath, Link, useNavigate } from "react-router-dom";
import { AccountVm } from "../../account-list.vm";
import classes from "./account-list-item.component.module.css";

const ACTION_NONE = "";
const ACTION_TRANSFER = "1";
const ACTION_MOVEMENTS = "2";

interface Props {
	accountItem: AccountVm;
}
export const AccountListItemComponent: FC<Props> = (props) => {
	const { accountItem } = props;
	const navigate = useNavigate();
	const handleSelectedOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
		switch (e.target.value) {
			case ACTION_TRANSFER:
				navigate(
					generatePath(appRoutes.transferFromAccount, { id: accountItem.id })
				);
				break;
			case ACTION_MOVEMENTS:
				navigate(generatePath(appRoutes.movements, { id: accountItem.id }));
				break;

			default:
				break;
		}
	};

	return (
		<div className={classes.row}>
			<span className={`${classes.dataCell} ${classes.bold}`}>
				<Link to={generatePath(appRoutes.movements, { id: accountItem.id })}>
					{accountItem.iban}
				</Link>
			</span>
			<span className={classes.dataCell}>{accountItem.name}</span>
			<span className={`${classes.dataCell} ${classes.alignRight}`}>
				{accountItem.balance}
			</span>
			<span className={`${classes.dataCell} ${classes.alignRight}`}>
				{accountItem.lastTransaction.toLocaleDateString()}
			</span>
			<span className={`${classes.dataCell} ${classes.container}`}>
				<select
					className={classes.select}
					onChange={handleSelectedOptionChange}
				>
					<option value={ACTION_NONE}>Seleccionar</option>
					<option value={ACTION_TRANSFER}>Transferir</option>
					<option value={ACTION_MOVEMENTS}>Movimientos</option>
				</select>
			</span>
		</div>
	);
};