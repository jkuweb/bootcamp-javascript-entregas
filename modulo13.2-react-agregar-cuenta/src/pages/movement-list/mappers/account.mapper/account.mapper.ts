import * as apiModel from '../../api/account.api/account.api.model';
import * as viewModel from '../../viewModels/account.vm';

export const mapAccountFromApiToVm = (account: apiModel.Account): viewModel.AccountVm => {
	return {
		id: account.id,
		iban: account.iban,
		name: account.name,
		balance: account.balance.toString(),
		lastTransaction: new Date(account.lastTransaction),
	}
}
	;
