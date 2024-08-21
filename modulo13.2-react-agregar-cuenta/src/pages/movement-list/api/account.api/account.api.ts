import axios from "axios";
import { Account } from "./account.api.model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`

export const getAccount = async (id: string): Promise<Account> =>
	axios.get(url, { params: { id } }).then(({ data }) => data[0])
