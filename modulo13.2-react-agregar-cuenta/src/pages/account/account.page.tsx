import { AppLayout } from "@/layouts";
import { FC } from "react";
import { mapAccountFromVmToApi } from "./account.mapper";
import classes from './account.page.module.css';
import { AccountVm } from "./account.vm";
import { saveAccount } from "./api/account.api";
import { AccountFormComponent } from "./components";

export const AccountPage: FC = () => {

	const handleCreateAccount = (accountInfo: AccountVm) => {
		const account = mapAccountFromVmToApi(accountInfo);
		saveAccount(account).then(result => {
			if (result) {
				alert('Se ha creado la nueva cuenta correctamente')
			} else {
				alert('No se ha podido crear la nueva cuenta')
			}
		});
	}

	return (
		<AppLayout>
			<div className={classes.container}>
				<h1 className={classes.title}>Crear nueva cuenta</h1>
				<AccountFormComponent onCreateAccount={handleCreateAccount} />

			</div>
		</AppLayout>
	);
};
