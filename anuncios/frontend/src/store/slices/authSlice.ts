import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuth } from "@interfaces/reducers/IAuth";
import { HYDRATE } from "next-redux-wrapper";
import { VerifyAuthRequest } from "../../protos/auth_pb";
import { AuthServiceClient } from "../../protos/AuthServiceClientPb";
import setting from "@settings";
import fetch from 'isomorphic-fetch';

export const initialValidate = createAsyncThunk("auth/validate", async (token: string) => {
    try {
        if (typeof window != "undefined") {
            const client = new AuthServiceClient(setting.getApiProto(), null, null);
            const rq = new VerifyAuthRequest();
            rq.setToken(token);
            const response = await client.verifyAuth(rq, {});
            return response.toObject();
        } else {
            const response = await fetch(setting.getLocalApi("auth/validate"), {
                method: "POST",
                body: JSON.stringify({token}),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            return await response.json();
        }
    } catch (e) {
        return "error";
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: "",
        user: null,
    } as IAuth,
    reducers: {
        login: {
            reducer: (state, action: PayloadAction<IAuth>) => {
                state.token = action.payload.token;
                state.user = action.payload.user;
            },
            prepare: (auth: IAuth) => {
                return {payload: auth}
            },
        },
        logout(state) {
            state.user = null;
            state.token = "";
        },
    },
    extraReducers: builder => {
        builder
            .addCase(HYDRATE, (state, action: any) => {
                const nextState = {
                    ...state, // use previous state
                    ...action.payload.auth, // apply delta from hydration
                };
                if (state.user) nextState.user = state.user;
                if (state.token) nextState.token = state.token;
                return nextState
            })
            .addCase(initialValidate.fulfilled, (state, action: any) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                return state;
            })
    }
})

/**
 * Extract count from root state
 *
 * @param   {Object} state The root state
 * @returns {number} The current count
 */
export const selectAuth = (state) => ({
    token: state.auth.token,
    user: state.auth.user,
})

export const {
    login,
    logout,
} = authSlice.actions

export default authSlice.reducer