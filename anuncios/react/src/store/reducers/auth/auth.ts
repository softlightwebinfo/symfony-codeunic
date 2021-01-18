import { authType } from "../../actionCreators/auth";
import { HYDRATE } from "next-redux-wrapper";
import { IAuthReducer } from "@interfaces/reducers/IAuthReducer";

export const INITIAL_STATE: IAuthReducer = {
    auth: null,
    isLogin: false,
    isLoading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case HYDRATE: {
            return {
                ...state, // use previous state
                ...action.payload.auth, // apply delta from hydration
            }
        }
        case authType.AUTH_SUCCESS: {
            return {
                ...state,
                auth: action.auth,
                isLogin: true,
                isLoading: false,
            }
        }
        case authType.AUTH_FAILURE: {
            return {
                ...state,
                auth: null,
                isLogin: false,
                isLoading: false,
            }
        }
        case authType.AUTH_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case authType.AUTH_LOGOUT_REQUEST: {
            return {
                ...state,
                auth: null,
                isLogin: false,
                isLoading: true,
            }
        }
        default: {
            return state;
        }
    }
}