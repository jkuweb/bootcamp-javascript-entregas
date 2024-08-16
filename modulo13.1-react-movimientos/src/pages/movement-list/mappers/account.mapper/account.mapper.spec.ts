import * as apiModel from "../../api/account.api/account.api.model";
import { mapAccountFromApiToVm } from "./account.mapper";

describe("pages/account-list/account-list.mapper specs", () => {
	it("mapAccountListFromApiToVm", () => {
		// Arrange
		const account: apiModel.Account =
		{
			id: "1",
			iban: "ES91 2100 0418 4502 0005 1332",
			type: "1",
			name: "Gastos mes",
			balance: 1490,
			lastTransaction: "2019-12-09T21:30:00",
		}
		// Act
		const result = mapAccountFromApiToVm(account);

		// Assert
		expect(result).toEqual(
			{
				id: "1",
				iban: "ES91 2100 0418 4502 0005 1332",
				name: "Gastos mes",
				balance: "1490",
				lastTransaction: new Date("2019-12-09T21:30:00"),
			}
		);
	});
});
