import axios from "axios";
import { Movement } from "./movement-list.api.model";


const url = `${import.meta.env.VITE_BASE_API_URL}/movements`

export const getMovementList = async (accountId: string): Promise<Movement[]> =>
	axios.get<Movement[]>(url, { params: { accountId } }).then(({ data }) => data)
