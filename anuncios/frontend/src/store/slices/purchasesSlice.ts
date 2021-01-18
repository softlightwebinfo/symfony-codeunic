import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";
import setting from "@settings";
import fetch from 'isomorphic-fetch';
import { IPurchasesReducer } from "@interfaces/reducers/IPurchasesReducer";
import { PurchasesServiceClient } from "../../protos/PurchasesServiceClientPb";
import { GetAllArticlesRq, GetAllProjectsRq } from "../../protos/purchases_pb";

export const getProjects = createAsyncThunk("purchases/getAllProjects", async (_, store) => {
    const getState: any = store.getState();
    const token = getState.auth.token;

    try {
        if (typeof window != "undefined") {
            const client = new PurchasesServiceClient(setting.getApiProto(), null, null);
            const rq = new GetAllProjectsRq();
            const response = await client.getAllProjects(rq, {});
            return response.toObject();
        } else {
            const response = await fetch(setting.getLocalApi("purchases/projects"), {
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

export const getArticles = createAsyncThunk("purchases/getArticles", async (_, store) => {
    const getState: any = store.getState();
    const token = getState.auth.token;

    try {
        if (typeof window != "undefined") {
            const client = new PurchasesServiceClient(setting.getApiProto(), null, null);
            const rq = new GetAllArticlesRq();
            const response = await client.getAllArticles(rq, {});
            return response.toObject();
        } else {
            const response = await fetch(setting.getLocalApi("purchases/articles"), {
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

const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: {
        projects: [],
        articles: [],
    } as IPurchasesReducer,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(HYDRATE, (state, action: any) => {
                return {
                    ...state, // use previous state
                    ...action.payload.purchases, // apply delta from hydration
                }
            })
            .addCase(getProjects.fulfilled, (state, action: any) => {
                state.projects = action.payload?.data || [];
                return state;
            })
            .addCase(getArticles.fulfilled, (state, action: any) => {
                state.articles = action.payload?.data || [];
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
export const selectPurchases = (state) => ({
    projects: state.purchases.projects,
    articles: state.purchases.articles,
})

// export const {} = authSlice.actions

export default purchasesSlice.reducer