import { FC, useEffect, useState } from "react";
import { getMovementList } from "../../api";
import { mapMovementListFromApiToVm } from "../../mappers";
import { AccountVm, MovementVm } from "../../viewModels";
import { MovementListTableItemComponent } from "../movement-list-table-item";
import classes from './movement-list-table.component.module.css';

interface Props {
	account: AccountVm
}

export const MovementListTableComponent: FC<Props> = (props) => {
	const { account } = props;
	const [movements, setMovements] = useState<MovementVm[]>([])

	useEffect(() => {
		try {
			getMovementList(account.id).then(movements => setMovements(mapMovementListFromApiToVm(movements)))
		} catch (error) {
			throw new Error(`Ha ocurrido un error a la hora de obtener los datos, error => ${error}`)
		}
	}, [account.id])

	return (
		<>
			<div className={classes.tableTopHeader}>
				<div>
					<span>Álias:</span>
					<span>
						{account.name}
					</span>
				</div>
				<div>
					<span>IBAN:</span>
					<span>
						{account.iban}
					</span>
				</div>
			</div>
			<div className={classes.gridContainer}>
				<div className={classes.headerTable}>
					<span className={classes.headerCell}>FECHA</span>
					<span className={classes.headerCell}>FECHA VALOR</span>
					<span className={classes.headerCell}>DESCRIPCION</span>
					<span className={classes.headerCell}>IMPORTE</span>
					<span className={classes.headerCell}>SALDO DISPONIBLE</span>
				</div>
				<div className={classes.gridTable}>
					{movements.map((movement) => (
						<MovementListTableItemComponent movement={movement} key={movement.id} />
					))}
				</div>
			</div>
		</>
	)

}
