import axios from "axios";
import { getCurrentTabOrigin } from "./utils";


export const httpClient = axios.create({
    baseURL: await getCurrentTabOrigin()
});

export type { HTTPClientResponse } from './types';
export { getCurrentTabOrigin } from './utils'