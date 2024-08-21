import { FC } from "react";
import { AccountVm } from "../../account-list.vm";
import { AccountListItemComponent } from "../account-item/account-list-item.component";
import classes from "./account-list-table.component.module.css";
interface Props {
  accountList: AccountVm[];
}
export const AccountListTableComponent: FC<Props> = (props) => {
  const { accountList } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.headerTable}>
          <span className={classes.headerCell}>IBAN</span>
          <span className={classes.headerCell}>ALIAS</span>
          <span className={classes.headerCell}>SALDO DISPONIBLE</span>
          <span className={classes.headerCell}>ÚLTIMA OPERACIÓN</span>
          <span className={classes.headerCell}>OPERACIÓN</span>
        </div>
        <div className={classes.gridTable}>
          {accountList.map((account) => (
            <AccountListItemComponent accountItem={account} key={account.id} />
          ))}
        </div>
      </div>
    </>
  );
};
