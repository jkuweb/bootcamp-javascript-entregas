import axios from "axios";
import { Account } from "./account-list.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = async (): Promise<Account[]> =>
	axios.get<Account[]>(url).then(({ data }) => data);
