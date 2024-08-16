import { AppLayout } from "@/layouts";
import { FC, useEffect, useState } from "react";
import { mapAccountListFromApiToVm } from "./account-list.mapper";
import classes from "./account-list.page.module.css";
import { AccountVm } from "./account-list.vm";
import { getAccountList } from "./api";
import { AccountListTableComponent } from "./components";

export const AccountListPage: FC = () => {
	const [accountList, setAccountList] = useState<AccountVm[]>([]);
	useEffect(() => {
		getAccountList().then((result) =>
			setAccountList(mapAccountListFromApiToVm(result))
		);
	}, []);
	return (
		<>
			<AppLayout>
				<div className={classes.root}>
					<div className={classes.headerContainer}>
						<h1>Mis cuentas</h1>
						<button>AGREGAR NUEVA CUENTA</button>
					</div>
					<AccountListTableComponent accountList={accountList} />
				</div>
			</AppLayout>
		</>
	);
};
