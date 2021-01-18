import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";
import setting from "@settings";
import fetch from 'isomorphic-fetch';
import { ICategoryReducer } from "@interfaces/reducers/ICategoryReducer";
import { CategoryServiceClient } from "../../protos/CategoryServiceClientPb";
import { GetAllParentsRq } from "../../protos/category_pb";

export const getCategories = createAsyncThunk("categories/getAll", async (_, store) => {
    const getState: any = store.getState();
    const token = getState.auth.token;

    try {
        if (typeof window != "undefined") {
            const client = new CategoryServiceClient(setting.getApiProto(), null, null);
            const rq = new GetAllParentsRq();
            const response = await client.getAll(rq, {});
            return response.toObject();
        } else {
            const response = await fetch(setting.getLocalApi("categories"), {
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
    name: 'categories',
    initialState: {
        categories: [],
    } as ICategoryReducer,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(HYDRATE, (state, action: any) => {
                return {
                    ...state, // use previous state
                    ...action.payload.category, // apply delta from hydration
                }
            })
            .addCase(getCategories.fulfilled, (state, action: any) => {
                state.categories = action.payload?.categories || [];
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
export const selectCategories = (state) => ({
    categories: state.category.categories,
})

// export const {} = authSlice.actions

export default authSlice.reducer