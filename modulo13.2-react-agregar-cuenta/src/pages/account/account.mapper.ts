import * as viewModel from './account.vm';
import * as apiModel from './api';

export const mapAccountFromVmToApi = (account: viewModel.AccountVm): apiModel.Account => ({
	type: account.type,
	name: account.alias
})
