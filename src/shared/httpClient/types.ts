import { AxiosResponse } from "axios";

export type HTTPClientResponse<T = any, D = any> = Promise<AxiosResponse<T, D>>;