import { IAuth } from "./IAuth";

export interface IAuthReducer {
    isLogin: boolean,
    auth: IAuth | null,
    isLoading: false,
}