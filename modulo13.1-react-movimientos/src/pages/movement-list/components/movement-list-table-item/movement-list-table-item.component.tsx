import { FC } from "react"
import { MovementVm } from "../../viewModels"
import classes from './movement-list-table-item.component.module.css'

interface Props {
	movement: MovementVm
}
export const MovementListTableItemComponent: FC<Props> = (props) => {
	const { movement } = props

	const isNegativeNumber = (value: string) => {
		const valueToString = Number(value)
		const mathSign = Math.sign(valueToString)
		if (mathSign !== -1) {
			return false
		}
		return true
	}

	return (
		<>
			<div className={classes.row}>
				<div className={`${classes.alignLeft} ${classes.dataCell}`} >{movement.transaction.toLocaleDateString()}</div>
				<div className={`${classes.alignLeft} ${classes.dataCell}`} >{movement.realTransaction.toLocaleDateString()}</div>
				<div className={`${classes.alignLeft} ${classes.dataCell}`} >{movement.description}</div>
				<div className={`${classes.alignRight} ${classes.dataCell}`} >
					<span className={
						isNegativeNumber(movement.amount) ? classes.red : ''}>
						{movement.amount}
					</span>
				</div>
				<div className={`${classes.alignRight} ${classes.dataCell}`} >{movement.balance}</div>
			</div >
		</>
	)
}
