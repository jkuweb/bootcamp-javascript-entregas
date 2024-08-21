import { AppLayout } from "@/layouts";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAccountList, saveTransfer } from "./api";
import { TransferFormComponent } from "./components/transfer-form.component";
import { mapAccountFromApiToVm, mapTransferFromVmToApi } from "./transfer.mapper";
import classes from './transfer.page.module.css';
import { AccountVm, TransferVm } from "./transfer.vm";

export const TransferPage: FC = () => {
	const { id } = useParams<{ id: string }>();
	const [accountList, setAccountList] = useState<AccountVm[]>([])

	useEffect(() => {
		getAccountList().then((result) => {
			const accountListVm = result.map(mapAccountFromApiToVm);
			setAccountList(accountListVm)
		})
	}, [])

	const handleTransfer = (transferInfo: TransferVm) => {
		const transfer = mapTransferFromVmToApi(transferInfo);
		saveTransfer(transfer).then((result) => {
			if (result) {
				alert('Transferencia realizada con éxito')
			} else {

				alert('Error al realizar la transferencia')
			}
		})
	}

	return (
		<AppLayout>
			<div className={classes.container}>
				<h1 className={classes.title}>Transferencias Nacionales</h1>
				<TransferFormComponent accountList={accountList} onTransfer={handleTransfer} defaultAccountId={id} />
			</div>
		</AppLayout>
	);
};
