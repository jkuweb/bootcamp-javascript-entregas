import { AppLayout } from "@/layouts";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAccount } from "./api";
import { MovementListHeader, MovementListTableComponent } from "./components";
import { mapAccountFromApiToVm } from "./mappers";
import classes from './movement-list.module.css';
import { AccountVm, createEmpyAccount } from "./viewModels";

export const MovementListPage: FC = () => {
	const [account, setAccount] = useState<AccountVm>(createEmpyAccount())
	const { id: accountId } = useParams()

	useEffect(() => {
		try {
			if (accountId !== undefined) {
				getAccount(accountId).then(account => setAccount(mapAccountFromApiToVm(account)))
			}
		} catch (error) {
			throw new Error(`Ha ocurrido un error a la hora de obterner los datos: ${error}`)
		}
	}, [])

	return (
		<AppLayout>
			<div className={classes.root}>
				<MovementListHeader account={account} />
				<MovementListTableComponent account={account} />
			</div>
		</AppLayout>
	);
};
